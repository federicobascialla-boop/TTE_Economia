# Opción 1: Modo Solo Chat (Antigravity Puro)
**Cátedra: Elementos de micro y macroeconomía (5.º año)**

Esta opción es ideal si preferís trabajar **100% dentro de Antigravity**, sin abrir navegadores web, sin servidores locales ni "localhost". Todo se maneja a través del chat y los archivos de texto.

---

## Estructura de esta carpeta
```
Opcion-1-Solo-Agentes-Chat/
├── INSTRUCCIONES.md          ➔ Esta guía
├── AGENTS.md                 ➔ Reglas del equipo de agentes (Antigravity lo lee solo)
├── README.md                 ➔ Documentación general
├── agentes/                  ➔ Instrucciones de cada agente
├── .agents/                  ➔ Comandos de chat (/1-pedagogo, /2-disenador, /3-gamificador)
├── entradas/pedido.md        ➔ El único archivo que editás vos para arrancar
├── materiales/               ➔ Planificación oficial, bibliografía y contenidos
├── salidas/                  ➔ Donde los agentes guardan sus producciones
└── calibracion/              ➔ Casos de prueba y registros
```

---

## Cómo usarlo paso a paso (Circuito de 4 pasos)

### 1. Abrir la carpeta en Antigravity
1. Abrí **Google Antigravity**.
2. Andá a **File ➔ Open Folder** (o Abrir Carpeta) y seleccioná esta carpeta `Opcion-1-Solo-Agentes-Chat`.

---

### 2. Cargar el pedido de tu clase
1. En el panel izquierdo de archivos, abrí el archivo:  
   📁 `entradas/pedido.md`
2. Modificá el tema, el tiempo y las restricciones de tu clase.  
   *(Ejemplo: Unidad 1 — Elasticidad precio de la demanda, 80 min, grupos de 4, sin computadoras).*
3. Guardá los cambios (**Cmd + S** en Mac o **Ctrl + S** en Windows).

---

### 3. Crear y aprobar el Caso (Agente 1 · Pedagogo)
1. En el chat de Antigravity (arriba o al costado), escribí:
   ```text
   /1-pedagogo
   ```
2. El agente leerá tu pedido y la planificación, y creará un archivo en:  
   📁 `salidas/pedagogo/` con el caso contextualizado.
3. **El control docente (fundamental):**  
   - Abrí el archivo generado en `salidas/pedagogo/`.
   - Leé el caso y ajustá lo que quieras.
   - En el encabezado arriba de todo, cambiá la línea:  
     `Estado: BORRADOR` ➔ por ➔ `Estado: APROBADO`
   - Guardá el archivo (**Cmd + S** o **Ctrl + S**).

---

### 4. Crear y aprobar la Guía de Alumnos (Agente 2 · Diseñador)
1. Con el caso ya aprobado, en el chat escribí:
   ```text
   /2-disenador
   ```
2. El agente transformará el caso en una guía de resolución con 3 niveles de andamiaje y pautas docentes en:  
   📁 `salidas/disenador/`
3. Abrí el archivo, revisalo y cambiá nuevamente el encabezado a `Estado: APROBADO`.

---

### 5. Proponer las Dinámicas Lúdicas (Agente 3 · Gamificador)
1. En el chat escribí:
   ```text
   /3-gamificador
   ```
2. El agente te presentará dos dinámicas alternativas (juego de roles y debate vs. simulación de mercado en vivo) en:  
   📁 `salidas/gamificador/`
3. Elegí la que mejor se adapte a tu curso.

---

## ⚠️ Regla de Oro del Sistema
Los agentes 2 y 3 **tienen prohibido trabajar sobre borradores**. Si intentás ejecutar `/2-disenador` o `/3-gamificador` antes de haber cambiado a mano la palabra `BORRADOR` por `APROBADO`, el agente se detendrá y te recordará que lo revises. Esto asegura que ningún material llegue al aula sin tu validación docente.
