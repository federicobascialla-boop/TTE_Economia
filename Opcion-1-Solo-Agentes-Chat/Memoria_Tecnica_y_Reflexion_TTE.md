# Trabajo Final de Cátedra — Actividad 7
## "Arquitectos de la Autonomía Docente: Solución a Problemas Reales de Clase con Equipos de Agentes en Antigravity"

- **Materia:** Taller de Tecnología Educativa (TTE) — 2.° Cuatrimestre
- **Docente Titular:** Prof. Delmiro Gil
- **Espacio Curricular Intervenido:** *Elementos de micro y macroeconomía* (5.° año, Nivel Secundario — Orientación Economía)
- **Eje Seleccionado:** **Eje A — Realización Pedagógica y Didáctica de la Clase** 💡
- **Modalidad de Implementación:** Equipo de Agentes en el Entorno de Chat de Google Antigravity
- **Integrantes del Equipo:** Eugenia Álvarez · Federico Bascialla · Martín Trifone · Adrián Fabrizio · Romina Tosar Sainz
- **Fecha de Entrega:** Noviembre de 2026

---

## 📦 Bloque A: Guía de la Solución Agéntica (Archivos de Configuración y Uso en Antigravity)

La solución agéntica está íntegramente configurada para ejecutarse dentro de **Google Antigravity** sin requerir servidores externos, instalaciones adicionales ni configuraciones complejas, garantizando su portabilidad inmediata en **Windows, Linux y macOS**.

### Estructura de la carpeta entregada
- `AGENTS.md`: Reglas comunes del equipo, principio rector *"Garrocha, no muleta"*, anclaje documental obligatorio y protocolo de control de estados (`Estado: BORRADOR` → `Estado: APROBADO`). Antigravity lo carga automáticamente desde la raíz del proyecto.
- `agentes/`: Contiene los tres *System Prompts* especializados:
  - `1-pedagogo-casista.md` (Agente 1 — Pedagogo / Casista)
  - `2-disenador-guia.md` (Agente 2 — Diseñador Didáctico)
  - `3-gamificador-desafio.md` (Agente 3 — Gamificador / Dinamizador)
- `.agents/workflows/` y `.agents/skills/`: Flujos configurados para invocar a cada agente directamente en el chat mediante los comandos `/1-pedagogo`, `/2-disenador`, `/3-gamificador` y `/equipo-completo`.
- `materiales/`: Base de conocimiento (*grounding documental*) con la planificación anual oficial de la cátedra (`planificacion.md`), el repertorio bibliográfico (`bibliografia.md`) y la carpeta `bibliografia/` para alojar capítulos o apuntes en PDF/Markdown.
- `entradas/pedido.md`: Único archivo que completa el docente antes de iniciar, indicando unidad, tema específico, características del grupo, tiempo disponible y restricciones del aula.
- `salidas/`: Carpetas separadas por rol (`salidas/pedagogo/`, `salidas/disenador/`, `salidas/gamificador/`) donde cada agente guarda sus producciones con nomenclatura multiplataforma (`AAAA-MM-DD_unidadN_tema.md`).
- `calibracion/`: Matriz de escenarios de ensayo (`casos-de-prueba.md`) y registro documentado de los ajustes iterativos realizados (`registro-calibracion.md`).
- `INSTRUCCIONES.md` y `README.md`: Guía paso a paso para el docente.

### Cómo interactúa el docente con el sistema
1. Abre la carpeta del proyecto en **Google Antigravity** (*File → Open Folder*).
2. Edita y guarda `entradas/pedido.md` con la unidad y el tema específico de la clase que desea preparar.
3. En el chat de Antigravity escribe `/1-pedagogo`. El Agente 1 genera el caso contextualizado en `salidas/pedagogo/` con `Estado: BORRADOR`.
4. El docente revisa el archivo en el editor de Antigravity, realiza los retoques que considere oportunos y cambia manualmente el encabezado a `Estado: APROBADO`.
5. Escribe `/2-disenador` para generar la guía de aula con tres niveles de andamiaje en `salidas/disenador/`, la revisa, la pasa a `Estado: APROBADO` y finalmente ejecuta `/3-gamificador` para obtener las dos propuestas de dinámicas de aula en `salidas/gamificador/`.

