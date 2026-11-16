# Trabajo Final de Cátedra — Actividad 7
## "Arquitectos de la Autonomía Docente: Solución a Problemas Reales de Clase con Equipos de Agentes en Antigravity"

- **Materia:** Taller de Tecnología Educativa (TTE) — 2.° Cuatrimestre
- **Docente Titular:** Prof. Delmiro Gil
- **Espacio Curricular Intervenido:** *Elementos de micro y macroeconomía* (5.° año, Nivel Secundario — Orientación Economía)
- **Eje Seleccionado:** **Eje A — Realización Pedagógica y Didáctica de la Clase** 💡
- **Modalidad de Implementación:** Equipo de Agentes en Google Antigravity + Panel de Control Docente Web (`localhost:4123`)
- **Integrantes del Equipo:** Eugenia Álvarez · Federico Bascialla · Martín Trifone · Adrián Fabrizio · Romina Tosar Sainz
- **Fecha de Entrega:** Noviembre de 2026

---

## 📦 Bloque A: Guía de la Solución Agéntica (Agentes en Antigravity + Gestor Web Docente)

La solución combina el poder de un equipo de **tres agentes especializados en Google Antigravity** con un **Panel de Control Docente visual e interactivo en el navegador web** (`http://localhost:4123`), provisto de **generación directa en un clic**, **selectores desplegables encadenados por unidad y tema específico** y un **lanzador universal sin dependencias externas** que funciona en cualquier computadora con **Windows, Linux o macOS** (detectando automáticamente Node.js, Python 3 o PowerShell nativo de Windows).

### Estructura de la carpeta entregada
- `AGENTS.md`: Reglas comunes del equipo, principio rector *"Garrocha, no muleta"*, anclaje documental obligatorio y protocolo de control de estados (`Estado: BORRADOR` → `Estado: APROBADO`).
- `agentes/`: Contiene los tres *System Prompts* especializados:
  - `1-pedagogo-casista.md` (Agente 1 — Pedagogo / Casista)
  - `2-disenador-guia.md` (Agente 2 — Diseñador Didáctico)
  - `3-gamificador-desafio.md` (Agente 3 — Gamificador / Dinamizador)
- `.agents/workflows/` y `.agents/skills/`: Comandos directos en el chat de Antigravity (`/1-pedagogo`, `/2-disenador`, `/3-gamificador` y `/equipo-completo`).
- `panel/` e iniciadores universales (`iniciar-panel.bat` para Windows, `iniciar-panel.sh` para Linux e `iniciar-panel.command` para macOS):
  - `index.html`: Interfaz visual de 5 pestañas con selectores desplegables de **Unidad** y **Tema específico**, botones de generación directa en un clic para cada agente, editor en vivo, aprobación con candados pedagógicos y vista de impresión A4.
  - `generador.js`: Motor pedagógico local alineado con las 6 unidades y el Proyecto Especial 1976-1983 de `materiales/planificacion.md`.
  - `servidor.js`, `servidor.py` y `servidor.ps1`: Servidores locales sin librerías externas (Node.js, Python 3 y PowerShell nativo) para garantizar que el panel abra siempre en cualquier equipo docente.
- `materiales/`: Base de conocimiento (*grounding documental*) con la planificación anual oficial de la cátedra (`planificacion.md`), el repertorio bibliográfico (`bibliografia.md`) y la carpeta `bibliografia/`.
- `entradas/pedido.md`: Pedido del docente, que se completa y guarda directamente desde los desplegables del Panel Web.
- `salidas/`: Producciones de cada agente (`salidas/pedagogo/`, `salidas/disenador/`, `salidas/gamificador/`).
- `calibracion/`: Matriz de escenarios de ensayo (`casos-de-prueba.md`) y registro documentado de los ajustes iterativos (`registro-calibracion.md`).

