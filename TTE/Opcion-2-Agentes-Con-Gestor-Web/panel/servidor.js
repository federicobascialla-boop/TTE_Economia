#!/usr/bin/env node
/**
 * Servidor local para el Panel de Control Docente - Economía (5.° año)
 * Funciona en Windows/Mac/Linux con Node.js sin dependencias externas.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const {
  UNIDADES_Y_TEMAS,
  crearSlug,
  obtenerFechaHoy,
  generarPedagogo,
  generarDisenador,
  generarGamificador
} = require('./generador');

const BASE_DIR = path.resolve(__dirname, '..');
const PORT = process.env.PORT || 4123;

function sendJson(res, data, status = 200) {
  const body = Buffer.from(JSON.stringify(data, null, 2), 'utf-8');
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': body.length,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  res.end(body);
}

function sendText(res, text, status = 200, contentType = 'text/html; charset=utf-8') {
  const body = Buffer.from(text, 'utf-8');
  res.writeHead(status, {
    'Content-Type': contentType,
    'Content-Length': body.length,
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  res.end(body);
}

function leerPedidoActual() {
  const pedidoFile = path.join(BASE_DIR, 'entradas', 'pedido.md');
  let pedidoRaw = '';
  const pedidoParsed = {};
  if (fs.existsSync(pedidoFile)) {
    pedidoRaw = fs.readFileSync(pedidoFile, 'utf-8');
    for (const line of pedidoRaw.split(/\r?\n/)) {
      const m = line.match(/^\s*-\s*\*\*([^:]+):\*\*\s*(.*)$/);
      if (m) {
        pedidoParsed[m[1].trim()] = m[2].trim();
      }
    }
  }
  return { pedidoRaw, pedidoParsed };
}

function guardarPedidoEnDisco(payload) {
  const pedidoFile = path.join(BASE_DIR, 'entradas', 'pedido.md');
  let content = '';
  if (payload.raw) {
    content = payload.raw.trim() + '\n';
  } else {
    const unidadTema = (payload.unidad_tema || '').trim() || 'Unidad 1 — La microeconomía. Aspectos generales: Teoría de la demanda y Elasticidad precio e ingreso de la demanda';
    const cursoGrupo = (payload.curso_grupo || '').trim() || '5.º año, orientación Economía. Grupo de ritmos heterogéneos';
    const tiempo = (payload.tiempo || '').trim() || '1 clase de 80 minutos';
    const modalidad = (payload.modalidad || '').trim() || 'trabajo en grupos de 4';
    const cuestaHoy = (payload.cuesta_hoy || '').trim() || 'los ejercicios del manual usan ejemplos lejanos y los chicos resuelven de memoria';
    const restricciones = (payload.restricciones || '').trim() || 'sin computadoras en el aula; hay proyector y pizarrón';
    const evitar = (payload.evitar || '').trim() || 'ejemplos con marcas reales o con cifras que no pueda verificar';
    const observaciones = (payload.observaciones || '').trim();
    const obsLine = observaciones ? `- **Observaciones:** ${observaciones}\n` : '- **Observaciones:** (opcional)\n';

    content =
      '# Pedido del docente\n\n' +
      'Editá este archivo antes de lanzar al Agente 1. Es lo único que tenés que escribir para arrancar.\n\n' +
      `- **Unidad y tema:** ${unidadTema}\n` +
      `- **Curso y grupo:** ${cursoGrupo}\n` +
      `- **Tiempo disponible:** ${tiempo}\n` +
      `- **Modalidad:** ${modalidad}\n` +
      `- **Qué me cuesta hoy:** ${cuestaHoy}\n` +
      `- **Restricciones:** ${restricciones}\n` +
      `- **Algo que quiero evitar:** ${evitar}\n` +
      `${obsLine}\n` +
      '> Guardado desde el Panel de Control Docente.\n';
  }
  fs.writeFileSync(pedidoFile, content, 'utf-8');
}

function getAgentFiles(subfolder) {
  const dirPath = path.join(BASE_DIR, 'salidas', subfolder);
  if (!fs.existsSync(dirPath)) return [];
  const files = [];
  const items = fs.readdirSync(dirPath);
  for (const name of items) {
    if (name.startsWith('.') || !name.endsWith('.md')) continue;
    const itemPath = path.join(dirPath, name);
    try {
      const stat = fs.statSync(itemPath);
      if (!stat.isFile()) continue;
      const content = fs.readFileSync(itemPath, 'utf-8');

      let estado = 'BORRADOR';
      const mEst = content.match(/Estado:\s*(APROBADO|BORRADOR)/i);
      if (mEst) estado = mEst[1].toUpperCase();

      const mFecha = content.match(/Fecha:\s*([^\n\r]+)/);
      const fecha = mFecha ? mFecha[1].trim() : '';

      const mPed = content.match(/Pedido:\s*([^\n\r]+)/);
      const resumen = mPed ? mPed[1].trim() : '';

      files.push({
        filename: name,
        fecha,
        resumen,
        estado,
        mtime: stat.mtimeMs / 1000,
        size: content.length,
        content
      });
    } catch (err) {
      console.error(`Error leyendo ${itemPath}:`, err.message);
    }
  }
  files.sort((a, b) => b.mtime - a.mtime);
  return files;
}

function obtenerEstadoPipeline() {
  const { pedidoRaw, pedidoParsed } = leerPedidoActual();

  const pedagogoFiles = getAgentFiles('pedagogo');
  const disenadorFiles = getAgentFiles('disenador');
  const gamificadorFiles = getAgentFiles('gamificador');

  const latestPedagogo = pedagogoFiles[0] || null;

  // Buscar la guía que corresponde al caso actual del pedagogo
  let latestDisenador = null;
  if (latestPedagogo) {
    latestDisenador = disenadorFiles.find(
      f => f.content.includes(latestPedagogo.filename) || f.mtime >= latestPedagogo.mtime
    ) || null;
  }

  // Buscar las dinámicas que corresponden a la guía actual del diseñador
  let latestGamificador = null;
  if (latestDisenador) {
    latestGamificador = gamificadorFiles.find(
      f => f.content.includes(latestDisenador.filename) || f.mtime >= latestDisenador.mtime
    ) || null;
  }

  const pedagogoAprobado = Boolean(latestPedagogo && latestPedagogo.estado === 'APROBADO');
  const disenadorAprobado = Boolean(latestDisenador && latestDisenador.estado === 'APROBADO');
  const gamificadorListo = Boolean(latestGamificador !== null);

  const unidades = Object.keys(UNIDADES_Y_TEMAS);

  return {
    ok: true,
    pedido: {
      raw: pedidoRaw,
      parsed: pedidoParsed
    },
    unidades,
    unidades_temas: UNIDADES_Y_TEMAS,
    pedagogo: {
      latest: latestPedagogo,
      aprobado: pedagogoAprobado,
      archivos: pedagogoFiles
    },
    disenador: {
      latest: latestDisenador,
      aprobado: disenadorAprobado,
      archivos: disenadorFiles,
      bloqueado: !pedagogoAprobado
    },
    gamificador: {
      latest: latestGamificador,
      listo: gamificadorListo,
      archivos: gamificadorFiles,
      bloqueado: !disenadorAprobado
    }
  };
}

function handleGetEstado(res) {
  sendJson(res, obtenerEstadoPipeline());
}

function handleSavePedido(res, payload) {
  try {
    guardarPedidoEnDisco(payload);
    sendJson(res, { ok: true, message: 'Pedido guardado correctamente.' });
  } catch (err) {
    sendJson(res, { ok: false, error: err.message }, 500);
  }
}

function handleGenerarAgente(res, payload) {
  try {
    const agente = payload.agente;
    if (!['pedagogo', 'disenador', 'gamificador'].includes(agente)) {
      return sendJson(res, { ok: false, error: 'Agente inválido' }, 400);
    }

    // Si vienen datos del formulario de pedido, guardarlos primero
    if (payload.pedido && typeof payload.pedido === 'object') {
      guardarPedidoEnDisco(payload.pedido);
    }

    const estado = obtenerEstadoPipeline();
    const pedidoParsed = estado.pedido.parsed;
    const fecha = obtenerFechaHoy();
    const slug = crearSlug(pedidoParsed['Unidad y tema'] || 'economia');
    const stamp = String(Date.now()).slice(-4);
    const filename = `${fecha}_${slug}_${stamp}.md`;

    if (agente === 'pedagogo') {
      const dir = path.join(BASE_DIR, 'salidas', 'pedagogo');
      fs.mkdirSync(dir, { recursive: true });
      const md = generarPedagogo(pedidoParsed);
      fs.writeFileSync(path.join(dir, filename), md, 'utf-8');
      return sendJson(res, {
        ok: true,
        agente: 'pedagogo',
        filename,
        message: '✨ Caso contextualizado generado por el Agente 1 (Pedagogo).'
      });
    }

    if (agente === 'disenador') {
      if (!estado.pedagogo.latest || !estado.pedagogo.aprobado) {
        return sendJson(res, {
          ok: false,
          error: 'El Agente 2 (Diseñador) requiere que primero apruebes el Caso del Agente 1 (Pedagogo).'
        }, 400);
      }
      const dir = path.join(BASE_DIR, 'salidas', 'disenador');
      fs.mkdirSync(dir, { recursive: true });
      const md = generarDisenador(pedidoParsed, estado.pedagogo.latest.filename);
      fs.writeFileSync(path.join(dir, filename), md, 'utf-8');
      return sendJson(res, {
        ok: true,
        agente: 'disenador',
        filename,
        message: '✨ Guía de resolución con andamiaje generada por el Agente 2 (Diseñador Didáctico).'
      });
    }

    if (agente === 'gamificador') {
      if (!estado.disenador.latest || !estado.disenador.aprobado) {
        return sendJson(res, {
          ok: false,
          error: 'El Agente 3 (Gamificador) requiere que primero apruebes la Guía del Agente 2 (Diseñador).'
        }, 400);
      }
      const dir = path.join(BASE_DIR, 'salidas', 'gamificador');
      fs.mkdirSync(dir, { recursive: true });
      const md = generarGamificador(
        pedidoParsed,
        estado.pedagogo.latest ? estado.pedagogo.latest.filename : 'caso.md',
        estado.disenador.latest.filename
      );
      fs.writeFileSync(path.join(dir, filename), md, 'utf-8');
      return sendJson(res, {
        ok: true,
        agente: 'gamificador',
        filename,
        message: '✨ Dinámicas de aula generadas por el Agente 3 (Gamificador).'
      });
    }
  } catch (err) {
    console.error('Error en /api/generar:', err);
    sendJson(res, { ok: false, error: err.message }, 500);
  }
}

function handleToggleAprobacion(res, payload, aprobar = true) {
  const { agente, filename } = payload;
  if (!agente || !filename) {
    return sendJson(res, { ok: false, error: 'Faltan parámetros agente y filename' }, 400);
  }
  const filePath = path.join(BASE_DIR, 'salidas', agente, filename);
  if (!fs.existsSync(filePath)) {
    return sendJson(res, { ok: false, error: `Archivo no encontrado: ${filePath}` }, 404);
  }
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const nuevoEstado = aprobar ? 'APROBADO' : 'BORRADOR';
    if (/Estado:\s*(APROBADO|BORRADOR)/i.test(content)) {
      content = content.replace(/Estado:\s*(APROBADO|BORRADOR)/i, `Estado: ${nuevoEstado}`);
    } else {
      content = `Estado: ${nuevoEstado}\n` + content;
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    sendJson(res, {
      ok: true,
      agente,
      filename,
      nuevo_estado: nuevoEstado,
      message: `El archivo ahora está en estado ${nuevoEstado}.`
    });
  } catch (err) {
    sendJson(res, { ok: false, error: err.message }, 500);
  }
}

function handleSaveArchivo(res, payload) {
  const { agente, filename, content } = payload;
  if (!agente || !filename || content === undefined) {
    return sendJson(res, { ok: false, error: 'Parámetros incompletos' }, 400);
  }
  const filePath = path.join(BASE_DIR, 'salidas', agente, filename);
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    sendJson(res, { ok: true, message: 'Cambios guardados correctamente.' });
  } catch (err) {
    sendJson(res, { ok: false, error: err.message }, 500);
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url || '/');
  const pathname = decodeURIComponent(parsedUrl.pathname || '/');

  console.log(`[Panel Docente] ${req.method} ${pathname}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  if (req.method === 'GET') {
    if (pathname === '/' || pathname === '/index.html') {
      const htmlPath = path.join(BASE_DIR, 'panel', 'index.html');
      if (fs.existsSync(htmlPath)) {
        return sendText(res, fs.readFileSync(htmlPath, 'utf-8'));
      }
      return sendText(res, '<h1>Error: panel/index.html no encontrado</h1>', 404);
    }

    if (pathname === '/diapositivas.html') {
      const htmlPath = path.join(BASE_DIR, 'panel', 'diapositivas.html');
      if (fs.existsSync(htmlPath)) {
        return sendText(res, fs.readFileSync(htmlPath, 'utf-8'));
      }
      return sendText(res, '<h1>Error: panel/diapositivas.html no encontrado</h1>', 404);
    }

    if (pathname === '/generador.js') {
      const jsPath = path.join(BASE_DIR, 'panel', 'generador.js');
      if (fs.existsSync(jsPath)) {
        return sendText(res, fs.readFileSync(jsPath, 'utf-8'), 200, 'application/javascript; charset=utf-8');
      }
      return sendText(res, '// generador.js no encontrado', 404, 'application/javascript; charset=utf-8');
    }

    if (pathname === '/memoria.html') {
      const memPath = path.join(BASE_DIR, 'Memoria_Tecnica_y_Reflexion_TTE.html');
      if (fs.existsSync(memPath)) {
        return sendText(res, fs.readFileSync(memPath, 'utf-8'));
      }
      return sendText(res, '<h1>Error: Memoria no encontrada</h1>', 404);
    }

    if (pathname.startsWith('/screenshots/')) {
      const imgName = pathname.replace('/screenshots/', '');
      const imgPath = path.join(BASE_DIR, 'panel', 'screenshots', imgName);
      if (fs.existsSync(imgPath) && fs.statSync(imgPath).isFile()) {
        const body = fs.readFileSync(imgPath);
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': body.length,
          'Cache-Control': 'no-cache'
        });
        return res.end(body);
      }
    }

    if (pathname === '/favicon.ico') {
      res.writeHead(204);
      return res.end();
    }

    if (pathname === '/api/estado') {
      return handleGetEstado(res);
    }

    if (pathname.startsWith('/api/archivo/')) {
      const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
      if (parts.length >= 4) {
        const agente = parts[2];
        const filename = parts.slice(3).join('/');
        const filePath = path.join(BASE_DIR, 'salidas', agente, filename);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          return sendJson(res, {
            ok: true,
            filename,
            content: fs.readFileSync(filePath, 'utf-8')
          });
        }
      }
      return sendJson(res, { ok: false, error: 'Archivo no encontrado' }, 404);
    }

    return sendText(res, 'No encontrado', 404, 'text/plain; charset=utf-8');
  }

  if (req.method === 'POST') {
    let bodyChunks = [];
    req.on('data', chunk => bodyChunks.push(chunk));
    req.on('end', () => {
      let payload = {};
      try {
        const rawBody = Buffer.concat(bodyChunks).toString('utf-8');
        payload = rawBody ? JSON.parse(rawBody) : {};
      } catch (e) {
        payload = {};
      }

      if (pathname === '/api/pedido') return handleSavePedido(res, payload);
      if (pathname === '/api/generar') return handleGenerarAgente(res, payload);
      if (pathname === '/api/aprobar') return handleToggleAprobacion(res, payload, true);
      if (pathname === '/api/desaprobar') return handleToggleAprobacion(res, payload, false);
      if (pathname === '/api/guardar-archivo') return handleSaveArchivo(res, payload);

      return sendJson(res, { ok: false, error: 'Ruta POST desconocida' }, 404);
    });
    return;
  }

  sendText(res, 'Método no permitido', 405, 'text/plain; charset=utf-8');
});

server.on('error', (err) => {
  console.error(`Puerto ${PORT} no disponible o ya en uso:`, err.message);
  process.exit(1);
});

server.listen(PORT, '0.0.0.0', () => {
  const urlStr = `http://localhost:${PORT}`;
  console.log('='.repeat(60));
  console.log('  PANEL DE CONTROL DOCENTE — ECONOMÍA (5.° AÑO)');
  console.log('='.repeat(60));
  console.log(' Servidor iniciado con éxito (Node.js).');
  console.log(` Abrí tu navegador e ingresá a: ${urlStr}`);
  console.log(' (Asegurate de incluir el puerto :4123)');
  console.log(' Para detenerlo: presioná Ctrl + C');
  console.log('='.repeat(60));
});