---

## 🏗️ Bloque B: Memoria del Docente Diseñador ("La Fórmula del Arquitecto")

### 1. El Problema de Clase Elegido y su Justificación Pedagógica

#### Contextualización del espacio curricular
El proyecto se ancla en la asignatura **Elementos de micro y macroeconomía**, correspondiente al **5.° año de la escuela secundaria (Orientación Economía)**, con estudiantes de entre **15 y 17 años**. La planificación anual de la cátedra abarca seis unidades troncales —desde teoría del consumidor, elasticidad, estructuras de mercado y distribución del ingreso en Microeconomía, hasta cuentas nacionales (PBI), política fiscal/monetaria, inflación y desempleo en Macroeconomía—, además del proyecto institucional transversal *"La deuda externa y la dictadura militar de 1976-1983"*.

#### El obstáculo didáctico real (Eje A)
En la práctica cotidiana frente al aula, el equipo docente enfrenta una triple dificultad al preparar sus clases:
1. **Lejanía de los ejemplos de manual:** La bibliografía clásica de la materia (Mankiw, Mochón y Beker, Pindyck y Rubinfeld, Samuelson) utiliza ejemplos estandarizados o anglosajones (*"el mercado de helados en verano"*, *"una fábrica de zapatos"*, *"cañones versus mantequilla"*) que resultan ajenos a la vida cotidiana de adolescentes argentinos de 15 a 17 años. Como consecuencia, los alumnos suelen resolver los ejercicios de manera mecánica o memorística, sin comprender qué fenómeno real mide el concepto económico.
2. **Heterogeneidad de ritmos en el aula:** En un mismo curso conviven estudiantes que manejan con soltura variaciones porcentuales y lectura de gráficos con otros que se bloquean ante la primera fórmula matemática, lo que exige diseñar múltiples niveles de andamiaje por clase.
3. **Escasez de tiempo docente para la transposición didáctica:** Inventar desde cero un caso situado en la realidad barrial o nacional (el quiosco escolar, la recarga de la SUBE, una changa de fin de semana, los precios del supermercado o el debate presupuestario municipal), armar su guía paso a paso con tres niveles de apoyo y pensar además una dinámica grupal participativa insume varias horas de preparación por cada tema.

Por estas razones se eligió el **Eje A (Realización Pedagógica y Didáctica de la Clase)**: el objetivo no es automatizar la enseñanza ni poner a los alumnos a chatear con un bot, sino dotar al docente de un **equipo de colegas virtuales de cátedra dentro de Antigravity** que transforme en minutos un contenido del programa oficial en borradores situados, andamiados y dinámicos listos para su revisión crítica.

---

### 2. Los Roles, *System Prompts* y Articulación del Equipo de Agentes

Para evitar el problema clásico de pedirle "todo junto" a un único modelo (lo que suele arrojar respuestas extensas, superficiales y difíciles de controlar), se dividió el trabajo en **tres agentes secuenciales con responsabilidades estrictamente delimitadas**, gobernados por una constitución común en `AGENTS.md`:

| Orden | Agente y Archivo de Prompt | Rol Específico y Qué Produce | Límites Estrictos (Qué NO hace) |
| :---: | :--- | :--- | :--- |
| **1.°** | **Agente Pedagogo / Casista**<br>(`agentes/1-pedagogo-casista.md`) | Lee `entradas/pedido.md` y `materiales/planificacion.md`. Diseña el **núcleo conceptual** para el docente (analogía + idea previa errónea a desarmar), un **caso contextualizado** en la vida adolescente argentina, **3 preguntas disparadoras graduadas** y **2 enfoques didácticos** (inductivo vs. deductivo). | No redacta guías de trabajo para alumnos, no asigna puntajes ni propone juegos de rol. No usa ejemplos de manual ni inventa cifras reales sin etiquetar `[DATO FICTICIO]` o `[VERIFICAR]`. |
| **2.°** | **Agente Diseñador Didáctico**<br>(`agentes/2-disenador-guia.md`) | Toma **únicamente** un caso con `Estado: APROBADO` de `salidas/pedagogo/`. Lo convierte en una **guía de aula paso a paso** con producto final concreto, **3 niveles de andamiaje** (*Con apoyo*, *Base*, *Ampliación*), criterios observables de valoración y hoja privada *"Solo docente"* con resolución completa y errores frecuentes. | Se detiene si el caso está en `BORRADOR`. No cambia el caso aprobado, no inventa teoría nueva, no propone mecánicas lúdicas y no fija escalas de calificación numérica ni ponderaciones de nota. |
| **3.°** | **Agente Gamificador / Dinamizador**<br>(`agentes/3-gamificador-desafio.md`) | Toma **únicamente** una guía con `Estado: APROBADO` de `salidas/disenador/`. Propone **2 dinámicas participativas alternativas** (juego de roles, negociación o simulación en vivo) con objetivos, reglas, puente conceptual con el mecanismo económico, preguntas de cierre y análisis de riesgos de aula. | Se detiene si la guía está en `BORRADOR`. Prohibido proponer "Kahoots de preguntas" vacíos de razonamiento económico o usar puntos/premios competitivos en temas sensibles de Derechos Humanos (Proyecto 1976-1983). |

#### Articulación del flujo de trabajo en Antigravity
El flujo opera como una cadena de montaje pedagógica con **compuertas de validación humana en los archivos Markdown**:
$$\text{Pedido Docente (pedido.md)} \xrightarrow{\texttt{/1-pedagogo}} \textbf{Agente 1 (Caso)} \xrightarrow[\text{Edición Docente en MD}]{\text{Estado: APROBADO}} \textbf{Agente 2 (Guía)} \xrightarrow[\text{Edición Docente en MD}]{\text{Estado: APROBADO}} \textbf{Agente 3 (Dinámicas)}$$

---

### 3. Registro de Calibración (De la Falla Inicial al Ajuste del Prompt)

Durante la etapa de ensayo práctico en Antigravity se sometió al equipo a tres escenarios de prueba (`calibracion/casos-de-prueba.md`): un concepto microeconómico abstracto (*Prueba A: Elasticidad precio de la demanda*), un debate macroeconómico con perspectivas (*Prueba B: Inflación, desempleo y políticas macroeconómicas*) y un proyecto histórico sensible sin datos cargados (*Prueba C: Deuda externa y dictadura 1976-1983*).

A continuación se documentan los **tres ajustes fundamentales** registrados en `calibracion/registro-calibracion.md`:

#### Ajuste N.º 1: Contra los ejemplos de manual y la invasión de roles (Agente 1 — Pedagogo)
- **Situación inicial (Prueba A):** Al pedir un caso sobre *Elasticidad precio de la demanda*, la primera versión del Pedagogo generó un problema estándar sobre *"La fábrica de calzado El Paso Firme que sube el par de zapatos de \$50 a \$60 y una distribuidora de sal de mesa"*, presentó números sin aclarar que eran ficticios e incluyó al final una guía de tres consignas para los alumnos con puntaje (`4 puntos`, `3 puntos`, `3 puntos`).
- **Diagnóstico del fallo:** Respuesta **genérica** (lejana a adolescentes de 15-17 años), **sin trazabilidad de datos** y **con invasión de rol** (asumió tareas del Diseñador Didáctico y fijó calificaciones).
- **Ajuste aplicado al System Prompt (`agentes/1-pedagogo-casista.md` y `AGENTS.md`):**
  - Se exigió situar los casos en vivencias adolescentes argentinas (*"consumo, trabajo informal o changas, transporte, comercio del barrio"*), prohibiendo expresamente los ejemplos de manual (*"una fábrica de sillas"*).
  - Se impuso el etiquetado obligatorio `[DATO FICTICIO]` para cifras de práctica y `[VERIFICAR]` para datos reales ausentes en `materiales/`.
  - Se añadió el límite taxativo: *"No redactás consignas, guías de trabajo ni rúbricas: eso es del Agente 2"*.