### Cómo interactúa el docente con el sistema
1. **Inicia el Panel Visual:** Hace doble clic en `iniciar-panel.bat` (Windows), `iniciar-panel.sh` (Linux) o `iniciar-panel.command` (Mac), lo que levanta automáticamente el servidor local y abre `http://localhost:4123` en su navegador.
2. **Elige Unidad y Tema específico en desplegables (Pestaña 1):** Selecciona primero la **Unidad de la Planificación** en el primer desplegable y luego el **Tema específico de la Unidad** en el segundo desplegable dinámico (o escribe un tema personalizado), completa las características de su grupo y pulsa el botón verde **"✨ Guardar y Generar Caso (Agente 1)"** (o ejecuta `/1-pedagogo` en el chat de Antigravity).
3. **Revisa y aprueba el Caso (Pestaña 2):** Lee el caso contextualizado en el navegador (donde se resaltan con etiquetas de color cada `[DATO FICTICIO]` y `[VERIFICAR]`), lo edita si desea y pulsa **"✓ Aprobar Caso"**, lo que cambia su estado a `APROBADO` y habilita el botón **"🚀 Generar Guía de Aula (Agente 2)"**.
4. **Genera y aprueba la Guía con Andamiaje (Pestaña 3):** Con un clic en **"🚀 Generar Guía de Aula (Agente 2)"** (o mediante `/2-disenador` en el chat) obtiene la guía paso a paso con tabla de datos, tres niveles de andamiaje y clave docente. Al pulsar **"✓ Aprobar Guía"**, se desbloquea el paso siguiente.
5. **Genera las Dinámicas de Aula (Pestaña 4):** Pulsa **"🚀 Generar 2 Dinámicas de Aula (Agente 3)"** (o `/3-gamificador`) para obtener dos propuestas de simulación o juego de roles adaptadas al caso aprobado.
6. **Imprime o exporta a PDF (Pestaña 5 — Vista de Impresión):** Elige en el selector qué desea imprimir (*Guía para Estudiantes sin respuestas docentes*, *Guía Completa con Clave de Corrección*, *Caso del Pedagogo* o *Dinámicas*) y con `Ctrl + P` obtiene la hoja A4 maquetada con membrete escolar.

---

## 🏗️ Bloque B: Memoria del Docente Diseñador ("La Fórmula del Arquitecto")

### 1. El Problema de Clase Elegido y su Justificación Pedagógica

#### Contextualización del espacio curricular
El proyecto se ancla en la asignatura **Elementos de micro y macroeconomía**, correspondiente al **5.° año de la escuela secundaria (Orientación Economía)**, con estudiantes de entre **15 y 17 años**. La planificación anual de la cátedra abarca seis unidades troncales —desde teoría del consumidor, elasticidad, estructuras de mercado y distribución del ingreso en Microeconomía, hasta cuentas nacionales (PBI), política fiscal/monetaria, inflación y desempleo en Macroeconomía—, además del proyecto institucional transversal *"La deuda externa y la dictadura militar de 1976-1983"*.

#### El obstáculo didáctico real (Eje A)
En la práctica cotidiana frente al aula, el equipo docente enfrenta una triple dificultad al preparar sus clases:
1. **Lejanía de los ejemplos de manual:** La bibliografía clásica de la materia (Mankiw, Mochón y Beker, Pindyck y Rubinfeld, Samuelson) utiliza ejemplos estandarizados o anglosajones (*"el mercado de helados en verano"*, *"una fábrica de zapatos"*, *"cañones versus mantequilla"*) que resultan ajenos a la vida cotidiana de adolescentes argentinos de 15 a 17 años. Como consecuencia, los alumnos suelen resolver los ejercicios de manera mecánica o memorística, sin comprender qué fenómeno real mide el concepto económico.
2. **Heterogeneidad de ritmos en el aula:** En un mismo curso conviven estudiantes que manejan con soltura variaciones porcentuales y lectura de gráficos con otros que se bloquean ante la primera fórmula matemática, lo que exige diseñar múltiples niveles de andamiaje por clase.
3. **Escasez de tiempo docente y fricción tecnológica:** Inventar desde cero un caso situado en la realidad barrial o nacional (el quiosco escolar, una panadería familiar, el debate presupuestario del municipio), armar su guía paso a paso con tres niveles de apoyo, diseñar una dinámica grupal y maquetar todo para la fotocopiadora insume varias horas por tema. Además, muchos docentes del departamento no desean editar archivos de código o Markdown a mano ni lidiar con instalaciones complejas.

