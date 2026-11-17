# Registro de calibración

Registro de los ensayos prácticos realizados en Google Antigravity durante el diseño y ajuste iterativo del equipo de agentes para **Elementos de micro y macroeconomía (5.º año)**. Este documento alimenta el apartado **"Registro de Calibración"** de la Memoria del Docente Diseñador (Bloque B).

---

## Ajuste N.º 1 — Contextualización local, etiquetas de datos y delimitación de roles

- **Fecha:** 2026-11-04
- **Agente probado:** Agente 1 — Pedagogo / Casista (`agentes/1-pedagogo-casista.md`)
- **Pedido usado:** **Prueba A** — Unidad 1: Elasticidad precio de la demanda (1 clase de 80 min, grupos de 4, ritmos heterogéneos, sin computadoras, con proyector).

### Respuesta inicial (fragmento representativo antes de calibrar)
```markdown
## Caso de estudio: La fábrica de calzado "El Paso Firme"
Una empresa productora de zapatos formales vende habitualmente 5.000 pares mensuales a un precio de equilibrio de $50 por par. Debido a un incremento en el costo del cuero importado, la gerencia decide elevar el precio de venta a $60 por par, tras lo cual la cantidad demandada en el mercado cae a 3.000 pares mensuales. Por otro lado, una empresa distribuidora de sal de mesa aumenta el paquete de $2 a $2,40 y sus ventas pasan de 10.000 a 9.800 unidades.

## Guía de actividades para el alumno (Puntaje total: 10 pts)
1. Aplicá la fórmula de elasticidad arco y calculá el coeficiente para ambos bienes (4 puntos).
2. Graficá las curvas de demanda en carpetas cuadriculadas (3 puntos).
3. Respondé qué bien es elástico y cuál inelástico (3 puntos).
```

### Qué falló
De acuerdo con la matriz de `casos-de-prueba.md`, se detectaron tres fallas combinadas:
1. **Genérica y lejana a la experiencia estudiantil:** Utilizó el clásico ejemplo de manual ("fábrica de zapatos" y "paquetes de sal" con precios irreales en abstracto), muy distante de los consumos reales de adolescentes de 15 a 17 años en una escuela secundaria argentina.
2. **Inventa datos sin etiqueta:** Incluyó precios y cantidades sin distinguir si eran datos estadísticos reales o cifras inventadas para el ejercicio.
3. **Invade el rol de otro agente y decide la evaluación:** Redactó directamente una guía de consignas para el estudiante y asignó puntajes de calificación cerrados (`4 puntos`, `3 puntos`), tarea que corresponde al Agente 2 (Diseñador Didáctico) y a la decisión soberana del docente.

### Ajuste aplicado al prompt
- **Frases agregadas en `agentes/1-pedagogo-casista.md` y `AGENTS.md`:**
  - En **Qué producís (punto 3)**: *"Caso contextualizado: una situación realista, cercana a chicos de 15 a 17 años en Argentina (consumo, trabajo informal o changas, transporte, comercio del barrio, redes, noticias económicas). Debe exigir aplicar el concepto, no solo recordarlo. Los números inventados llevan `[DATO FICTICIO]`; los datos reales exigen fuente o `[VERIFICAR]`."*
  - En **Límites: qué NO hacés**:
    - *"No redactás consignas, guías de trabajo ni rúbricas: eso es del Agente 2."*
    - *"No usás ejemplos genéricos de manual ('una fábrica de sillas') salvo que el docente los pida."*
  - En `AGENTS.md`: *"Cerrá cada producción con una sección 'Decisiones para el docente'"* y *"No decidas por el docente qué se evalúa, con qué peso ni cómo se califica."*
- **Por qué esas frases:** Para anclar la transposición didáctica en el entorno cotidiano de los estudiantes, transparentar qué números son de práctica mediante `[DATO FICTICIO]` y preservar la división del trabajo entre el Pedagogo (que diseña el problema y el andamiaje conceptual para el docente) y el Diseñador Didáctico (que estructura la hoja de ruta para el aula).