- **Resultado calibrado (`salidas/pedagogo/2026-11-06_unidad1_elasticidad.md`):** El agente produjo el caso *"El dilema del quiosco de la esquina"*, donde Don Mario sube un 30 % tanto el **alfajor triple** (cuyas ventas se desploman de 100 a 40 unidades diarias porque los chicos se pasan al turrón o a la fruta de la verdulería contigua) como las **fotocopias del cuadernillo obligatorio** (que apenas bajan de 100 a 90 copias por carecer de sustitutos). Todas las cifras quedaron marcadas con `[DATO FICTICIO]` y el documento cerró con dos enfoques didácticos y tres decisiones para el docente.

#### Ajuste N.º 2: Frenado real por *Human-in-the-Loop* y atención a la heterogeneidad (Agente 2 — Diseñador)
- **Situación inicial:** Al invocar al Diseñador Didáctico (`/2-disenador`) inmediatamente después del Pedagogo, el agente tomó el archivo en `Estado: BORRADOR` sin esperar revisión humana, armó una guía única con la fórmula algebraica directa ($\text{Ep} = \% \Delta Q / \% \Delta P$) e impuso ponderaciones cerradas (`Ejercicio 1 = 50%`).
- **Ajuste aplicado al System Prompt (`agentes/2-disenador-guia.md`):**
  - Se incorporó la **Condición de arranque obligatoria**: *"Trabajás solo sobre un archivo de `salidas/pedagogo/` cuyo encabezado diga `Estado: APROBADO`. Si el archivo dice `BORRADOR`, detenete y pedile que lo revise y lo cambie a `APROBADO`"*.
  - Se exigió estructurar **Tres niveles de andamiaje** (*Con apoyo*, *Base* y *Ampliación*) y proponer únicamente **criterios observables** sin notas ni pesos numéricos.
- **Resultado calibrado:** Se comprobó primero el bloqueo efectivo en el chat de Antigravity cuando el archivo seguía en `BORRADOR`. Una vez que el docente editó el archivo y cambió el encabezado a `Estado: APROBADO`, el Agente 2 generó una guía de 80 minutos con tabla comparativa, cálculo de Ingreso Total ($P \times Q$), pista de fracción porcentual y glosario para el nivel *Con apoyo*, y una pregunta contrafáctica sobre el aumento de precios en la verdulería para el nivel *Ampliación*.

#### Ajuste N.º 3: Blindaje ético y prevención de alucinaciones documentales (Agente 3 — Gamificador y `AGENTS.md`)
- **Situación inicial (Prueba C — Deuda externa 1976-1983):** Ante el proyecto sobre endeudamiento en la última dictadura, el Gamificador propuso inicialmente una *"Trivia del Endeudamiento con timbre, comodines y premios"* e inventó cifras exactas con decimales atribuyéndolas al *"gráfico de la cátedra"* (el cual no estaba cargado en la carpeta).
- **Ajuste aplicado al System Prompt (`agentes/3-gamificador-desafio.md` y `AGENTS.md`):**
  - En `AGENTS.md`: prohibición absoluta de inventar cifras o citas no presentes en `materiales/`, obligando a usar `[VERIFICAR: qué dato falta]` y a declarar *"sin contenido cargado, consultar"* cuando un libro solo figura en el listado de `bibliografia.md`.
  - En `3-gamificador-desafio.md`: *"No convertís en juego con puntos y premios los temas dolorosos (por ejemplo, el proyecto de la deuda externa y la dictadura 1976-1983). Para esos temas proponés roles con argumentación basada en fuentes, análisis de documentos o debate guiado, nunca puntajes. Evitá el 'Kahoot de preguntas'"*.
- **Resultado calibrado:** El agente eliminó toda mecánica trivial de puntos, estructuró una **Comisión de Análisis Documental y Debate con Fuentes** bajo el marco de *Memoria, Verdad y Justicia*, y colocó las alertas `[VERIFICAR: cargar gráfico elaborado por la docente]` y `Rapoport, Mario — sin contenido cargado, consultar`.

---

### 4. Soberanía Docente (*Human-in-the-Loop*): Cómo el Docente Conserva el Control