Por estas razones se eligió el **Eje A (Realización Pedagógica y Didáctica de la Clase)**: dotar al docente de un **equipo de tres colegas virtuales en Antigravity articulados con un Panel de Control Web autónomo y amigable**, que transforme en minutos cualquier unidad y tema específico del programa oficial en borradores situados, andamiados y listos para imprimir tras su validación humana.

---

### 2. Los Roles, *System Prompts* y Articulación del Equipo de Agentes

Para evitar el problema clásico de pedirle "todo junto" a un único modelo (lo que suele arrojar respuestas extensas, superficiales y difíciles de controlar), se dividió el trabajo en **tres agentes secuenciales con responsabilidades estrictamente delimitadas**, gobernados por una constitución común en `AGENTS.md`:

| Orden | Agente y Archivo de Prompt | Rol Específico y Qué Produce | Límites Estrictos (Qué NO hace) |
| :---: | :--- | :--- | :--- |
| **1.°** | **Agente Pedagogo / Casista**<br>(`agentes/1-pedagogo-casista.md`) | Lee `entradas/pedido.md` y `materiales/planificacion.md`. Diseña el **núcleo conceptual** para el docente (analogía + idea previa errónea a desarmar), un **caso contextualizado** en la vida adolescente argentina, **3 preguntas disparadoras graduadas** y **2 enfoques didácticos** (inductivo vs. deductivo). | No redacta guías de trabajo para alumnos, no asigna puntajes ni propone juegos de rol. No usa ejemplos de manual ni inventa cifras reales sin etiquetar `[DATO FICTICIO]` o `[VERIFICAR]`. |
| **2.°** | **Agente Diseñador Didáctico**<br>(`agentes/2-disenador-guia.md`) | Toma **únicamente** un caso con `Estado: APROBADO` de `salidas/pedagogo/`. Lo convierte en una **guía de aula paso a paso** con producto final concreto, **3 niveles de andamiaje** (*Con apoyo*, *Base*, *Ampliación*), criterios observables de valoración y hoja privada *"Solo docente"* con resolución completa y errores frecuentes. | Se detiene si el caso está en `BORRADOR`. No cambia el caso aprobado, no inventa teoría nueva, no propone mecánicas lúdicas y no fija escalas de calificación numérica ni ponderaciones de nota. |
| **3.°** | **Agente Gamificador / Dinamizador**<br>(`agentes/3-gamificador-desafio.md`) | Toma **únicamente** una guía con `Estado: APROBADO` de `salidas/disenador/`. Propone **2 dinámicas participativas alternativas** (juego de roles, negociación o simulación en vivo) con objetivos, reglas, puente conceptual con el mecanismo económico, preguntas de cierre y análisis de riesgos de aula. | Se detiene si la guía está en `BORRADOR`. Prohibido proponer "Kahoots de preguntas" vacíos de razonamiento económico o usar puntos/premios competitivos en temas sensibles de Derechos Humanos (Proyecto 1976-1983). |

#### Articulación entre Antigravity y el Panel de Control Docente
El flujo opera como una cadena de montaje pedagógica con **compuertas de validación humana tanto en el gestor web como en los agentes**:
$$\text{Desplegables Web (Unidad + Tema)} \xrightarrow[\text{o } \texttt{/1-pedagogo}]{\text{✨ Generar Caso}} \textbf{Agente 1 (Caso)} \xrightarrow[\text{Botón Verde}]{\text{✓ Aprobar Caso}} \textbf{Agente 2 (Guía)} \xrightarrow[\text{Botón Verde}]{\text{✓ Aprobar Guía}} \textbf{Agente 3 (Dinámicas)} \longrightarrow \text{Vista Impresión A4}$$