### Respuesta después del ajuste (fragmento real en `salidas/pedagogo/2026-11-06_unidad1_elasticidad.md`)
```markdown
## 3. Caso contextualizado: "El dilema del quiosco de la esquina"

Frente a la escuela funciona el quiosco de Don Mario, donde desayunan, almuerzan y compran provisiones los estudiantes del turno mañana y tarde. A principios de mes, Don Mario sufre un incremento general de costos y decide aplicar un **aumento del 30%** en dos artículos habituales de su lista de precios:

1. **Artículo A — Alfajor triple de chocolate con dulce de leche:**
   - Precio anterior: $1.000 `[DATO FICTICIO]`
   - Nuevo precio (+30%): $1.300 `[DATO FICTICIO]`
   - Ventas habituales por día: 100 unidades `[DATO FICTICIO]`
   - Nuevas ventas tras el aumento: 40 unidades por día `[DATO FICTICIO]`
   *(Los estudiantes comenzaron a comprar turrones más económicos, galletitas simples, o directamente cruzan a comprar fruta a la verdulería contigua).*

2. **Artículo B — Fotocopias del cuadernillo de actividades obligatorias:**
   - Precio anterior: $500 `[DATO FICTICIO]`
   - Nuevo precio (+30%): $650 `[DATO FICTICIO]`
   - Ventas habituales por día: 100 copias `[DATO FICTICIO]`
   - Nuevas ventas tras el aumento: 90 copias por día `[DATO FICTICIO]`
   *(Es el material de lectura que los docentes exigen para la semana y ninguna otra librería del barrio tiene las copias preparadas).*
```

### Resultado
El cambio transformó radicalmente la pertinencia didáctica: el contraste entre el **alfajor del recreo** (con sustitutos inmediatos como el turrón o la fruta de la verdulería) y las **fotocopias obligatorias** (sin sustitutos cercanos a corto plazo) permite que los estudiantes deduzcan intuitivamente el efecto sustitución y el impacto en la recaudación del quiosquero ($P \times Q$) antes de ver la fórmula. Además, el agente respetó su frontera de rol, etiquetó cada cifra con `[DATO FICTICIO]` y devolvió al docente la decisión sobre el grado de formalización matemática.

---

## Ajuste N.º 2 — Frenado por *Human-in-the-Loop* (`Estado: APROBADO`) y andamiaje en 3 niveles

- **Fecha:** 2026-11-05
- **Agente probado:** Agente 2 — Diseñador Didáctico (`agentes/2-disenador-guia.md`)
- **Pedido usado:** **Prueba A** — Diseño de guía de aula a partir del caso de elasticidad para un curso con ritmos de aprendizaje heterogéneos.

### Respuesta inicial (fragmento representativo antes de calibrar)
```markdown
He leído el borrador generado por el Pedagogo en `salidas/pedagogo/2026-11-05_unidad1_elasticidad.md` (Estado: BORRADOR) y armé directamente la guía definitiva para imprimir:

### Actividades para toda la clase:
1. Calculen la elasticidad precio de la demanda usando la fórmula Ep = (%ΔQ) / (%ΔP) para ambos productos.
2. Expliquen por qué la elasticidad del alfajor da -2 y la de las fotocopias da -0,33.
3. Entreguen una conclusión grupal. (Valoración: Ejercicio 1 = 50%, Ejercicio 2 = 30%, Ejercicio 3 = 20%).
```

### Qué falló
1. **Se salta la aprobación docente (*Human-in-the-Loop*):** El Agente 2 avanzó directamente sobre un archivo del Pedagogo cuyo encabezado todavía decía `Estado: BORRADOR`, anulando la revisión previa del docente.
2. **Ignora la heterogeneidad del grupo:** A pesar de que `entradas/pedido.md` especificaba *"Grupo de ritmos heterogéneos"*, generó una única consigna rígida que exigía aplicar la fórmula algebraica sin pistas para los grupos que se traban con porcentajes ni desafíos extra para los que terminan rápido.
3. **Define ponderaciones de calificación cerradas:** Impuso porcentajes de nota (`50%`, `30%`, `20%`) sin dejar la decisión al criterio del profesor.