El diseño arquitectónico materializa el principio **"Garrocha cognitiva, nunca muleta algorítmica"** a través de cinco mecanismos técnicos y didácticos concretos:

1. **Exclusividad de uso docente:** Los estudiantes jamás interactúan con Antigravity ni con los agentes. El sistema es un taller de preproducción exclusivo del profesor; al aula llega únicamente la guía revisada por el docente.
2. **Compuertas de bloqueo por estado (`BORRADOR` → `APROBADO`):** Ningún agente posterior puede ejecutarse si el docente no abrió el archivo Markdown del paso previo en el editor, lo revisó, lo editó a su criterio y cambió explícitamente su encabezado de `Estado: BORRADOR` a `Estado: APROBADO`.
3. **Doble alternativa obligatoria:** Para evitar que la IA imponga un camino único, el Pedagogo ofrece siempre **dos enfoques de clase** (inductivo y deductivo) y el Gamificador diseña siempre **dos dinámicas distintas** (mesa de negociación argumentativa vs. simulación de mercado en vivo), explicando cuándo conviene cada una.
4. **Cierre con "Decisiones para el docente":** Cada archivo generado por cualquiera de los tres agentes termina obligatoriamente con una lista de 3 a 4 definiciones indelegables (grado de formalización matemática según el grupo, tiempos reales, uso de calculadora, modalidad de acreditación).
5. **Transparencia epistemológica (`[DATO FICTICIO]` y `[VERIFICAR]`):** El docente distingue de un vistazo qué números fueron creados con fines de ejercitación matemática y qué datos históricos o estadísticos requieren contrastación con la bibliografía física de la cátedra.

---

## 🧠 Bloque C: Meta-Reflexión Integral

### 1. Conclusión Grupal: ¿Garrocha Creativa o Riesgo de Muleta Rutinaria?

Al finalizar el diseño, prueba y calibración de este equipo de agentes en Google Antigravity para *Elementos de micro y macroeconomía*, nuestra conclusión grupal es que **la diferencia entre una "garrocha cognitiva" y una "muleta algorítmica" no reside en la tecnología en sí misma, sino en la arquitectura pedagógica con la que se la configura y gobierna**.

Cuando al inicio del trabajo probamos pedir actividades de Economía sin restricciones ni división de roles, la IA tendió a comportarse como una **muleta estandarizadora**: entregaba ejemplos genéricos de manual, resolvía por su cuenta cómo calificar a los alumnos, ocultaba qué datos eran inventados y producía guías homogéneas que ignoraban la realidad de un aula secundaria argentina. Usada así, la herramienta invita a la pasividad docente y empobrece la enseñanza.

En cambio, el ejercicio de **descomponer el problema didáctico en tres roles especializados (Pedagogo, Diseñador y Gamificador)** y escribir sus límites en `AGENTS.md` funcionó como una verdadera **garrocha profesional** por tres motivos:
- **Nos obligó a explicitar nuestro propio criterio didáctico:** Para instruir a los agentes sobre qué *no* debían hacer, tuvimos que discutir y poner por escrito qué entendemos por un buen caso de estudio, cómo atendemos la heterogeneidad de ritmos sin bajar la exigencia conceptual y qué límites éticos rigen al trabajar temas sensibles como la deuda externa durante la dictadura.
- **Liberó tiempo mecánico para invertirlo en decisión pedagógica:** Al delegar en el equipo agéntico la redacción inicial del caso cotidiano (como el quiosco de Don Mario o el debate presupuestario municipal), el cálculo detallado de los tres niveles de andamiaje y la estructura de las dinámicas grupales, el docente recupera tiempo valioso para pensar qué enfoque se adapta mejor a su curso real de ese día.
- **Instaló una fricción deliberada y saludable (*Human-in-the-Loop*):** El bloqueo técnico ante el estado `BORRADOR` en los archivos Markdown y la sección final de *"Decisiones para el docente"* impiden el uso automático o acrítico ("copiar y pegar"). El sistema obliga al profesor a abrir el archivo, leerlo, intervenirlo y asumir la autoría final antes de llevar la propuesta al aula.