---

### 3. Registro de Calibración (De la Falla Inicial al Ajuste del Prompt y del Gestor Web)

Durante la etapa de ensayo práctico se sometió al sistema a los escenarios de prueba de `calibracion/casos-de-prueba.md` (*Prueba A: Elasticidad precio de la demanda*, *Prueba B: Inflación, desempleo y políticas macroeconómicas*, *Prueba C: Deuda externa y dictadura 1976-1983*) y a pruebas reales de usabilidad del Gestor Web:

#### Ajuste N.º 1: Contra los ejemplos de manual y la invasión de roles (Agente 1 — Pedagogo)
- **Situación inicial (Prueba A):** Al pedir un caso sobre *Elasticidad precio de la demanda*, la primera versión del Pedagogo generó un problema estándar sobre *"La fábrica de calzado El Paso Firme que sube el par de zapatos de \$50 a \$60 y una distribuidora de sal de mesa"*, presentó números sin aclarar que eran ficticios e incluyó al final una guía de tres consignas para los alumnos con puntaje (`4 puntos`, `3 puntos`, `3 puntos`).
- **Diagnóstico del fallo:** Respuesta **genérica** (lejana a adolescentes de 15-17 años), **sin trazabilidad de datos** y **con invasión de rol** (asumió tareas del Diseñador Didáctico y fijó calificaciones).
- **Ajuste aplicado al System Prompt (`agentes/1-pedagogo-casista.md` y `AGENTS.md`):**
  - Se exigió situar los casos en vivencias adolescentes argentinas (*"consumo, trabajo informal o changas, transporte, comercio del barrio"*), prohibiendo expresamente los ejemplos de manual (*"una fábrica de sillas"*).
  - Se impuso el etiquetado obligatorio `[DATO FICTICIO]` para cifras de práctica y `[VERIFICAR]` para datos reales ausentes en `materiales/`.
  - Se añadió el límite taxativo: *"No redactás consignas, guías de trabajo ni rúbricas: eso es del Agente 2"*.
- **Resultado calibrado:** El agente produjo casos situados como *"El dilema del quiosco de la esquina"* (Unidad 1) y *"Dos gabinetes económicos ante una caída del consumo y del empleo juvenil en la ciudad"* (Unidad 5), con todas las cifras marcadas con `[DATO FICTICIO]` (resaltadas como insignias visuales en el Panel Web) y cerrando con dos enfoques didácticos y decisiones para el docente.

#### Ajuste N.º 2: Frenado real por *Human-in-the-Loop* y atención a la heterogeneidad (Agente 2 — Diseñador)
- **Situación inicial:** Al invocar al Diseñador Didáctico inmediatamente después del Pedagogo, el agente tomó el archivo en `Estado: BORRADOR` sin esperar revisión humana, armó una guía única con la fórmula algebraica directa ($\text{Ep} = \% \Delta Q / \% \Delta P$) e impuso ponderaciones cerradas (`Ejercicio 1 = 50%`).
- **Ajuste aplicado al System Prompt (`agentes/2-disenador-guia.md`):**
  - Se incorporó la **Condición de arranque obligatoria**: *"Trabajás solo sobre un archivo de `salidas/pedagogo/` cuyo encabezado diga `Estado: APROBADO`. Si el archivo dice `BORRADOR`, detenete y pedile que lo revise y lo cambie a `APROBADO`"*.
  - Se exigió estructurar **Tres niveles de andamiaje** (*Con apoyo*, *Base* y *Ampliación*) y proponer únicamente **criterios observables** sin notas ni pesos numéricos.
- **Resultado calibrado:** Se comprobó el doble candado de seguridad: tanto el Panel Web (que mantiene bloqueada la Pestaña 3 hasta pulsar **"✓ Aprobar Caso"**) como el chat de Antigravity frenan el avance si el archivo está en `BORRADOR`. Una vez aprobado el caso, el Agente 2 genera la guía de 80 minutos con cuadros comparativos renderizados, los tres niveles de andamiaje y la clave de corrección docente.