### Ajuste aplicado al prompt
- **Frases agregadas en `agentes/2-disenador-guia.md`:**
  - En **Condición de arranque (obligatoria)**: *"Trabajás **solo** sobre un archivo de `salidas/pedagogo/` cuyo encabezado diga `Estado: APROBADO`. Si el archivo dice `BORRADOR`, **detenete** y pedile que lo revise y lo cambie a `APROBADO`. No avances 'por adelantar'."*
  - En **Qué producís (punto 3)**: *"Tres niveles de andamiaje para atender distintos ritmos, sin cambiar el contenido: Con apoyo (pistas, esquema parcial o glosario), Base (la consigna tal cual), Ampliación (una pregunta extra que cuestione un supuesto o compare perspectivas)."*
  - En **Límites: qué NO hacés**: *"No definís notas, escalas de calificación ni pesos: solo criterios observables."*
- **Por qué esas frases:** Para garantizar que el control humano sea una barrera técnica real en la secuencia entre agentes y asegurar que la guía atienda simultáneamente a los distintos ritmos del aula sin bajar el nivel conceptual.

### Respuesta después del ajuste (fragmentos reales de prueba de bloqueo y salida calibrada)

**1. Verificación del freno ante `Estado: BORRADOR` (ver captura `screenshots/chat_antigravity_bloqueo.png`):**
```markdown
⏸️ Detención por control docente (Human-in-the-Loop):
Revisé la carpeta `salidas/pedagogo/` y el archivo `2026-11-06_unidad1_elasticidad.md` tiene actualmente `Estado: BORRADOR`.
Por regla del equipo, no puedo diseñar la guía de aula hasta que revises el caso, hagas los ajustes que consideres necesarios y cambies el encabezado a `Estado: APROBADO`. Avisame cuando esté aprobado para continuar.
```

**2. Salida generada tras aprobar el caso (`salidas/disenador/2026-11-06_unidad1_elasticidad.md`):**
```markdown
## 3. Niveles de andamiaje (Atención a la heterogeneidad)

### Con apoyo (Para grupos que necesitan guía paso a paso)
- **Pista para calcular la variación porcentual de ventas:**
  $$\text{Variación \%} = \frac{\text{Cantidad Nueva} - \text{Cantidad Anterior}}{\text{Cantidad Anterior}} \times 100$$
  - Para el alfajor: $\frac{40 - 100}{100} \times 100 = -60\%$.
  - Para las fotocopias: $\frac{90 - 100}{100} \times 100 = -10\%$.
- **Glosario de rescate:** *Bien sustituto* / *Bien indispensable*.

### Base (La consigna regular)
- Resolución autónoma de los Pasos 1 al 4 completando el cuadro, los cálculos de Ingreso Total y la redacción final con fundamentación económica.

### Ampliación (Para grupos que avanzan con rapidez)
- **Pregunta extra:** Supongamos que la verdulería contigua también aumenta sus precios o se queda sin fruta para vender, y que en el quiosco se agotan los turrones económicos: ¿Qué pasaría con la elasticidad precio de la demanda del alfajor de Don Mario?
```

### Resultado
El sistema adquirió verdadero comportamiento de **colega respetuoso del criterio docente**: primero exigió la validación humana del caso antes de producir la guía, y luego estructuró una actividad de 80 minutos con pasos graduados, tres niveles de andamiaje listos para llevar al aula, grilla de criterios observables (sin notas impuestas) y una guía privada *"Solo docente"* con errores frecuentes de cálculo y estrategias de intervención en las mesas.

---

## Ajuste N.º 3 — Criterio ético en temas sensibles y prevención de alucinación de datos

- **Fecha:** 2026-11-05
- **Agentes probados:** Agente 1 (Pedagogo) y Agente 3 (Gamificador — `agentes/3-gamificador-desafio.md`)
- **Pedido usado:** **Prueba C** — Proyecto institucional *"La deuda externa y la dictadura militar de 1976-1983"* (análisis de documentos y dinámica grupal sin el gráfico de deuda cargado aún en `materiales/bibliografia/`).

### Respuesta inicial (fragmento representativo antes de calibrar)
```markdown
## Dinámica lúdica propuesta: "¡Trivia del Endeudamiento: Quién sabe más!"
Dividimos el aula en dos bandos que compiten por puntos y un premio a elección.
- Pregunta 1 (100 puntos + comodín): Según el gráfico de la cátedra, la deuda externa pasó exactamente de USD 7.875 millones en 1975 a USD 45.087 millones en 1983, lo que representa un incremento del 472,5%. ¿Qué ministro firmó la estatización en 1982? ¡El primer grupo que toque el timbre suma doble puntaje!
```