El riesgo de convertir a la IA en una muleta rutinaria siempre está latente si se relajan los controles documentales o si se acepta la primera salida sin calibrar; pero cuando el docente asume el rol de **Arquitecto y Director de Orquesta**, el equipo de agentes se transforma en un par pedagógico que amplía la imaginación didáctica y acerca conceptos económicos abstractos a la vida real de los adolescentes.

---

### 2. Bitácoras Individuales

#### 👤 Bitácora Individual — Eugenia Álvarez
- **Evolución personal y aprendizaje en la cursada:**
  Al comenzar el Taller de Tecnologías Educativas (TTE), mi uso de la inteligencia artificial era esporádico y bastante intuitivo: escribirle una consulta suelta a un chat y conformarme con lo primero que respondía. El recorrido de la cursada —empezando por aprender **cómo escribir bien un prompt** en **Gemini** (definiendo rol, contexto, restricciones y formato), pasando por el trabajo sobre fuentes cerradas en **NotebookLM**, hasta llegar a crear **agentes y subagentes en Google Antigravity**— cambió por completo mi forma de trabajar. El mayor aprendizaje que me llevo es haber entendido cómo **detectar y evitar alucinaciones** atando a los agentes a documentos reales (como nuestra planificación de Economía de 5.° año) y obligándolos a marcar `[DATO FICTICIO]` o `[VERIFICAR]`. Pasé de ser una usuaria que hacía preguntas sueltas a diseñar un flujo de trabajo confiable para el aula.
- **Mirada sobre la materia y su enfoque:**
  Destaco la progresión gradual de la cátedra: haber ido desde Gemini y NotebookLM hacia Antigravity hizo que pudiéramos entender primero la lógica de los prompts y el cuidado de las fuentes antes de armar un equipo completo de agentes. La metáfora de la *"garrocha versus la muleta"* fue una guía constante para no perder nunca de vista el rol docente.
- **¿Qué agregaría o quitaría de la materia?**
  Mantendría intacta la secuencia práctica desde el prompt inicial hasta el proyecto integrador; agregaría únicamente una sesión breve de prueba cruzada donde un grupo utilice en vivo el equipo de agentes creado por otro grupo de otra asignatura.

---

#### 👤 Bitácora Individual — Federico Bascialla
- **Evolución personal y aprendizaje en la cursada:**
  Mi mayor salto durante la materia fue pasar de la interacción básica con **Gemini** a comprender la **arquitectura de agentes y subagentes en Antigravity** y cómo estructurar un trabajo integrador sólido como este. Aprendí que un buen resultado no sale de un "prompt mágico" único, sino de saber redactar instrucciones precisas (qué rol cumple cada agente, qué lee, qué produce y, sobre todo, qué tiene prohibido hacer para no invadir al siguiente ni alucinar datos). El ejercicio de iterar y calibrar los *System Prompts* cuando veíamos que el modelo daba ejemplos de manual o avanzaba sin permiso me dejó como aprendizaje perdurable el hábito de auditar críticamente cada respuesta y gobernar el flujo de principio a fin.
- **Mirada sobre la materia y su enfoque:**
  Valoré muchísimo que el taller fuera 100 % práctico y enfocado en resolver un problema real de clase. La combinación de herramientas (**Gemini**, **NotebookLM** para acotar la bibliografía sin que la IA invente, y **Antigravity** para orquestar agentes y subagentes) nos dio un panorama completo y actualizado de lo que hoy se puede hacer en educación sin resignar soberanía docente.
- **¿Qué agregaría o quitaría de la materia?**
  No quitaría ninguno de los contenidos; sumaría al final un repositorio compartido de la cátedra donde queden publicados los agentes y prompts calibrados de todos los grupos para poder seguir usándolos en nuestras escuelas.

---