#### Ajuste N.º 3: Blindaje ético y prevención de alucinaciones documentales (Agente 3 — Gamificador y `AGENTS.md`)
- **Situación inicial (Prueba C — Deuda externa 1976-1983):** Ante el proyecto sobre endeudamiento en la última dictadura, el Gamificador propuso inicialmente una *"Trivia del Endeudamiento con timbre, comodines y premios"* e inventó cifras exactas con decimales atribuyéndolas al *"gráfico de la cátedra"* (el cual no estaba cargado en la carpeta).
- **Ajuste aplicado al System Prompt (`agentes/3-gamificador-desafio.md` y `AGENTS.md`):**
  - En `AGENTS.md`: prohibición absoluta de inventar cifras o citas no presentes en `materiales/`, obligando a usar `[VERIFICAR: qué dato falta]` y a declarar *"sin contenido cargado, consultar"* cuando un libro solo figura en el listado de `bibliografia.md`.
  - En `3-gamificador-desafio.md`: *"No convertís en juego con puntos y premios los temas dolorosos (por ejemplo, el proyecto de la deuda externa y la dictadura 1976-1983). Para esos temas proponés roles con argumentación basada en fuentes, análisis de documentos o debate guiado, nunca puntajes. Evitá el 'Kahoot de preguntas'"*.
- **Resultado calibrado:** El agente eliminó toda mecánica trivial de puntos, estructuró una **Comisión Investigadora Parlamentaria y Ciudadana sobre la Deuda** bajo el marco de *Memoria, Verdad y Justicia*, y colocó las alertas `[VERIFICAR: datos del gráfico de evolución de la deuda externa de la cátedra]`.

#### Ajuste N.º 4: Calibración técnica y de experiencia de usuario en el Gestor Web (`panel/`)
- **Situación detectada en pruebas de uso real:** En equipos con Windows donde no estaba instalado Python (o donde existía únicamente el alias vacío de Microsoft Store), `iniciar-panel.bat` no lograba levantar el servidor local; además, el formulario inicial tenía desplegable solo para la Unidad general (obligando a tipear a mano el tema específico) y el panel dependía de copiar y pegar los comandos en el chat externo para generar los documentos.
- **Ajuste aplicado:**
  - Se incorporó un **lanzador multi-motor en `iniciar-panel.bat`** acompañado de `servidor.js` (Node.js), `servidor.py` (Python 3) y `servidor.ps1` (PowerShell nativo de Windows), logrando que el gestor web abra en el 100 % de las computadoras sin requerir instalaciones previas.
  - Se agregó un **segundo menú desplegable dinámico ("2. Tema específico de la Unidad")** vinculado automáticamente a cada unidad de `materiales/planificacion.md`.
  - Se integró el motor `generador.js` con botones de **generación directa en un clic desde la interfaz web** (`✨ Guardar y Generar Caso`, `🚀 Generar Guía de Aula` y `🚀 Generar 2 Dinámicas`), vinculando cada guía y dinámica al archivo específico aprobado en la etapa previa.

---

### 4. Soberanía Docente (*Human-in-the-Loop*): Cómo el Docente Conserva el Control

El diseño arquitectónico materializa el principio **"Garrocha cognitiva, nunca muleta algorítmica"** a través de cinco mecanismos técnicos y didácticos concretos:

1. **Exclusividad de uso docente:** Los estudiantes jamás interactúan con Antigravity ni con el Panel Web. El sistema es un taller de preproducción exclusivo del profesor; al aula llega únicamente la hoja de actividades impresa desde la Pestaña 5 del gestor.
2. **Compuertas de bloqueo por estado (`BORRADOR` → `APROBADO`):** Ningún agente posterior puede ejecutarse si el docente no auditó el paso previo en el Panel de Control Docente (donde puede editar el texto en vivo) y pulsó explícitamente el botón verde **"✓ Aprobar"**.
3. **Doble alternativa obligatoria:** Para evitar que la IA imponga un camino único, el Pedagogo ofrece siempre **dos enfoques de clase** (inductivo y deductivo) y el Gamificador diseña siempre **dos dinámicas distintas** (mesa de negociación argumentativa vs. simulación en vivo), explicando cuándo conviene cada una.
4. **Cierre con "Decisiones para el docente":** Cada archivo generado por cualquiera de los tres agentes termina obligatoriamente con una lista de 3 a 4 definiciones indelegables (grado de formalización matemática según el grupo, tiempos reales, uso de calculadora, modalidad de acreditación).
5. **Transparencia epistemológica (`[DATO FICTICIO]` y `[VERIFICAR]`):** El Panel de Control Docente resalta con etiquetas de color cada `[DATO FICTICIO]` de ejercitación y cada alerta `[VERIFICAR]`, de modo que el profesor distinga de un vistazo qué cifras requieren contrastación con la bibliografía de la cátedra.

---

## 🧠 Bloque C: Meta-Reflexión Integral

### 1. Conclusión Grupal: ¿Garrocha Creativa o Riesgo de Muleta Rutinaria?

Al finalizar el diseño, prueba y calibración de este equipo de agentes y su Panel de Control Docente para *Elementos de micro y macroeconomía*, nuestra conclusión grupal es que **la diferencia entre una "garrocha cognitiva" y una "muleta algorítmica" no reside en la tecnología en sí misma, sino en la arquitectura pedagógica con la que se la configura y gobierna**.

Cuando al inicio del trabajo probamos pedir actividades de Economía sin restricciones ni división de roles, la IA tendió a comportarse como una **muleta estandarizadora**: entregaba ejemplos genéricos de manual, resolvía por su cuenta cómo calificar a los alumnos, ocultaba qué datos eran inventados y producía guías homogéneas que ignoraban la realidad de un aula secundaria argentina. Usada así, la herramienta invita a la pasividad docente y empobrece la enseñanza.

En cambio, el ejercicio de **descomponer el problema didáctico en tres roles especializados (Pedagogo, Diseñador y Gamificador)**, fijar sus límites en `AGENTS.md` y acompañarlos de un **Panel de Control Docente visual con desplegables curriculares y aprobación paso a paso** funcionó como una verdadera **garrocha profesional** por tres motivos:
- **Nos obligó a explicitar nuestro propio criterio didáctico:** Para instruir a los agentes sobre qué *no* debían hacer, tuvimos que discutir y poner por escrito qué entendemos por un buen caso de estudio, cómo atendemos la heterogeneidad de ritmos sin bajar la exigencia conceptual y qué límites éticos rigen al trabajar temas sensibles como la deuda externa durante la dictadura.
- **Liberó tiempo mecánico para invertirlo en decisión pedagógica:** Al delegar en el equipo agéntico la redacción inicial del caso cotidiano (como el quiosco de Don Mario o el debate presupuestario municipal), el cálculo detallado de los tres niveles de andamiaje y el formateo listo para imprimir en hoja A4 desde el navegador, el docente recupera tiempo valioso para pensar qué enfoque se adapta mejor a su curso real de ese día.
- **Instaló una fricción deliberada y saludable (*Human-in-the-Loop*):** El bloqueo técnico ante el estado `BORRADOR` (tanto en el gestor web como en el chat) y la sección final de *"Decisiones para el docente"* impiden el uso automático o acrítico ("copiar y pegar"). El sistema obliga al profesor a leer, editar si hace falta, aprobar cada etapa y asumir la autoría final antes de imprimir la guía para sus estudiantes.

El riesgo de convertir a la IA en una muleta rutinaria siempre está latente si se relajan los controles documentales o si se acepta la primera salida sin calibrar; pero cuando el docente asume el rol de **Arquitecto y Director de Orquesta**, el equipo de agentes se transforma en un par pedagógico que amplía la imaginación didáctica y acerca conceptos económicos abstractos a la vida real de los adolescentes.

