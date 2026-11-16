# Equipo de agentes para Economía (5.º año) — Casos y problemas contextualizados

Solución agéntica para Google Antigravity. Sirve **solo al docente**: lo ayuda a preparar casos cercanos a la realidad de los estudiantes. Los alumnos no usan este sistema.

## El problema que resuelve
Los ejercicios de manual quedan lejos de la experiencia de los chicos y el docente invierte mucho tiempo en buscar o inventar casos cercanos. Los agentes generan **borradores**; el docente los revisa, los adapta y decide.

## El equipo

| Agente | Qué hace | Lee de | Escribe en |
|---|---|---|---|
| 1. Pedagogo / Casista | Arma un caso contextualizado con su núcleo conceptual y preguntas graduadas | `entradas/`, `materiales/` | `salidas/pedagogo/` |
| 2. Diseñador Didáctico | Convierte el caso aprobado en guía de resolución con tres niveles de andamiaje | `salidas/pedagogo/` | `salidas/disenador/` |
| 3. Gamificador | Propone dos dinámicas de aula para esa guía | `salidas/disenador/` | `salidas/gamificador/` |

Los agentes 2 y 3 **solo trabajan sobre archivos que el docente marcó `Estado: APROBADO`**. Ese es el control humano del sistema.

## Estructura de la carpeta
```
economia-agentes/
├── AGENTS.md                  reglas comunes (Antigravity lo lee solo)
├── README.md
├── agentes/                   los prompts de cada agente
├── .agents/workflows/         comandos /1-pedagogo, /2-disenador, /3-gamificador, /equipo-completo
├── entradas/pedido.md         lo único que escribe el docente para arrancar
├── materiales/                planificación, bibliografía y textos cargados
├── salidas/                   lo que producen los agentes
└── calibracion/               casos de prueba y registro de ajustes
```

## Puesta en marcha (Windows o Linux)
1. Descomprimí la carpeta donde quieras. No hace falta instalar nada más.
2. Abrí Google Antigravity y elegí **Open Folder** sobre `economia-agentes`.
3. Cargá en `materiales/bibliografia/` los capítulos que vayas a usar (ver el `LEEME.md` de esa carpeta).
4. Editá `entradas/pedido.md` con tu tema.

## Panel de Control Docente (Visual y amigable)
Para no tener que editar archivos Markdown a mano ni lidiar con comandos de texto en el chat, podés usar el **Panel de Control Docente**:
- **En macOS:** Hacé doble clic en el archivo `iniciar-panel.command`.
- **Desde la terminal:** Ejecutá `python3 panel/servidor.py` y abrí [http://localhost:4123](http://localhost:4123).

El panel te permite:
1. Cargar el pedido con formularios desplegables sin tocar código.
2. Leer y editar los borradores de los agentes con tipografía clara.
3. Aprobar el caso o la guía con **un solo clic** (cambia `Estado: APROBADO` automáticamente y desbloquea el siguiente agente).
4. Copiar los comandos para el chat con un clic.
5. Imprimir o guardar en PDF las actividades para fotocopiar a los estudiantes.

## Cómo usarlo de forma tradicional (por chat)
1. En el chat del agente escribí `/1-pedagogo`. Revisá el archivo de `salidas/pedagogo/`, editalo a gusto y cambiá `Estado: BORRADOR` por `Estado: APROBADO`.
2. Escribí `/2-disenador`. Revisá y aprobá igual.
3. Escribí `/3-gamificador`. Elegí qué dinámica usar, si alguna.

Para correr los tres con pausas de aprobación: `/equipo-completo`.

**Si tu versión de Antigravity no muestra los comandos `/`:** abrí una conversación nueva y pegá esta instrucción: *"Leé `AGENTS.md` y `agentes/1-pedagogo-casista.md` y actuá como ese agente sobre `entradas/pedido.md`"*. Funciona igual con los otros dos archivos.

## Antes de usarlo en clase
- Verificá que cada dato real del material tenga su fuente en `materiales/`. Los agentes marcan `[VERIFICAR]` y `[DATO FICTICIO]`, pero la última palabra es tuya.
- Probá con los casos de `calibracion/casos-de-prueba.md` y anotá los ajustes en `registro-calibracion.md`.
- Los comandos `/` y la carpeta `.agents/` siguen la documentación de Antigravity vigente al armar este material; si tu versión cambió, los prompts de `agentes/` siguen sirviendo pegados en el chat.