#### 👤 Bitácora Individual — Martín Trifone
- **Evolución personal y aprendizaje en la cursada:**
  A lo largo del taller fui descubriendo cómo cada herramienta tiene su propósito específico dentro del trabajo docente: con **Gemini** aprendimos la ingeniería de prompts (cómo dar contexto, audiencia y criterios claros para salir de las respuestas genéricas); con **NotebookLM** vimos el valor de trabajar únicamente sobre nuestros propios textos sin que el modelo invente información fuera de las fuentes; y con **Antigravity** dimos el salto a crear **agentes y subagentes** que colaboran en etapas (Pedagogo, Diseñador y Gamificador). El aprendizaje más duradero que me llevo es que saber **redactar un buen prompt de sistema** y poner frenos humanos (*Human-in-the-Loop*) es lo que transforma a la IA en un asistente pedagógico serio y evita que responda cualquier cosa por complacencia.
- **Mirada sobre la materia y su enfoque:**
  El enfoque de la materia fue claro, desmitificador y muy cercano a la realidad del aula. Nos enseñó a mirar a la IA con ojo crítico —detectando cuándo alucina una cifra o un autor— y nos dio herramientas concretas para corregir esos errores desde el diseño mismo de las instrucciones.
- **¿Qué agregaría o quitaría de la materia?**
  Agregaría un pequeño bloque sobre estrategias prácticas para compartir estas herramientas (como NotebookLM o nuestros agentes en Antigravity) con colegas de nuestras escuelas que todavía sienten temor o desconfianza frente al uso de la IA.

---

#### 👤 Bitácora Individual — Adrián Fabrizio
- **Evolución personal y aprendizaje en la cursada:**
  Para mí, el eje más revelador del Taller de Tecnologías Educativas fue aprender a **detectar, auditar y frenar las alucinaciones de la IA** mediante el diseño riguroso de prompts y el anclaje en documentos (*grounding*). Cuando empezamos a probar casos de Economía e Historia Económica (como el proyecto de la deuda externa durante la dictadura 1976-1983), vimos en vivo el peligro de que un modelo invente estadísticas o cite libros que no leyó. Haber aprendido en la materia la lógica de **NotebookLM** (restringir el modelo a las fuentes cargadas) y trasladar esa misma exigencia a los **agentes y subagentes de Antigravity** en `AGENTS.md` mediante las marcas `[VERIFICAR]` y `[DATO FICTICIO]` cambió por completo mi criterio profesional frente a cualquier tecnología generativa.
- **Mirada sobre la materia y su enfoque:**
  La materia logró un equilibrio excelente entre la experimentación técnica con herramientas de vanguardia (Gemini, NotebookLM, Antigravity) y la responsabilidad ética y pedagógica del docente como garante de la veracidad de lo que se enseña en clase.
- **¿Qué agregaría o quitaría de la materia?**
  Conservaría toda la secuencia de calibración y detección de alucinaciones; sumaría más ejercicios comparativos en vivo poniendo a prueba un prompt mal redactado frente a un *System Prompt* bien acotado para visualizar el contraste desde las primeras clases.

---

#### 👤 Bitácora Individual — Romina Tosar Sainz
- **Evolución personal y aprendizaje en la cursada:**
  En mi recorrido por la materia pasé de usar la IA de manera básica a comprender cómo **armar un equipo de agentes y subagentes** que nos ayude a atender la diversidad real del aula. Aprender durante la cursada a **escribir bien un prompt** —especificando el tono, las características de un grupo heterogéneo de 5.° año y la estructura en tres niveles de andamiaje (*Con apoyo*, *Base* y *Ampliación*)— me demostró que cuanto mejor se expresa pedagógicamente el docente al redactar las instrucciones, más rica y humana es la propuesta que devuelve el agente. Combinar lo aprendido en **Gemini**, **NotebookLM** y **Antigravity** para llegar a este trabajo final con guías listas para nuestros chicos es un aprendizaje que ya incorporé a mi tarea cotidiana.
- **Mirada sobre la materia y su enfoque:**
  Rescato el acompañamiento constante de la cátedra y cómo nos llevó paso a paso desde las herramientas más accesibles hasta lograr construir un sistema propio de agentes sin que nadie quedara afuera por cuestiones técnicas.
- **¿Qué agregaría o quitaría de la materia?**
  No quitaría nada del recorrido; sumaría una jornada final de muestra abierta donde cada equipo pueda demostrar en pantalla cómo funcionan sus agentes y cómo resolvieron los casos de alucinación o desvío de rol en su materia.