---

### 2. Bitácoras Individuales ("De la Tiza al Algoritmo")

#### 👤 Bitácora Individual — Eugenia Álvarez
- **Evolución personal y residuo cognitivo perdurable ("De la Tiza al Algoritmo"):**
  Al comenzar el Taller de Tecnología Educativa, mi vínculo con la inteligencia artificial generativa era principalmente instrumental y aislado: hacerle consultas puntuales en un chat único y obtener respuestas dispares. El mayor aprendizaje que me llevo —el residuo cognitivo que modifica mi práctica de acá en adelante— es el paso de ser "usuaria que pregunta" a ser **diseñadora de sistemas de trabajo docente**. Comprender el concepto de *anclaje documental (grounding)* y ver cómo cambia radicalmente un agente cuando se lo ata a la planificación real de la materia y se le prohíbe inventar datos me demostró que la tecnología no viene a reemplazar el saber disciplinar del profesor, sino que exige aún más rigor conceptual para poder guiarla.
- **Mirada sobre la materia y su enfoque:**
  Destaco especialmente que la cátedra haya trabajado con libertad temática total y sobre problemas reales de nuestras aulas, en lugar de ejercicios artificiales de programación. La metáfora de la *"garrocha versus la muleta"* resultó sumamente potente como brújula ética y práctica durante todo el cuatrimestre.
- **¿Qué agregaría o quitaría de la materia?**
  Mantendría intacta la modalidad de taller práctico y progresivo; como sugerencia para futuras cohortes, agregaría una sesión breve de intercambio cruzado donde un grupo pruebe en vivo el equipo de agentes diseñado por otro grupo de distinta disciplina, para poner a prueba la portabilidad y claridad de uso con colegas "externos".

---

#### 👤 Bitácora Individual — Federico Bascialla
- **Evolución personal y residuo cognitivo perdurable ("De la Tiza al Algoritmo"):**
  Mi principal cambio de mirada durante el taller estuvo en descubrir el valor de la **modularidad, la orquestación de roles y la iteración sobre fallos reales**. Antes pensaba que si una IA no daba una buena clase a la primera era por una limitación del modelo; hoy entiendo que el diseño didáctico tiene etapas distintas (pensar el problema situado, armar el andamiaje para ritmos diversos, dinamizar el grupo) y que separar esas funciones en agentes con límites precisos mejora exponencialmente el resultado. Además, ajustar el Gestor Web para que tenga desplegables por unidad y tema específico y genere cada etapa con un clic sin depender de configuraciones externas me dejó como aprendizaje perdurable la importancia de ponerse en los zapatos del docente usuario real.
- **Mirada sobre la materia y su enfoque:**
  La forma de encarar la materia fue sumamente respetuosa de la autonomía docente. Lejos de presentar a la tecnología como una solución mágica o tecnocrática, el taller nos puso siempre en el centro de la toma de decisiones, integrando el debate ético (como el cuidado ante temas sensibles y la verificación de fuentes) dentro del propio diseño técnico.
- **¿Qué agregaría o quitaría de la materia?**
  No quitaría ninguno de los ejes trabajados; sumaría un banco compartido de *System Prompts* y casos calibrados entre todos los equipos de la cursada para que al terminar el cuatrimestre cada docente se lleve una caja de herramientas interdisciplinaria lista para adaptar en su escuela.

---

#### 👤 Bitácora Individual — Martín Trifone
- **Evolución personal y residuo cognitivo perdurable ("De la Tiza al Algoritmo"):**
  A lo largo del recorrido "de la tiza al algoritmo" logré desmitificar la complejidad técnica de estas herramientas. Al construir y perfeccionar el Panel de Control Docente web (`localhost:4123`) para acompañar a los tres agentes de Antigravity —con menús desplegables de unidades y temas específicos, generación y aprobación en un clic, y vista de impresión A4 que oculta las respuestas docentes—, comprendí que la verdadera inclusión digital en la docencia pasa por **reducir al mínimo la fricción técnica sin ceder ni un milímetro de soberanía pedagógica**. El residuo cognitivo más valioso que incorporo es la certeza de que la IA puede ayudarnos a personalizar la enseñanza en cursos heterogéneos, siempre que el docente conserve la última palabra frente a su grupo.
