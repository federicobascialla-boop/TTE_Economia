# Opción 2: Modo Asistido (Agentes + Gestor Web Local)
**Cátedra: Elementos de micro y macroeconomía (5.º año)**

Esta opción es la más recomendada para la mayoría del equipo: **no necesitás saber qué es Markdown ni editar archivos de código a mano**.

Los agentes de IA siguen trabajando en Antigravity, pero vos interactuás a través de una **página web visual en tu navegador** con formularios, botones de aprobación de 1 clic y formato listo para fotocopiar.

---

## Estructura de esta carpeta
```
Opcion-2-Agentes-Con-Gestor-Web/
├── INSTRUCCIONES.md          ➔ Esta guía
├── iniciar-panel.command     ➔ Lanzador con doble clic para Mac
├── iniciar-panel.bat         ➔ Lanzador con doble clic para Windows
├── iniciar-panel.sh          ➔ Lanzador para Linux / Mac
├── panel/                    ➔ La aplicación web local (servidor y diseño)
├── AGENTS.md                 ➔ Reglas pedagógicas comunes
├── README.md                 ➔ Documentación general
├── agentes/                  ➔ Instrucciones de cada agente
├── .agents/                  ➔ Comandos de chat (/1-pedagogo, /2-disenador, /3-gamificador)
├── entradas/                 ➔ Pedido del docente (se edita desde la web)
├── materiales/               ➔ Planificación oficial y bibliografía
└── salidas/                  ➔ Donde se guardan las producciones de los agentes
```

---

## Cómo usarlo paso a paso (El circuito visual)

### 1. Abrir la carpeta en Antigravity
1. Abrí **Google Antigravity**.
2. Andá a **File ➔ Open Folder** y elegí esta carpeta `Opcion-2-Agentes-Con-Gestor-Web`.

---

### 2. Abrir el Panel Docente en tu navegador
Simplemente hacé **doble clic** en el iniciador según tu computadora:
* **Si usás Windows:** doble clic a `iniciar-panel.bat`
* **Si usás Mac:** doble clic a `iniciar-panel.command`

*(Se abrirá automáticamente una pestaña en Chrome o Safari en la dirección `http://localhost:4123`).*

---

### 3. Cargar el pedido de tu clase
1. En la página web, en la pestaña **"📝 1. Pedido Inicial"**, completá los datos de tu clase:
   - Seleccioná la unidad de la planificación en el menú desplegable.
   - Escribí el tema específico y el tiempo disponible (ej. 80 min).
2. Tocá el botón azul **"💾 Guardar Pedido"**.
3. El panel te mostrará el botón listo: `📋 Copiar comando: /1-pedagogo` (hacé clic para copiarlo).

---

### 4. Pedir el caso en el Chat y Aprobar en la Web
1. Pegá `/1-pedagogo` en el chat de Antigravity y presioná Enter.
2. En unos segundos, volvé a tu navegador y andá a la pestaña **"🎓 2. Caso (Pedagogo)"**.
3. Vas a ver el caso formateado claramente:
   - Las cifras ficticias están marcadas en violeta `[DATO FICTICIO]`.
   - Podés retocar el texto directamente ahí si querés cambiar algún precio.
4. Tocá el botón verde: **"✓ Aprobar Caso"**.  
   *(Con ese solo clic, el sistema cambia el estado a APROBADO automáticamente).*

---

### 5. Generar la Guía de Alumnos y las Dinámicas
1. El panel te habilitará el siguiente comando: `/2-disenador`.
2. Pegalo en el chat de Antigravity y da Enter.
3. Volvé al navegador a la pestaña **"📐 3. Guía de Aula (Diseñador)"**, revisá las consignas con andamiaje y tocá **"✓ Aprobar Guía"**.
4. Ahora pegá `/3-gamificador` en el chat para ver en la pestaña 4 las dos propuestas lúdicas alternativas.

---

### 6. Salida al aula: Imprimir para fotocopiar
1. Andá a la pestaña **"🖨️ 5. Vista de Impresión"**.
2. Presioná **Cmd + P** (en Mac) o **Ctrl + P** (en Windows).
3. Verás la hoja limpia tamaño A4 con membrete escolar oficial (*"Elementos de micro y macroeconomía · 5.º año"*), espacio para los nombres de los estudiantes y las consignas sin notas docentes.
4. Guardala en PDF o mandala directo a la fotocopiadora.

---

## 💡 Consejo para el aula
En la parte superior de la página web tenés el botón **"📊 Ver Diapositivas"** que abre una presentación interactiva explicando todo el sistema paso a paso para compartir con otros colegas.
