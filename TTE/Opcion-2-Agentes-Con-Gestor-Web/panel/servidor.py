#!/usr/bin/env python3
"""
Servidor local para el Panel de Control Docente - Economía (5.° año)
Funciona sin dependencias externas usando únicamente la biblioteca estándar de Python 3.
"""

import http.server
import json
import os
import re
import sys
import urllib.parse
from pathlib import Path

# Directorio raíz del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent
PORT = 4123

class DocenteHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        # Log simplificado
        sys.stderr.write(f"[Panel Docente] {self.address_string()} - {format % args}\n")

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(body)

    def send_text(self, text, status=200, content_type='text/html; charset=utf-8'):
        body = text.encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path in ('/', '/index.html'):
            html_path = BASE_DIR / 'panel' / 'index.html'
            if html_path.exists():
                with open(html_path, 'r', encoding='utf-8') as f:
                    self.send_text(f.read())
            else:
                self.send_text("<h1>Error: panel/index.html no encontrado</h1>", status=404)
            return

        if path == '/diapositivas.html':
            html_path = BASE_DIR / 'panel' / 'diapositivas.html'
            if html_path.exists():
                with open(html_path, 'r', encoding='utf-8') as f:
                    self.send_text(f.read())
            else:
                self.send_text("<h1>Error: panel/diapositivas.html no encontrado</h1>", status=404)
            return

        if path.startswith('/screenshots/'):
            img_name = path.replace('/screenshots/', '')
            img_path = BASE_DIR / 'panel' / 'screenshots' / img_name
            if img_path.exists() and img_path.is_file():
                with open(img_path, 'rb') as f:
                    body = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'image/png')
                self.send_header('Content-Length', str(len(body)))
                self.send_header('Cache-Control', 'no-cache')
                self.end_headers()
                self.wfile.write(body)
                return

        if path == '/favicon.ico':
            self.send_response(204)
            self.end_headers()
            return

        if path == '/api/estado':
            self.handle_get_estado()
            return

        if path.startswith('/api/archivo/'):
            # /api/archivo/<agente>/<filename>
            parts = path.strip('/').split('/')
            if len(parts) >= 4:
                agente = parts[2]
                filename = parts[3]
                file_path = BASE_DIR / 'salidas' / agente / filename
                if file_path.exists() and file_path.is_file():
                    with open(file_path, 'r', encoding='utf-8') as f:
                        self.send_json({"ok": True, "filename": filename, "content": f.read()})
                    return
            self.send_json({"ok": False, "error": "Archivo no encontrado"}, status=404)
            return

        self.send_text("No encontrado", status=404, content_type='text/plain')

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get('Content-Length', 0))
        body_bytes = self.rfile.read(content_length) if content_length > 0 else b'{}'
        try:
            payload = json.loads(body_bytes.decode('utf-8'))
        except Exception:
            payload = {}

        if path == '/api/pedido':
            self.handle_save_pedido(payload)
            return
        elif path == '/api/aprobar':
            self.handle_toggle_aprobacion(payload, aprobar=True)
            return
        elif path == '/api/desaprobar':
            self.handle_toggle_aprobacion(payload, aprobar=False)
            return
        elif path == '/api/guardar-archivo':
            self.handle_save_archivo(payload)
            return

        self.send_json({"ok": False, "error": "Ruta POST desconocida"}, status=404)

    def handle_get_estado(self):
        # 1. Pedido actual
        pedido_file = BASE_DIR / 'entradas' / 'pedido.md'
        pedido_raw = ""
        pedido_parsed = {}
        if pedido_file.exists():
            with open(pedido_file, 'r', encoding='utf-8') as f:
                pedido_raw = f.read()
            # Parsear campos con regex: - **Campo:** Valor
            for line in pedido_raw.splitlines():
                m = re.match(r'^\s*-\s*\*\*([^:]+):\*\*\s*(.*)$', line)
                if m:
                    key = m.group(1).strip()
                    val = m.group(2).strip()
                    pedido_parsed[key] = val

        # 2. Archivos en salidas
        def get_agent_files(subfolder):
            dir_path = BASE_DIR / 'salidas' / subfolder
            if not dir_path.exists():
                return []
            files = []
            for item in dir_path.glob('*.md'):
                if item.name.startswith('.'):
                    continue
                try:
                    with open(item, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Detectar estado
                    estado = "BORRADOR"
                    m_est = re.search(r'Estado:\s*(APROBADO|BORRADOR)', content, re.IGNORECASE)
                    if m_est:
                        estado = m_est.group(1).upper()

                    # Detectar encabezado
                    m_fecha = re.search(r'Fecha:\s*([^\n\r]+)', content)
                    fecha = m_fecha.group(1).strip() if m_fecha else ""

                    m_ped = re.search(r'Pedido:\s*([^\n\r]+)', content)
                    resumen_pedido = m_ped.group(1).strip() if m_ped else ""

                    files.append({
                        "filename": item.name,
                        "fecha": fecha,
                        "resumen": resumen_pedido,
                        "estado": estado,
                        "mtime": item.stat().st_mtime,
                        "size": len(content),
                        "content": content
                    })
                except Exception as e:
                    sys.stderr.write(f"Error leyendo {item}: {e}\n")
            
            # Ordenar más reciente primero
            files.sort(key=lambda x: x['mtime'], reverse=True)
            return files

        pedagogo_files = get_agent_files('pedagogo')
        disenador_files = get_agent_files('disenador')
        gamificador_files = get_agent_files('gamificador')

        latest_pedagogo = pedagogo_files[0] if pedagogo_files else None
        latest_disenador = disenador_files[0] if disenador_files else None
        latest_gamificador = gamificador_files[0] if gamificador_files else None

        # Determinar paso activo del pipeline (0: Pedido, 1: Pedagogo, 2: Diseñador, 3: Gamificador)
        # Paso 1 está listo si pedagogo está APROBADO
        pedagogo_aprobado = bool(latest_pedagogo and latest_pedagogo['estado'] == 'APROBADO')
        disenador_aprobado = bool(latest_disenador and latest_disenador['estado'] == 'APROBADO')
        gamificador_listo = bool(latest_gamificador is not None)

        # Unidades predefinidas de la planificación
        unidades = [
            "Período diagnóstico — Unidad introductoria",
            "Unidad 1 — La microeconomía. Aspectos generales",
            "Unidad 2 — La microeconomía. Análisis de los mercados",
            "Unidad 3 — La microeconomía. Elementos para el análisis de la distribución del ingreso",
            "Unidad 4 — La macroeconomía. Herramientas conceptuales para el análisis del ingreso nacional",
            "Unidad 5 — La macroeconomía. Las políticas macroeconómicas",
            "Unidad 6 — La macroeconomía. Oferta y demanda agregada"
        ]

        self.send_json({
            "ok": True,
            "pedido": {
                "raw": pedido_raw,
                "parsed": pedido_parsed
            },
            "unidades": unidades,
            "pedagogo": {
                "latest": latest_pedagogo,
                "aprobado": pedagogo_aprobado,
                "archivos": pedagogo_files
            },
            "disenador": {
                "latest": latest_disenador,
                "aprobado": disenador_aprobado,
                "archivos": disenador_files,
                "bloqueado": not pedagogo_aprobado
            },
            "gamificador": {
                "latest": latest_gamificador,
                "listo": gamificador_listo,
                "archivos": gamificador_files,
                "bloqueado": not disenador_aprobado
            }
        })

    def handle_save_pedido(self, payload):
        pedido_file = BASE_DIR / 'entradas' / 'pedido.md'
        try:
            # Si viene texto plano raw
            if "raw" in payload and payload["raw"]:
                content = payload["raw"].strip() + "\n"
            else:
                # Construir markdown estructurado
                unidad_tema = payload.get("unidad_tema", "").strip() or "Unidad 1 — Elasticidad precio de la demanda"
                curso_grupo = payload.get("curso_grupo", "").strip() or "5.º año, orientación Economía. Grupo de ritmos heterogéneos"
                tiempo = payload.get("tiempo", "").strip() or "1 clase de 80 minutos"
                modalidad = payload.get("modalidad", "").strip() or "trabajo en grupos de 4"
                cuesta_hoy = payload.get("cuesta_hoy", "").strip() or "los ejercicios del manual usan ejemplos lejanos"
                restricciones = payload.get("restricciones", "").strip() or "sin computadoras en el aula; hay proyector"
                evitar = payload.get("evitar", "").strip() or "ejemplos con marcas reales o con cifras que no pueda verificar"
                observaciones = payload.get("observaciones", "").strip()

                obs_line = f"- **Observaciones:** {observaciones}\n" if observaciones else "- **Observaciones:** (opcional)\n"

                content = (
                    "# Pedido del docente\n\n"
                    "Editá este archivo antes de lanzar al Agente 1. Es lo único que tenés que escribir para arrancar.\n\n"
                    f"- **Unidad y tema:** {unidad_tema}\n"
                    f"- **Curso y grupo:** {curso_grupo}\n"
                    f"- **Tiempo disponible:** {tiempo}\n"
                    f"- **Modalidad:** {modalidad}\n"
                    f"- **Qué me cuesta hoy:** {cuesta_hoy}\n"
                    f"- **Restricciones:** {restricciones}\n"
                    f"- **Algo que quiero evitar:** {evitar}\n"
                    f"{obs_line}\n"
                    "> Guardado desde el Panel de Control Docente.\n"
                )

            with open(pedido_file, 'w', encoding='utf-8') as f:
                f.write(content)

            self.send_json({"ok": True, "message": "Pedido guardado correctamente."})
        except Exception as e:
            self.send_json({"ok": False, "error": str(e)}, status=500)

    def handle_toggle_aprobacion(self, payload, aprobar=True):
        agente = payload.get("agente")
        filename = payload.get("filename")
        if not agente or not filename:
            self.send_json({"ok": False, "error": "Faltan parámetros agente y filename"}, status=400)
            return

        file_path = BASE_DIR / 'salidas' / agente / filename
        if not file_path.exists():
            self.send_json({"ok": False, "error": f"Archivo no encontrado: {file_path}"}, status=404)
            return

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            nuevo_estado = "APROBADO" if aprobar else "BORRADOR"
            
            # Reemplazar Estado: BORRADOR por Estado: APROBADO (o viceversa)
            if re.search(r'Estado:\s*(APROBADO|BORRADOR)', content, re.IGNORECASE):
                content = re.sub(r'Estado:\s*(APROBADO|BORRADOR)', f'Estado: {nuevo_estado}', content, count=1, flags=re.IGNORECASE)
            else:
                # Si no lo tenía, agregarlo en el encabezado
                content = f"Estado: {nuevo_estado}\n" + content

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

            self.send_json({
                "ok": True,
                "agente": agente,
                "filename": filename,
                "nuevo_estado": nuevo_estado,
                "message": f"El archivo ahora está en estado {nuevo_estado}."
            })
        except Exception as e:
            self.send_json({"ok": False, "error": str(e)}, status=500)

    def handle_save_archivo(self, payload):
        agente = payload.get("agente")
        filename = payload.get("filename")
        content = payload.get("content")

        if not agente or not filename or content is None:
            self.send_json({"ok": False, "error": "Parámetros incompletos"}, status=400)
            return

        file_path = BASE_DIR / 'salidas' / agente / filename
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            self.send_json({"ok": True, "message": "Cambios guardados correctamente."})
        except Exception as e:
            self.send_json({"ok": False, "error": str(e)}, status=500)


def iniciar():
    os.chdir(str(BASE_DIR))
    server_address = ('0.0.0.0', PORT)
    try:
        httpd = http.server.HTTPServer(server_address, DocenteHandler)
    except OSError as e:
        print(f"Puerto {PORT} no disponible o ya en uso: {e}")
        return

    url = f"http://localhost:{PORT}"
    print("=" * 60)
    print("  PANEL DE CONTROL DOCENTE — ECONOMÍA (5.° AÑO)")
    print("=" * 60)
    print(f" Servidor iniciado con éxito.")
    print(f" Abrí tu navegador e ingresá a: {url}")
    print(" (Asegurate de incluir el puerto :4123)")
    print(" Para detenerlo: presioná Ctrl + C")
    print("=" * 60)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido. ¡Hasta la próxima!")
        httpd.server_close()

if __name__ == '__main__':
    iniciar()