- **Mirada sobre la materia y su enfoque:**
  Valoré mucho el acompañamiento paso a paso y el clima de experimentación sin miedo al error. Trabajar sobre una planificación real de escuela secundaria le dio al Trabajo Final un sentido de utilidad inmediata que trasciende la aprobación de la materia.
- **¿Qué agregaría o quitaría de la materia?**
  Agregaría un pequeño bloque dedicado a estrategias para transferir estas herramientas a colegas de nuestras instituciones que sienten resistencia o temor frente a la IA, tal como intentamos plasmar en nuestro proyecto con el gestor visual y la guía paso a paso.

---

#### 👤 Bitácora Individual — Adrián Fabrizio
- **Evolución personal y residuo cognitivo perdurable ("De la Tiza al Algoritmo"):**
  Para mí, el mayor hallazgo del cuatrimestre fue comprobar cómo la exigencia de **transparencia epistemológica** (`[DATO FICTICIO]` vs. `[VERIFICAR]`) transforma por completo la confiabilidad de un asistente de IA en asignaturas como Economía e Historia Económica. Al principio veía el riesgo constante de las alucinaciones como una barrera insalvable; al diseñar `AGENTS.md` y comprobar en la Prueba C (Deuda externa 1976-1983) que el sistema advertía con etiquetas visibles qué gráfico faltaba contrastar y descartaba toda dinámica frívola de puntajes en favor de una comisión de análisis documental, comprendí que los límites éticos y epistemológicos son el corazón de la arquitectura agéntica.
- **Mirada sobre la materia y su enfoque:**
  El enfoque del taller logró equilibrar la reflexión pedagógica profunda con la resolución práctica. Nos permitió discutir sobre soberanía docente y memoria histórica al mismo tiempo que aprendíamos a estructurar flujos de trabajo reproducibles y auditables.
- **¿Qué agregaría o quitaría de la materia?**
  Conservaría toda la estructura de los desafíos progresivos; incorporaría únicamente más ejemplos comparativos de cómo distintos modelos interpretan un mismo *System Prompt* para afinar aún más el criterio de calibración.

---

#### 👤 Bitácora Individual — Romina Tosar Sainz
- **Evolución personal y residuo cognitivo perdurable ("De la Tiza al Algoritmo"):**
  En mi recorrido por la materia pasé de pensar la IA como una herramienta de consulta individual a concebirla como un **espacio de co-diseño didáctico pensado para la diversidad del aula**. Lo que más me impactó fue ver materializados los tres niveles de andamiaje (*Con apoyo*, *Base* y *Ampliación*) sobre casos económicos cercanos a nuestros alumnos de secundaria: esa estructura permite que ningún estudiante de 5.° año quede afuera por trabarse en un cálculo inicial, sin bajar el techo de reflexión crítica para quienes avanzan más rápido. Ese criterio de diseño inclusivo asistido por agentes y listo para llevar al aula desde la Vista de Impresión es el aprendizaje más valioso que me llevo a mi práctica docente.
- **Mirada sobre la materia y su enfoque:**
  Rescato la calidez pedagógica de la cátedra y la insistencia permanente en que el docente nunca delegue su juicio ético ni evaluativo. Sentí que cada actividad nos daba herramientas concretas para volver al aula con propuestas más creativas y cercanas a los estudiantes.
- **¿Qué agregaría o quitaría de la materia?**
  No quitaría nada del recorrido; sumaría una instancia final de puesta en común donde podamos proyectar las guías y dinámicas generadas en el gestor web para recibir retroalimentación didáctica de los demás grupos de la cursada.