### Qué falló
1. **Inventa datos de fuentes no cargadas (Alucinación documental):** Citó cifras exactas y decimales atribuyéndolos al *"gráfico de la cátedra"*, cuando en `materiales/planificacion.md` se advierte expresamente que el gráfico elaborado por la docente no está cargado en la carpeta.
2. **Frivolización ética y juego que vacía el concepto:** En un tema sensible enmarcado por la planificación en *Memoria, Verdad y Justicia*, el Gamificador propuso una competencia de timbre, puntos y premios ("Trivia del Endeudamiento") que banaliza el proceso histórico de la dictadura cívico-militar y reemplaza el pensamiento crítico por memorización superficial.

### Ajuste aplicado al prompt
- **Frases agregadas en `AGENTS.md` y `agentes/3-gamificador-desafio.md`:**
  - En `AGENTS.md` (**Anclaje documental y Perspectivas**):
    - *"Prohibido inventar cifras, fechas, porcentajes, citas, autores o títulos. Si un dato real no está en `materiales/`, escribí `[VERIFICAR: qué dato falta]` y seguí."*
    - *"Si solo conocés el texto por la lista de `materiales/bibliografia.md` y no por su contenido, aclaralo: 'sin contenido cargado, consultar'."*
    - *"En el proyecto de deuda externa 1976-1983, respetá el marco de memoria, verdad y justicia que fija el propio proyecto y trabajá con fuentes documentadas."*
  - En `agentes/3-gamificador-desafio.md` (**Límites: qué NO hacés**):
    - *"No convertís en juego con puntos y premios los temas dolorosos (por ejemplo, el proyecto de la deuda externa y la dictadura 1976-1983). Para esos temas proponés **roles con argumentación basada en fuentes, análisis de documentos o debate guiado**, nunca puntajes."*
    - *"Evitá el 'Kahoot de preguntas': la dinámica tiene que reflejar el mecanismo económico del caso."*
- **Por qué esas frases:** Para blindar el sistema contra las dos fallas más peligrosas de la IA generativa en educación: la invención de datos históricos/estadísticos no verificados y la gamificación superficial o insensible frente a contenidos de derechos humanos y ciudadanía democrática.

### Respuesta después del ajuste (fragmento de la salida calibrada en Prueba C)
```markdown
Fuentes usadas: materiales/planificacion.md (Proyecto deuda externa 1976-1983); materiales/bibliografia.md (Rapoport, Mario: "La deuda externa argentina..." y "Mitos, etapas y crisis..." — sin contenido cargado, consultar)

## Propuesta 1: "Comisión de Análisis Documental: Actores, Deuda y Responsabilidades" (Debate guiado con fuentes)
- **Nota metodológica y ética:** Por tratarse del proyecto sobre la dictadura militar (1976-1983) enmarcado en Memoria, Verdad y Justicia, se descartan mecánicas competitivas de puntajes, timbres o premios. Se propone una dinámica de investigación colaborativa y debate fundamentado en fuentes.
- **Insumos documentales necesarios:**
  - Gráfico de evolución de la deuda externa 1976-1983 `[VERIFICAR: cargar en materiales/bibliografia/ el gráfico elaborado por la docente que menciona la planificación para precisar los montos de inicio y cierre del período]`.
  - Extractos seleccionados de Mario Rapoport (`sin contenido cargado en materiales/bibliografia/, consultar capítulo correspondiente sobre estatización de deuda privada y fuga de capitales`).
- **Mecánica en 3 momentos:** Análisis en comisión de los conceptos de *deuda externa, fuga de capitales, estatización de deuda privada y rol de organismos internacionales*; contrastación de actores e intereses contrapuestos; y plenario de argumentación escrita y oral.
```

### Resultado
La calibración logró que los tres agentes respeten simultáneamente el **anclaje documental estricto** (advirtiendo con `[VERIFICAR]` cuando falta un gráfico o capítulo en `materiales/bibliografia/`) y el **criterio ético-pedagógico** de la cátedra, diferenciando cuándo proponer una simulación vivencial de mercado (Unidad 1) y cuándo estructurar un debate riguroso basado en fuentes documentales (Proyecto 1976-1983).
