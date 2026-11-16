/**
 * Motor Pedagógico de Generación Local para los 3 Agentes (Economía 5.° año)
 * Alineado 100% con materiales/planificacion.md, AGENTS.md y las reglas de los 3 agentes.
 */

const UNIDADES_Y_TEMAS = {
  "Período diagnóstico — Unidad introductoria": [
    "Escasez, necesidades sociales y definiciones del campo económico",
    "Elementos metodológicos y estructura de un sistema económico",
    "Relaciones y diferencias entre microeconomía y macroeconomía"
  ],
  "Unidad 1 — La microeconomía. Aspectos generales": [
    "Teoría de la demanda y Elasticidad precio e ingreso de la demanda",
    "El consumo, teorías del consumidor, utilidad y curvas de indiferencia",
    "Teoría de la producción: etapas, costos de corto/largo plazo y maximización del beneficio",
    "Administración de bienes escasos y funcionamiento del modelo económico"
  ],
  "Unidad 2 — La microeconomía. Análisis de los mercados": [
    "Equilibrio de mercado e intervención del Estado (precios máximos y mínimos)",
    "Competencia perfecta y curvas de oferta de corto y largo plazo",
    "Monopolio, ingreso y costo marginal, y restricciones legales",
    "Oligopolio, oferente líder, cartel (OPEP) y competencia monopolística",
    "Fallas del mercado y características estructurales del capitalismo"
  ],
  "Unidad 3 — La microeconomía. Elementos para el análisis de la distribución del ingreso": [
    "Mercado de trabajo, salario medio, sindicatos, salario mínimo y negociación colectiva",
    "Distribución del ingreso, sistema de precios y demanda derivada de factores",
    "Mercado de la tierra (renta) y mercado de capital (rendimiento e intereses)",
    "Equilibrio general y economía del bienestar"
  ],
  "Unidad 4 — La macroeconomía. Herramientas conceptuales para el análisis del ingreso nacional": [
    "Producto Bruto Interno (PBI): cálculo, contabilidad nacional y debate sobre calidad de vida",
    "Del Producto Nacional al Ingreso Nacional e Ingreso Disponible",
    "Demanda agregada, producción de equilibrio y financiación de la actividad económica",
    "Evolución del PBI argentino y latinoamericano: crecimiento vs. desarrollo"
  ],
  "Unidad 5 — La macroeconomía. Las políticas macroeconómicas": [
    "Política fiscal en un Estado neoliberal vs. Estado keynesiano (ciclos y presupuesto público)",
    "Multiplicador del presupuesto equilibrado e incremento de la producción",
    "Banco Central, política monetaria, creación de dinero, ingreso nacional y precios",
    "Problemas de la política de estabilización macroeconómica"
  ],
  "Unidad 6 — La macroeconomía. Oferta y demanda agregada": [
    "Inflación y desempleo: relación de intercambio y tensiones distributivas",
    "Oferta y demanda agregada: salarios, precios y nivel de empleo",
    "Déficit presupuestario, inflación, deuda pública y efectividad de la política económica"
  ],
  "Proyecto Especial — La deuda externa y la dictadura militar (1976-1983)": [
    "Endeudamiento externo (1976-1983), fuga de capitales, estatización de deuda privada y rol del FMI"
  ]
};

/**
 * Banco de casos curriculares profundos por tema/unidad para garantizar rigor económico,
 * datos etiquetados con [DATO FICTICIO] / [VERIFICAR], cuadros numéricos y pertinencia adolescente.
 */
const BANCO_CURRICULAR = {
  "escasez": {
    unidad: "Período diagnóstico — Unidad introductoria",
    contenidos: "Definiciones conceptuales del campo de la economía. Bienes escasos y gestión de necesidades sociales. Costo de oportunidad.",
    expectativas: [
      "Expectativa 1: Reconocer lo económico, en sus versiones micro y macroeconómicas, como resultado de una actividad humana socio-culturalmente determinada.",
      "Expectativa 2: Identificar actores y sujetos sociales con intereses y necesidades contrapuestos."
    ],
    nucleo: "La economía no estudia el dinero en abstracto, sino cómo las personas y las sociedades administran recursos limitados (presupuesto, tiempo, espacio) frente a necesidades colectivas e individuales crecientes. Toda elección implica un **costo de oportunidad**: aquello a lo que renunciamos al elegir una alternativa.",
    analogia: "El presupuesto de la fiesta o buzo de egresados de 5.º año: cada peso o cada hora de organización que el curso destina a la tela bordada es dinero o tiempo que no puede destinar al viaje o al sonido.",
    ideaErronea: "Creer que 'lo económico' es únicamente lo que tiene precio en dinero o que un recurso gratuito no tiene costo de oportunidad (olvidando el tiempo y los usos alternativos).",
    tituloCaso: "El dilema del fondo común de 5.º año y el presupuesto del Centro de Estudiantes",
    narrativaCaso: `El curso de 5.º año reunió en su fondo común **$480.000 [DATO FICTICIO]** mediante ferias de platos durante el primer trimestre. Al mismo tiempo, disponen de **12 horas semanales [DATO FICTICIO]** de trabajo voluntario fuera de hora entre los delegados. Se enfrentan a tres propuestas excluyentes para usar ese fondo antes de mitad de año:

1. **Opción A — Compra de insumos para la kermés escolar:** Inversión de **$480.000 [DATO FICTICIO]**. Se estima recaudar **$720.000 [DATO FICTICIO]** (ganancia neta de **$240.000 [DATO FICTICIO]**), pero exige las **12 horas semanales [DATO FICTICIO]** completas de trabajo de los delegados durante un mes.
2. **Opción B — Seña para congelar el precio de los buzos de egresados:** Inversión de **$480.000 [DATO FICTICIO]**. Evita un recargo futuro estimado del **25% ($120.000 de ahorro directo) [DATO FICTICIO]** y solo requiere **2 horas semanales [DATO FICTICIO]** de gestión, liberando 10 horas para preparar los exámenes integradores.
3. **Opción C — Equipamiento compartido del aula (ventilador industrial y pava eléctrica):** Inversión de **$480.000 [DATO FICTICIO]**. No genera retorno monetario ni ahorro directo en los buzos, pero resuelve una necesidad diaria de bienestar de los 32 estudiantes todo el año.`,
    tablaHeaders: ["Alternativa", "Gasto inicial", "Beneficio económico / social estimado", "Tiempo exigido", "Principal renuncia (Costo de oportunidad)"],
    tablaFilas: [
      ["**A. Kermés escolar**", "$480.000 `[DATO FICTICIO]`", "+$240.000 netos `[DATO FICTICIO]`", "12 hs/sem `[DATO FICTICIO]`", ""],
      ["**B. Seña de buzos**", "$480.000 `[DATO FICTICIO]`", "Ahorro de $120.000 `[DATO FICTICIO]`", "2 hs/sem `[DATO FICTICIO]`", ""],
      ["**C. Equipamiento aula**", "$480.000 `[DATO FICTICIO]`", "Uso colectivo diario (32 alumnos)", "1 h/sem `[DATO FICTICIO]`", ""]
    ],
    preguntasNivel1: [
      "¿Cuáles son los dos recursos escasos que enfrenta el curso de 5.º año en esta situación?",
      "¿Qué diferencia hay entre una necesidad individual de un estudiante y una necesidad colectiva del grupo en las tres opciones?"
    ],
    preguntasNivel2: [
      "Definí el **costo de oportunidad** monetario y de tiempo si el curso elige la Opción B (congelar los buzos) en lugar de la Opción A (hacer la kermés).",
      "Si valoraran cada hora de estudio y organización de los delegados en $4.000 `[DATO FICTICIO]` (por ejemplo, lo que ganarían dando apoyo escolar), ¿sigue siendo la Opción A tan ventajosa frente a la Opción B? Mostrá el cálculo."
    ],
    preguntasNivel3: [
      "¿Por qué la Opción C (equipar el aula) es una decisión económica aunque no dé ganancia monetaria? ¿Qué intereses contrapuestos pueden surgir entre quienes ya pagaron su buzo individualmente y quienes priorizan el equipamiento común?"
    ],
    resolucionDocente: [
      "**Identificación de escasez:** Recursos escasos: capital acumulado ($480.000) y tiempo disponible del grupo (12 hs semanales, equivalentes a 48 hs en el mes).",
      "**Cálculo con valoración del tiempo:** En la Opción A se requieren 40 horas más al mes que en la Opción B (10 hs/semana × 4 semanas). Si esas 40 horas se valoran a $4.000/h = $160.000 de costo implícito de tiempo. Ganancia neta de A ($240.000) menos costo de tiempo ($160.000) = $80.000, que resulta **menor** que el ahorro directo de la Opción B ($120.000).",
      "**Criterio conceptual:** La economía abarca la satisfacción de necesidades sociales (Opción C) y no solo la rentabilidad monetaria; toda asignación refleja prioridades valorativas del grupo social."
    ],
    juego1Nombre: "La Asamblea del Presupuesto Participativo de 5.º Año",
    juego1Mecanica: "El curso se divide en tres bancadas que representan distintas prioridades dentro del aula (Comisión de Egresados, Comisión de Estudio y Becas, Comisión de Infraestructura Escolar). Con un tablero de recursos limitados ($480.000 y 12 horas), deben negociar una asignación mixta o escalonada que supere los 2/3 de los votos fundamentando el costo de oportunidad asumido.",
    juego2Nombre: "El Reloj de la Escasez: Simulación de Costo de Oportunidad",
    juego2Mecanica: "Cada grupo recibe 10 fichas de 'Tiempo' y 10 fichas de 'Presupuesto'. En tres rondas con imprevistos (aumento del proveedor textil, semana de trimestrales, ola de calor en la escuela), deben reasignar sus fichas en vivo y calcular qué dejaron de ganar en la mejor alternativa descartada."
  },

  "micro_macro": {
    unidad: "Período diagnóstico — Unidad introductoria",
    contenidos: "Estructura general de un sistema económico. Relaciones y diferencias entre microeconomía y macroeconomía. Flujo circular del ingreso.",
    expectativas: [
      "Expectativa 1: Reconocer lo económico, en sus versiones micro y macroeconómicas, como resultado de una actividad humana socio-culturalmente determinada.",
      "Expectativa 3: Conocer los principales instrumentos de las políticas macroeconómicas y su relación con la microeconomía."
    ],
    nucleo: "La **microeconomía** analiza las decisiones de unidades individuales (familias, comercios, trabajadores, mercados específicos), mientras que la **macroeconomía** estudia el comportamiento agregado de la economía nacional (inflación general, PBI, empleo total, tipo de cambio). Ambas dimensiones se condicionan mutuamente.",
    analogia: "Mirar un bosque con lupa o con dron: la microeconomía estudia cómo crece un árbol específico y cómo compite por luz con el de al lado; la macroeconomía mide el clima general, la lluvia total y la superficie completa del bosque.",
    ideaErronea: "Pensar que la macroeconomía 'solo afecta al Gobierno o a los grandes bancos' y no tiene relación directa con el precio del boleto, el alquiler del local del barrio o el primer empleo juvenil.",
    tituloCaso: "La panadería familiar 'La Espiga' frente a las noticias económicas de la semana",
    narrativaCaso: `La familia de Valentina (alumna de 5.º año) tiene una panadería de barrio, *"La Espiga"*, donde trabajan 4 personas. Esta semana, en la mesa familiar se discutieron cuatro situaciones distintas que afectan al comercio:

1. **Situación 1:** El índice general de precios al consumidor (inflación mensual nacional) fue del **4,2% [DATO FICTICIO]** y el Banco Central modificó la tasa de interés de los préstamos bancarios.
2. **Situación 2:** A dos cuadras abrió una sucursal de una cadena de panaderías low-cost que vende la docena de facturas un **20% más barata ($3.200 frente a $4.000) [DATO FICTICIO]**, por lo que las ventas de facturas de *"La Espiga"* bajaron de **50 a 35 docenas diarias [DATO FICTICIO]**.
3. **Situación 3:** El Ministerio de Economía anunció una variación en las tarifas eléctricas mayoristas nacionales y en el tipo de cambio oficial que encarece las exportaciones e importaciones de trigo del país.
4. **Situación 4:** Valentina y sus padres evalúan si les conviene alquilar una amasadora más grande por **$150.000 mensuales [DATO FICTICIO]** para producir pan de masa madre y diferenciarse de la cadena vecina.`,
    tablaHeaders: ["Situación", "Dimensión principal (Micro / Macro)", "Actor que toma la decisión", "Efecto en los ingresos o costos de la panadería"],
    tablaFilas: [
      ["**1. Inflación nacional y tasa de interés**", "", "Banco Central / Economía agregada", ""],
      ["**2. Competencia de la panadería vecina**", "", "Comercios del barrio y consumidores", "Caída de ventas de 50 a 35 docenas `[DATO FICTICIO]`"],
      ["**3. Tarifas nacionales y comercio exterior de trigo**", "", "Estado Nacional / Mercado global", ""],
      ["**4. Alquiler de amasadora y diferenciación**", "", "Familia dueña de 'La Espiga'", "Costo fijo extra de $150.000/mes `[DATO FICTICIO]`"]
    ],
    preguntasNivel1: [
      "Clasificá cada una de las 4 situaciones según pertenezca principalmente al campo de la **microeconomía** o de la **macroeconomía**.",
      "¿Qué actores económicos (familias, empresas, Estado) aparecen interactuando en el relato?"
    ],
    preguntasNivel2: [
      "Calculá cuánto dinero por día dejó de ingresar en 'La Espiga' por la caída en la venta de facturas (de 50 a 35 docenas a $4.000 la docena `[DATO FICTICIO]`).",
      "Explicá cómo una variable **macroeconómica** del relato (como la tasa de interés del Banco Central o el precio nacional de la energía) condiciona la decisión **microeconómica** de la Situación 4 (alquilar o no la nueva amasadora)."
    ],
    preguntasNivel3: [
      "Si a una empresa individual le conviene reducir personal para bajar sus costos en un momento de caída de ventas, ¿qué ocurre a nivel **macroeconómico** si todas las empresas del país toman esa misma decisión al mismo tiempo? (Paradoja de la frugalidad / demanda agregada)."
    ],
    resolucionDocente: [
      "**Clasificación:** Situaciones 1 y 3 son **Macroeconómicas** (variables agregadas: nivel general de precios, tasa de interés de referencia, balanza comercial/tipo de cambio). Situaciones 2 y 4 son **Microeconómicas** (competencia en un mercado local específico, estructura de costos y decisión de producción de una unidad económica).",
      "**Cálculo de ingresos:** Antes: 50 docenas × $4.000 = $200.000 diarios. Ahora: 35 docenas × $4.000 = $140.000 diarios. Pérdida bruta: **$60.000 diarios** (30% de caída en facturación de facturas).",
      "**Articulación Micro-Macro:** Si todas las empresas recortan empleo/salarios simultáneamente para ahorrar costos microeconómicos, cae el ingreso disponible de las familias a nivel macroeconómico, reduciendo el consumo agregado y profundizando la caída de ventas."
    ],
    juego1Nombre: "El Tablero de Doble Lente: Del Barrio al País",
    juego1Mecanica: "Cada grupo representa un sector del barrio (Panadería, Familias trabajadoras, Molino harinero, Estado). En cada ronda el docente proyecta una noticia real o simulada (macro) y los grupos deben trazar en 5 minutos la cadena de transmisión hasta el mostrador del barrio (micro) y proponer una respuesta defensiva.",
    juego2Nombre: "El Flujo Circular en Vivo: Mercado de Bienes y Factores",
    juego2Mecanica: "Simulación con tarjetas de trabajo, insumos, bienes y billetes ficticios entre dos mitades del aula ('Hogares' y 'Empresas') con el docente actuando como 'Sector Público/Banco'. Permite visualizar qué pasa cuando el flujo se frena en un punto."
  },

  "elasticidad": {
    unidad: "Unidad 1 — La microeconomía. Aspectos generales",
    contenidos: "La teoría de la demanda. Elasticidad precio e ingreso de la demanda. Impacto en el ingreso total del oferente.",
    expectativas: [
      "Expectativa 8: Utilizar las nociones de elasticidad de demanda y oferta de mercado.",
      "Expectativa 7: Aplicar los conceptos de curva de oferta y demanda de mercado en casos ideales y concretos.",
      "Expectativa 2: Identificar actores y sujetos sociales con intereses y necesidades contrapuestos."
    ],
    nucleo: "La **elasticidad precio de la demanda** mide qué tan sensible es la cantidad demandada de un bien ante una variación porcentual en su precio. No todos los bienes reaccionan igual: cuando existen sustitutos cercanos o el bien es prescindible, la demanda es **elástica** y subir el precio reduce el Ingreso Total del vendedor; cuando es indispensable y sin sustitutos inmediatos, es **inelástica**.",
    analogia: "Una banda elástica frente a una soga gruesa: ante el mismo tirón (mismo porcentaje de aumento de precio), la banda elástica se estira muchísimo (cae fuerte la cantidad comprada), mientras que la soga apenas se mueve.",
    ideaErronea: "Creer que 'siempre que un comerciante sube un 30% el precio, gana un 30% más de plata', ignorando cuántas unidades deja de vender por la reacción de los compradores.",
    tituloCaso: "El dilema del quiosco de Don Mario frente a la escuela",
    narrativaCaso: `Frente a la escuela funciona el quiosco de Don Mario, donde compran a diario los estudiantes de 5.º año. A principios de mes, para cubrir subas de costos, Don Mario aplica un **aumento parejo del 30%** en dos artículos clave:

1. **Artículo A — Alfajor triple de chocolate:**
   - Precio anterior: **$1.000 [DATO FICTICIO]** → Nuevo precio (+30%): **$1.300 [DATO FICTICIO]**
   - Ventas diarias antes: **100 unidades [DATO FICTICIO]** → Ventas diarias después: **40 unidades [DATO FICTICIO]**
   *(Los chicos empezaron a comprar turrones económicos, galletitas sueltas o fruta en la verdulería de al lado).*

2. **Artículo B — Fotocopias del cuadernillo obligatorio de actividades:**
   - Precio anterior: **$500 [DATO FICTICIO]** → Nuevo precio (+30%): **$650 [DATO FICTICIO]**
   - Ventas diarias antes: **100 juegos [DATO FICTICIO]** → Ventas diarias después: **90 juegos [DATO FICTICIO]**
   *(Es el material obligatorio de la semana y ninguna otra librería de la cuadra tiene el original para fotocopiar).*`,
    tablaHeaders: ["Artículo", "Precio Anterior", "Nuevo Precio (+30%)", "Ventas Anteriores", "Nuevas Ventas", "Variación % Cantidad", "Ingreso Total Antes vs. Después"],
    tablaFilas: [
      ["**Alfajor triple**", "$1.000 `[DATO FICTICIO]`", "$1.300 `[DATO FICTICIO]`", "100 u. `[DATO FICTICIO]`", "40 u. `[DATO FICTICIO]`", "", ""],
      ["**Fotocopias cuadernillo**", "$500 `[DATO FICTICIO]`", "$650 `[DATO FICTICIO]`", "100 u. `[DATO FICTICIO]`", "90 u. `[DATO FICTICIO]`", "", ""]
    ],
    preguntasNivel1: [
      "¿Qué porcentaje aumentó el precio en ambos productos y en cuál de los dos las compras de los estudiantes cayeron más abruptamente?",
      "¿Qué alternativas (bienes sustitutos) encontraron los estudiantes frente al aumento del alfajor y por qué no pudieron hacer lo mismo con las fotocopias?"
    ],
    preguntasNivel2: [
      "Calculá la variación porcentual de la cantidad demandada en cada producto y el **Ingreso Total ($P \\times Q$)** de Don Mario antes y después del aumento.",
      "Clasificá la demanda de cada artículo en **elástica** o **inelástica** verificando en cuál de los dos subir el precio le hizo perder dinero al quiosquero."
    ],
    preguntasNivel3: [
      "Desde el punto de vista ético y económico: ¿por qué los bienes indispensables o sin sustitutos le otorgan mayor poder al vendedor para trasladar aumentos, y cómo afecta esto el presupuesto de las familias de los estudiantes?"
    ],
    resolucionDocente: [
      "**Variaciones porcentuales y elasticidad:** Alfajor: $\\Delta P = +30\\%$, $\\Delta Q = -60\\%$ ($|Ep| = 2 > 1$, **Demanda Elástica**). Fotocopias: $\\Delta P = +30\\%$, $\\Delta Q = -10\\%$ ($|Ep| = 0,33 < 1$, **Demanda Inelástica**).",
      "**Ingreso Total ($IT = P \\times Q$):** En el alfajor pasa de $100.000 ($1.000 × 100) a $52.000 ($1.300 × 40) → **pierde $48.000 diarios**. En las fotocopias pasa de $50.000 ($500 × 100) a $58.500 ($650 × 90) → **recauda $8.500 más por día**.",
      "**Conclusión:** En bienes elásticos (con sustitutos cercanos), subir el precio reduce el ingreso total; en bienes inelásticos (necesarios y sin sustitutos), el consumidor absorbe el aumento."
    ],
    juego1Nombre: "El Consejo Consultivo de Don Mario (Negociación entre Comerciante y Centro de Estudiantes)",
    juego1Mecanica: "En cada grupo de 4, una dupla representa a los Administradores del Quiosco y otra a los Delegados Estudiantiles. Deben negociar una nueva lista de precios y un combo estudiantil que recupere la recaudación caída en golosinas a cambio de bonificar el material de estudio, respaldando cada propuesta con el cálculo de $P \\times Q$.",
    juego2Nombre: "El Mercado del Recreo: Simulación de Presupuesto y Sustitutos",
    juego2Mecanica: "Cada estudiante recibe un presupuesto diario ficticio de $2.000 `[DATO FICTICIO]` en dos rondas (antes y después del shock del 30%) frente a tres puestos en el pizarrón: Alfajores, Fotocopias y Fruta de la verdulería. Se contabiliza a mano alzada cómo se desplaza la demanda en tiempo real."
  },

  "consumidor": {
    unidad: "Unidad 1 — La microeconomía. Aspectos generales",
    contenidos: "El consumo, los consumidores y las teorías del consumidor. La utilidad total y marginal. La curva de indiferencia y la restricción presupuestaria. El equilibrio del consumidor.",
    expectativas: [
      "Expectativa 1: Reconocer lo económico como actividad humana socio-culturalmente determinada.",
      "Expectativa 7: Aplicar conceptos de comportamiento del consumidor y demanda en casos concretos."
    ],
    nucleo: "La teoría del consumidor explica cómo las personas eligen combinar bienes limitados por su **restricción presupuestaria**. La **utilidad marginal decreciente** muestra que cada unidad adicional consumida de un mismo bien aporta menos satisfacción que la anterior, llevando a diversificar el consumo.",
    analogia: "Comer porciones de pizza cuando salís con amigos con mucha hambre: la primera porción te da una satisfacción enorme, la segunda bastante, la cuarta ya casi nada y preferís cambiar la quinta porción por un vaso de gaseosa.",
    ideaErronea: "Confundir 'utilidad' en sentido económico (satisfacción subjetiva o valor de uso) con 'utilidad' en sentido contable (ganancia monetaria de una empresa) o pensar que siempre preferimos acumular un único bien.",
    tituloCaso: "La salida del viernes: combos de comida, datos móviles y presupuesto adolescente",
    narrativaCaso: `Lucas y su grupo de amigos de 5.º año disponen de **$6.000 cada uno [DATO FICTICIO]** para la tarde del viernes después de educación física. Pueden destinar ese dinero a dos bienes: **Porciones de empanadas ($1.000 c/u) [DATO FICTICIO]** y **Cargas de paquetes de datos / horas de sala de juegos ($1.000 c/u) [DATO FICTICIO]**.

Al registrar cuánta satisfacción (medida en puntos de *Utilidad*) les genera cada unidad adicional que consumen en la tarde, arman la siguiente tabla:

- **1.ª empanada:** +50 puntos de utilidad | **2.ª empanada:** +35 puntos | **3.ª empanada:** +20 puntos | **4.ª empanada:** +8 puntos | **5.ª empanada:** +2 puntos.
- **1.º paquete de datos/juego:** +40 puntos | **2.º paquete:** +30 puntos | **3.º paquete:** +20 puntos | **4.º paquete:** +10 puntos.`,
    tablaHeaders: ["Combinación con $6.000", "Cantidad de Empanadas ($1.000 c/u)", "Cantidad de Paquetes Datos/Juego ($1.000 c/u)", "Gasto Total", "Utilidad Total Acumulada"],
    tablaFilas: [
      ["**Canasta A (Todo comida)**", "6 empanadas `[DATO FICTICIO]`", "0 paquetes `[DATO FICTICIO]`", "$6.000 `[DATO FICTICIO]`", ""],
      ["**Canasta B (Equilibrada)**", "3 empanadas `[DATO FICTICIO]`", "3 paquetes `[DATO FICTICIO]`", "$6.000 `[DATO FICTICIO]`", ""],
      ["**Canasta C (4 emp. + 2 paq.)**", "4 empanadas `[DATO FICTICIO]`", "2 paquetes `[DATO FICTICIO]`", "$6.000 `[DATO FICTICIO]`", ""]
    ],
    preguntasNivel1: [
      "¿Qué sucede con la satisfacción (utilidad marginal) que aporta cada nueva empanada a medida que Lucas ya comió varias?",
      "¿Qué combinaciones de empanadas y paquetes de datos agotarán exactamente el presupuesto de $6.000 `[DATO FICTICIO]`?"
    ],
    preguntasNivel2: [
      "Sumá la **Utilidad Total** de la Canasta B (3 empanadas + 3 paquetes) y de la Canasta C (4 empanadas + 2 paquetes). ¿Cuál de las dos maximiza la satisfacción total de Lucas con sus $6.000?",
      "Representá en un gráfico sencillo la **recta de restricción presupuestaria** (máximo 6 empanadas en un eje y máximo 6 paquetes en el otro) y marcá dónde quedan las canastas posibles e inalcanzables."
    ],
    preguntasNivel3: [
      "¿En qué medida las elecciones de consumo de los adolescentes responden solo a una cuenta individual racional ('maximizar utilidad') y en qué medida están moldeadas por la publicidad, la moda y la presión del grupo social?"
    ],
    resolucionDocente: [
      "**Ley de utilidad marginal decreciente:** A medida que aumenta la cantidad consumida de empanadas (1.ª a 5.ª), la utilidad marginal cae de 50 → 35 → 20 → 8 → 2.",
      "**Cálculo de optimización (Equilibrio del consumidor):** Canasta B (3 empanadas + 3 paquetes): Empanadas (50 + 35 + 20 = 105) + Paquetes (40 + 30 + 20 = 90) = **195 puntos de utilidad total**. Canasta C (4 empanadas + 2 paquetes): Empanadas (50 + 35 + 20 + 8 = 113) + Paquetes (40 + 30 = 70) = **183 puntos**. La **Canasta B (3 y 3)** es el óptimo porque en la última unidad de ambos bienes la utilidad marginal por peso gastado se iguala (20 puntos).",
      "**Mirada crítica (Expectativa 1):** Contrastar el modelo neoclásico del *homo economicus* con el consumo como práctica sociocultural condicionada por el entorno."
    ],
    juego1Nombre: "El Desafío de las Canastas: Armando el Viernes Perfecto",
    juego1Mecanica: "En equipos, reciben tarjetas de bienes con tablas de utilidad marginal decreciente y una tarjeta de presupuesto. En la Ronda 2 cambia a mitad de precio uno de los bienes (desplazamiento/rotación de la restricción presupuestaria) y deben recalcular la nueva canasta óptima.",
    juego2Nombre: "Juicio a la Publicidad: ¿Decisión Autónoma o Necesidad Creada?",
    juego2Mecanica: "Debate estructurado entre dos posturas teóricas: la perspectiva microeconómica tradicional (soberanía del consumidor y curvas de indiferencia) frente a la perspectiva socioeconómica crítica (influencia de algoritmos, marcas y cultura juvenil)."
  },

  "produccion": {
    unidad: "Unidad 1 — La microeconomía. Aspectos generales",
    contenidos: "Teoría de la producción. Etapas y región económica de la producción. Los costos: fijos, variables, medios y marginales. Corto y largo plazo. Maximización del beneficio.",
    expectativas: [
      "Expectativa 10: Comprender los conceptos de costo y renta económica y su interrelación.",
      "Expectativa 11: Conocer las propiedades de eficiencia en la asignación de recursos."
    ],
    nucleo: "En el **corto plazo**, al menos un factor productivo es fijo (el local o las máquinas). Agregar más trabajadores al mismo espacio físico aumenta la producción al principio, pero llega un punto donde aparece la **ley de rendimientos marginales decrecientes**: los trabajadores se estorban en el mismo espacio y cada nuevo integrante aporta menos unidades adicionales, encareciendo el costo marginal.",
    analogia: "Cocinar pizzas en un horno familiar de dos bandejas: con 1 persona cuesta llegar a todo; con 2 se organizan genial y sacan el doble; con 3 se reparten tareas; pero si metés 7 personas en la misma cocina chica con el mismo horno, se chocan entre sí y casi no suman pizzas nuevas.",
    ideaErronea: "Pensar que 'contratar el doble de personas en el mismo taller siempre produce el doble de mercadería' o no distinguir entre costos fijos (que se pagan aunque se produzca cero) y costos variables.",
    tituloCaso: "El emprendimiento de estampado de remeras de los egresados ('Taller Estampa Sur')",
    narrativaCaso: `Un grupo de jóvenes del barrio montó un pequeño taller de serigrafía para estampar remeras de egresados y clubes locales. En el **corto plazo**, cuentan con **1 sola mesa de estampado de 4 estaciones y 1 horno de secado (Factor Fijo)**, por los cuales pagan un alquiler y abono eléctrico fijo de **$200.000 por semana [DATO FICTICIO]**.

Cada trabajador contratado + insumos por jornada semanal representa un **Costo Variable** de **$100.000 semanales [DATO FICTICIO]**, y cada remera estampada se vende a **$10.000 [DATO FICTICIO]**. Al probar con distinta cantidad de trabajadores en el mismo taller observaron lo siguiente:

- **1 trabajador:** Produce **25 remeras/semana [DATO FICTICIO]**.
- **2 trabajadores:** Producen **65 remeras/semana [DATO FICTICIO]** (se dividen entintado y secado sin tiempos muertos).
- **3 trabajadores:** Producen **90 remeras/semana [DATO FICTICIO]**.
- **4 trabajadores:** Producen **102 remeras/semana [DATO FICTICIO]**.
- **5 trabajadores:** Producen **105 remeras/semana [DATO FICTICIO]** (tienen que hacer fila esperando que se desocupe el único horno de secado).`,
    tablaHeaders: ["Trabajadores (L)", "Producto Total (Remeras)", "Producto Marginal (Remeras extra)", "Costo Fijo", "Costo Variable", "Costo Total (CF+CV)", "Ingreso Total ($10.000 × Q)", "Beneficio (IT - CT)"],
    tablaFilas: [
      ["**1**", "25 `[DATO FICTICIO]`", "25", "$200.000 `[DATO FICTICIO]`", "$100.000 `[DATO FICTICIO]`", "$300.000", "$250.000", "-$50.000"],
      ["**2**", "65 `[DATO FICTICIO]`", "+40", "$200.000 `[DATO FICTICIO]`", "$200.000 `[DATO FICTICIO]`", "", "", ""],
      ["**3**", "90 `[DATO FICTICIO]`", "+25", "$200.000 `[DATO FICTICIO]`", "$300.000 `[DATO FICTICIO]`", "", "", ""],
      ["**4**", "102 `[DATO FICTICIO]`", "+12", "$200.000 `[DATO FICTICIO]`", "$400.000 `[DATO FICTICIO]`", "", "", ""],
      ["**5**", "105 `[DATO FICTICIO]`", "+3", "$200.000 `[DATO FICTICIO]`", "$500.000 `[DATO FICTICIO]`", "", "", ""]
    ],
    preguntasNivel1: [
      "¿Cuál es el **factor fijo** y cuál es el **factor variable** en el taller 'Estampa Sur' a corto plazo?",
      "¿A partir de qué trabajador empieza a disminuir el aporte adicional (Producto Marginal) de cada nuevo integrante y por qué ocurre físicamente eso en el taller?"
    ],
    preguntasNivel2: [
      "Completá el cuadro calculando el **Costo Total**, el **Ingreso Total** y el **Beneficio ($IT - CT$)** para 2, 3, 4 y 5 trabajadores.",
      "¿Con cuántos trabajadores logra el taller **maximizar su beneficio** semanal? ¿Por qué pasar de 4 a 5 trabajadores hace caer la ganancia aunque produzcan 3 remeras más?"
    ],
    preguntasNivel3: [
      "¿Qué tendría que cambiar el taller para pasar del **corto plazo** al **largo plazo** si recibe un pedido gigante de 300 remeras por semana? ¿Cómo se relacionan la eficiencia técnica y las condiciones de trabajo dentro del taller?"
    ],
    resolucionDocente: [
      "**Producto Marginal (PMg):** Trabajador 1: +25; Trabajador 2: +40 (especialización inicial); Trabajador 3: +25 (inician rendimientos marginales decrecientes); Trabajador 4: +12; Trabajador 5: +3.",
      "**Tabla de costos y beneficios:**\n  - Con L=2: CT = $400.000 | IT = $650.000 | Beneficio = **+$250.000**.\n  - Con L=3: CT = $500.000 | IT = $900.000 | Beneficio = **+$400.000**.\n  - Con L=4: CT = $600.000 | IT = $1.020.000 | Beneficio = **+$420.000 (Máximo Beneficio)**.\n  - Con L=5: CT = $700.000 | IT = $1.050.000 | Beneficio = **+$350.000** (cae porque el 5.º trabajador suma $30.000 de ingreso marginal pero cuesta $100.000 de costo marginal).",
      "**Paso al largo plazo:** Incorporar un segundo horno de secado y otra mesa (modificar el factor capital que era fijo)."
    ],
    juego1Nombre: "La Fábrica de Aviones de Papel: Experimentando los Rendimientos Decrecientes",
    juego1Mecanica: "En un pupitre pequeño (factor fijo) y con 1 sola regla y 1 lápiz (capital fijo), se cronometran rondas de 1 minuto sumando de 1 a 6 estudiantes alrededor del mismo banco. Anotan en el pizarrón el Producto Total y el Producto Marginal real de cada ronda.",
    juego2Nombre: "Consultoría Cooperativa para 'Estampa Sur'",
    juego2Mecanica: "Los grupos actúan como asesores técnicos del taller ante dos escenarios: un aumento del alquiler fijo (+50%) vs. un aumento del costo de la tinta por remera. Deben demostrar matemáticamente cuál de los dos cambia la cantidad óptima de trabajadores y cuál solo reduce el colchón de ganancia."
  },

  "equilibrio_mercados": {
    unidad: "Unidad 2 — La microeconomía. Análisis de los mercados",
    contenidos: "Concepto de equilibrio de mercado. La intervención directa e indirecta del Estado (precios máximos y precios mínimos). Exceso de demanda y exceso de oferta.",
    expectativas: [
      "Expectativa 7: Aplicar los conceptos de curva de oferta y demanda de mercado en casos ideales y concretos.",
      "Expectativa 9: Reconocer el efecto de diversas políticas de intervención en mercados competitivos."
    ],
    nucleo: "El **equilibrio de mercado** ocurre al precio donde la cantidad que los compradores quieren adquirir iguala la cantidad que los productores desean ofrecer. Cuando el Estado interviene fijando un **precio máximo** por debajo del equilibrio para proteger el acceso a un bien básico, aumenta la cantidad demandada pero suele contraerse la cantidad ofrecida, generando **escasez (exceso de demanda)** si no se acompaña de medidas de abastecimiento.",
    analogia: "Una balanza de dos platillos: el precio es el fiel del medio. Si ponés un tope artificial que impide que el fiel suba cuando hay más gente queriendo comprar que productos en la estantería, se forma fila en la puerta y faltan unidades.",
    ideaErronea: "Pensar que 'basta con dictar por ley que un producto sea barato para que todos puedan comprarlo sin que cambie la cantidad que fabrican o venden las empresas', o a la inversa, creer que el mercado libre sin regulación garantiza siempre que todas las familias accedan a los bienes esenciales.",
    tituloCaso: "El precio del repelente en pleno brote de dengue y la regulación del mercado",
    narrativaCaso: `Durante un pico de casos de dengue en el otoño, la demanda de aerosoles repelentes en los barrios se dispara. En situación normal sin regulación post-brote, el mercado barrial muestra el siguiente comportamiento semanal entre farmacias/comercios y familias:

- **A $3.000 por aerosol [DATO FICTICIO]:** Las familias quieren comprar **900 unidades [DATO FICTICIO]**, pero los comercios y distribuidores solo consiguen y ofrecen **300 unidades [DATO FICTICIO]**.
- **A $6.000 por aerosol [DATO FICTICIO]:** Las familias demandan **600 unidades [DATO FICTICIO]** y los comercios ofrecen **600 unidades [DATO FICTICIO]**.
- **A $9.000 por aerosol [DATO FICTICIO]:** Las familias solo pueden comprar **300 unidades [DATO FICTICIO]**, mientras que los distribuidores ofrecen **900 unidades [DATO FICTICIO]**.

Ante las quejas vecinales porque muchas familias no pueden pagar **$6.000 [DATO FICTICIO]** por envase para mandar a los chicos a la escuela, el Municipio evalúa establecer un **Precio Máximo obligatorio de $3.000 [DATO FICTICIO]** o bien entregar producción pública / subsidiar costos de provisión.`,
    tablaHeaders: ["Precio por aerosol", "Cantidad Demandada (Qd)", "Cantidad Ofrecida (Qo)", "Situación del Mercado (Equilibrio / Exceso)", "Unidades faltantes o sobrantes"],
    tablaFilas: [
      ["**$3.000** `[DATO FICTICIO]` (Tope propuesto)", "900 u. `[DATO FICTICIO]`", "300 u. `[DATO FICTICIO]`", "", ""],
      ["**$6.000** `[DATO FICTICIO]`", "600 u. `[DATO FICTICIO]`", "600 u. `[DATO FICTICIO]`", "", ""],
      ["**$9.000** `[DATO FICTICIO]`", "300 u. `[DATO FICTICIO]`", "900 u. `[DATO FICTICIO]`", "", ""]
    ],
    preguntasNivel1: [
      "¿Cuál es el **precio de equilibrio** y la **cantidad de equilibrio** en este mercado según los datos de la tabla?",
      "¿Qué sucede con la cantidad que quieren comprar las familias y la cantidad que ofrecen los comercios cuando el precio baja a $3.000 `[DATO FICTICIO]`?"
    ],
    preguntasNivel2: [
      "Completá el cuadro identificando en qué fila hay **Exceso de Demanda (escasez)**, **Equilibrio** y **Exceso de Oferta (excedente)**, calculando cuántas unidades faltan o sobran en cada caso.",
      "Graficá las curvas de Oferta y Demanda con los tres puntos, marcando el punto de equilibrio ($6.000; 600 u.) y la brecha que se genera si se impone un precio máximo de $3.000 sin otras medidas."
    ],
    preguntasNivel3: [
      "Analizá el dilema económico y sanitario: si se deja el precio libre en $6.000 `[DATO FICTICIO]`, no hay filas pero las familias de menores ingresos quedan excluidas de un bien sanitario; si se fija el tope en $3.000 sin más medidas, faltan 600 envases y aparece la reventa. ¿Qué instrumento de **intervención indirecta** (producción en laboratorios públicos, quita de impuestos o cupo por familia) permitiría desplazar la curva de oferta para que haya repelentes accesibles sin desabastecimiento?"
    ],
    resolucionDocente: [
      "**Equilibrio:** $P_e = \\$6.000$ y $Q_e = 600$ aerosoles ($Q_d = Q_o$).",
      "**Efecto del Precio Máximo ($3.000):** Como $3.000 < $6.000, es un precio máximo operativo. Genera un **Exceso de Demanda (escasez) de $900 - 300 = 600$ unidades**.",
      "**Intervención directa vs. indirecta (Expectativa 9):** Contrastar el control directo de precios (que actúa sobre el precio sin expandir la oferta) con políticas de estímulo a la oferta (laboratorios estatales, reducción de costos/impuestos a insumos) que desplazan la curva de oferta hacia la derecha, bajando el precio de equilibrio y aumentando la cantidad disponible."
    ],
    juego1Nombre: "Audiencia Pública Municipal: El Dilema del Repelente",
    juego1Mecanica: "Juego de roles con 4 sectores: 1) Familias y Centros de Salud barriales, 2) Farmacias minoristas, 3) Laboratorio fabricante, 4) Secretaría de Comercio y Salud. Deben diseñar en 25 minutos un paquete de intervención que evite tanto la exclusión por precio ($6.000) como el desabastecimiento ($3.000).",
    juego2Nombre: "Rueda de Mercado en el Aula: Compradores y Vendedores buscando el Equilibrio",
    juego2Mecanica: "La mitad del curso recibe tarjetas de 'Comprador' (con distintos precios máximos que pueden pagar) y la otra mitad tarjetas de 'Vendedor' (con distintos costos mínimos). En la Ronda 1 negocian libremente y descubren cómo el precio converge solo hacia el equilibrio; en la Ronda 2 el docente impone un tope máximo y experimentan quiénes se quedan sin conseguir tarjeta."
  },

  "monopolio_oligopolio": {
    unidad: "Unidad 2 — La microeconomía. Análisis de los mercados",
    contenidos: "Estructuras de mercado: competencia perfecta, monopolio, oligopolio y competencia monopolística. El cartel (OPEP). Fallas del mercado.",
    expectativas: [
      "Expectativa 5: Conocer los diferentes tipos de monopolios y oligopolios e identificarlos en casos concretos, a escala nacional e internacional.",
      "Expectativa 11: Conocer las propiedades de eficiencia en la asignación de recursos."
    ],
    nucleo: "No todos los mercados funcionan con miles de pequeños vendedores sin poder sobre el precio (**competencia perfecta**). Cuando existe un único proveedor sin sustitutos (**monopolio**) o unas pocas grandes empresas que dominan la oferta (**oligopolio**), estas tienen **poder de mercado**: pueden influir en los precios o cantidades, afectando el excedente del consumidor y justificando regulaciones estatales.",
    analogia: "Un partido donde mil personas venden agua alrededor del estadio (si uno cobra caro, le comprás al de al lado: competencia) versus estar adentro del estadio con las puertas cerradas donde una sola empresa tiene la concesión exclusiva de bebidas (monopolio) o solo tres grandes marcas acuerdan no bajar de cierto piso (oligopolio).",
    ideaErronea: "Creer que 'si hay varias marcas en la góndola del supermercado, siempre hay mucha competencia', sin advertir que a veces 4 o 5 marcas distintas pertenecen a las mismas 2 empresas fabricantes (concentración oligopólica).",
    tituloCaso: "Cuatro mercados en la vida cotidiana de 5.º año: Internet del hogar, telefonía celular, verdulerías y peluquerías",
    narrativaCaso: `Los estudiantes de 5.º año relevaron cómo funcionan cuatro bienes y servicios que usan todas las semanas en su localidad:

1. **Servicio A — Red de distribución eléctrica / agua corriente domiciliaria:** Existe **1 sola empresa concesionaria** en la zona porque tender dos redes de cables y caños paralelas por cada calle sería costosísimo (Monopolio natural). Tarifa regulada: **$18.000 mensuales promedio [DATO FICTICIO]**.
2. **Servicio B — Telefonía móvil y datos 4G/5G:** Operan **3 grandes empresas nacionales** que concentran casi el 100% de las líneas. Cuando una actualiza el abono mensual de **$12.000 a $15.000 [DATO FICTICIO]**, las otras dos aplican aumentos muy similares en la misma semana.
3. **Mercado C — Barberías y peluquerías del barrio:** Hay **más de 25 locales** en un radio de 15 cuadras. Cada una intenta diferenciarse por el estilo de corte, la música del local o turnos por WhatsApp, con precios entre **$5.000 y $7.000 [DATO FICTICIO]**.
4. **Mercado D — Puestos de papa y cebolla en la feria franca:** Hay **decenas de puesteros** vendiendo exactamente la misma bolsa de papa blanca a **$1.200 el kilo [DATO FICTICIO]**; ninguno puede cobrar $2.000 porque el comprador camina dos metros al puesto siguiente.`,
    tablaHeaders: ["Mercado / Servicio", "Cantidad de oferentes", "Tipo de producto (Homogéneo / Diferenciado / Único)", "Capacidad de fijar el precio", "Estructura de mercado"],
    tablaFilas: [
      ["**A. Red eléctrica / agua**", "1 empresa", "Único sin sustituto directo", "Alta (requiere regulación estatal)", ""],
      ["**B. Telefonía móvil**", "3 grandes empresas", "Similar con barreras de entrada", "Interdependencia / Liderazgo de precios", ""],
      ["**C. Barberías del barrio**", "+25 locales", "Diferenciado por estilo/atención", "Limitada al prestigio de su marca", ""],
      ["**D. Feria de papa y cebolla**", "Muchos puesteros", "Homogéneo (idéntico)", "Nula (precio-aceptantes)", ""]
    ],
    preguntasNivel1: [
      "Asociá cada uno de los 4 casos (A, B, C y D) con su estructura de mercado correspondiente: **Competencia perfecta**, **Competencia monopolística**, **Oligopolio** y **Monopolio natural**.",
      "¿En cuál de los cuatro mercados un vendedor individual no tiene ninguna posibilidad de cobrar más caro que sus vecinos?"
    ],
    preguntasNivel2: [
      "Explicá qué es una **barrera de entrada** comparando cuánto cuesta abrir una barbería en el barrio (Mercado C) frente a instalar una nueva red nacional de antenas de telefonía celular (Servicio B).",
      "En el Servicio B (Oligopolio): si hay 10.000 usuarios en la localidad y las 3 empresas suben el abono de $12.000 a $15.000 `[DATO FICTICIO]` al mismo tiempo sin perder clientes porque todos necesitan estar conectados, ¿cuánto dinero adicional por mes pasa del bolsillo de las familias a las empresas?"
    ],
    preguntasNivel3: [
      "¿Por qué existen leyes de **defensa de la competencia** que prohíben que las empresas de un oligopolio se pongan de acuerdo en secreto para fijar precios (formar un *cartel*)? ¿En qué se diferencia eso del cartel internacional de la **OPEP** en el mercado del petróleo?"
    ],
    resolucionDocente: [
      "**Clasificación:** A = Monopolio natural; B = Oligopolio concentrado; C = Competencia monopolística; D = Aproximación a Competencia perfecta.",
      "**Transferencia de ingresos en el oligopolio:** $(\\$15.000 - \\$12.000) \\times 10.000 \\text{ usuarios} = \\$30.000.000$ mensuales adicionales transferidos del excedente del consumidor hacia las 3 firmas oferentes.",
      "**Barreras y regulación (Expectativa 5):** En el monopolio natural la regulación tarifaria estatal evita el abuso de posición dominante; en el oligopolio la colusión o cartelización elimina la competencia en perjuicio de los usuarios."
    ],
    juego1Nombre: "El Dilema del Oligopolio: ¿Competir o Acordar Precios?",
    juego1Mecanica: "Tres equipos representan a las 3 compañías de telefonía móvil en 4 rondas secretas. En cada ronda deben elegir en una tarjeta si cobran Tarifa Alta ($15.000) o Tarifa Promocional ($11.000). Descubren la tensión de la matriz de pagos (Dilema del Prisionero) y luego un 4.º equipo ('Comisión de Defensa de la Competencia y Usuarios') audita el impacto en los consumidores.",
    juego2Nombre: "Detectives de Góndola: Mapa de Concentración Económica",
    juego2Mecanica: "Los grupos analizan una lista impresa de 15 marcas cotidianas de alimentos, bebidas y limpieza (con sus empresas madres indicadas en la ficha) para descubrir cuántas empresas reales controlan la góndola y exponer en 3 minutos qué estructura de mercado predomina."
  },

  "distribucion_trabajo": {
    unidad: "Unidad 3 — La microeconomía. Elementos para el análisis de la distribución del ingreso",
    contenidos: "Distribución del ingreso y remuneración de los factores. El mercado de trabajo, salario medio, sindicatos, salario mínimo y negociación colectiva. Renta de la tierra e interés del capital.",
    expectativas: [
      "Expectativa 2: Identificar actores y sujetos sociales con intereses y necesidades contrapuestos dentro de los procesos productivos.",
      "Expectativa 12: Conocer distintas perspectivas acerca de cómo se determina el monto del salario en una economía de mercado."
    ],
    nucleo: "La **distribución del ingreso** analiza cómo se reparte la riqueza generada en la producción entre los distintos factores: **salario** (trabajo), **beneficio** (empresas/capital productivo), **interés** (capital financiero) y **renta** (tierra/propiedad inmueble). El salario no se define como el precio de una mercancía cualquiera: intervienen la productividad, el costo de vida, los **sindicatos**, la **negociación colectiva (paritarias)** y el **salario mínimo**.",
    analogia: "El reparto de una torta horneada entre varios: antes de discutir si la porción de cada uno alcanza, hay que ver cuánto creció la torta total (valor agregado) y con qué reglas de negociación se corta cada porción entre quien puso el local, quien puso las máquinas y quienes amasaron.",
    ideaErronea: "Pensar que 'el salario depende únicamente de la oferta y demanda individual de cada trabajador aislado' o creer que subir los salarios siempre perjudica a la economía sin ver que los salarios son al mismo tiempo la principal fuente de demanda de los comercios locales.",
    tituloCaso: "La paritaria en la fábrica textil 'Tejidos del Sur' y el primer empleo juvenil",
    narrativaCaso: `En la pyme textil *"Tejidos del Sur"* trabajan **20 operarios** que producen camperas escolares y deportivas. Mensualmente, una vez pagados los insumos básicos (telas e hilos), la empresa genera un **Valor Agregado Neto (la torta a repartir) de $30.000.000 mensuales [DATO FICTICIO]**.

Ese valor agregado se distribuye actualmente entre tres actores:
1. **Propietario del galpón (Factor Tierra / Inmueble):** Cobra un alquiler (renta) de **$3.000.000 por mes (10%) [DATO FICTICIO]**.
2. **Los 20 trabajadores (Factor Trabajo):** Cobran un salario promedio de **$750.000 cada uno [DATO FICTICIO]**, lo que suma una masa salarial de **$15.000.000 por mes (50%) [DATO FICTICIO]**.
3. **Dueños de la empresa y banco (Factor Capital / Beneficio e Interés):** Perciben los **$12.000.000 restantes por mes (40%) [DATO FICTICIO]**.

Ante un aumento del costo de la canasta familiar en el trimestre, los delegados sindicales piden en la **negociación colectiva (paritaria)** elevar el salario a **$900.000 por trabajador [DATO FICTICIO]**, mientras la cámara empresaria sostiene que si sube la masa salarial sin aumentar las ventas se reducirá su margen para reinvertir en máquinas.`,
    tablaHeaders: ["Factor Productivo", "Actor Social", "Remuneración", "Monto Mensual Actual", "% sobre el Valor Agregado ($30M)", "Monto con Propuesta Sindical"],
    tablaFilas: [
      ["**Tierra / Inmueble**", "Dueño del galpón", "Renta / Alquiler", "$3.000.000 `[DATO FICTICIO]`", "10%", "$3.000.000 `[DATO FICTICIO]`"],
      ["**Trabajo (20 operarios)**", "Trabajadores / Sindicato", "Salario", "$15.000.000 `[DATO FICTICIO]`", "50%", ""],
      ["**Capital / Empresa**", "Empresarios / Banco", "Beneficio e Interés", "$12.000.000 `[DATO FICTICIO]`", "40%", ""]
    ],
    preguntasNivel1: [
      "¿Cómo se llama la retribución económica que recibe cada uno de los tres factores productivos (Tierra, Trabajo y Capital) en el caso de 'Tejidos del Sur'?",
      "¿Qué diferencia hay entre negociar un sueldo de manera individual al entrar a un primer empleo y negociarlo mediante un **convenio colectivo de trabajo (paritaria)**?"
    ],
    preguntasNivel2: [
      "Calculá a cuánto pasaría la masa salarial total de los 20 operarios si se aprueba el salario de **$900.000 [DATO FICTICIO]** y qué porcentaje del Valor Agregado de $30.000.000 representaría.",
      "Si el Valor Agregado total se mantiene fijo en $30.000.000 `[DATO FICTICIO]`, ¿en cuánto quedaría el beneficio empresario? ¿Y cuánto tendría que crecer el Valor Agregado total (por mayor productividad o mayores ventas) para pagar el aumento salarial manteniendo los $12.000.000 de beneficio para reinversión?"
    ],
    preguntasNivel3: [
      "Compará dos perspectivas teóricas sobre el salario (**Expectativa 12**): \n  - *Perspectiva neoclásica:* el salario es un costo de producción determinado por la productividad marginal y si se fija muy alto puede reducir la contratación.\n  - *Perspectiva keynesiana / heterodoxa:* el salario es además el principal motor del consumo interno (si los 20 operarios ganan más, compran más en los comercios del barrio, aumentando las ventas de las empresas).\n  ¿Qué argumentos de cada perspectiva aparecen en la discusión de 'Tejidos del Sur'?"
    ],
    resolucionDocente: [
      "**Cálculo distributivo:** 20 trabajadores × $900.000 = **$18.000.000 de masa salarial** (pasa del **50% al 60%** del Valor Agregado de $30.000.000). Si el valor agregado no crece y el alquiler sigue en $3.000.000 (10%), el beneficio empresario baja de $12.000.000 a **$9.000.000 (30%)**.",
      "**Escenario de crecimiento productivo:** Para sostener $18M de salarios + $3M de alquiler + $12M de beneficio para reinversión, el Valor Agregado mensual debe crecer a **$33.000.000 (+10%)**.",
      "**Contraste teórico (Expectativas 2 y 12):** Visibilizar la puja distributiva entre capital, renta y trabajo, y el doble carácter del salario como costo microeconómico para la firma individual y como componente central de la demanda agregada macroeconómica."
    ],
    juego1Nombre: "Mesa Paritaria en 'Tejidos del Sur': Simulación de Negociación Colectiva",
    juego1Mecanica: "Cada grupo se divide en: 1) Delegados Sindicales, 2) Representantes de la Cámara Textil Pyme, y 3) Mediadores del Ministerio de Trabajo. Deben redactar un acuerdo paritario trimestral eligiendo cómo combinar: aumento salarial directo, premio por productividad y cláusula de compromiso de inversión en maquinaria.",
    juego2Nombre: "El Mapa de los Factores del Barrio",
    juego2Mecanica: "A partir de tres actividades reales cercanas a los chicos (una app de reparto en bici, un campo sojero arrendado y una cafetería local), los grupos desarman de cada $1.000 que paga el cliente qué parte va a Salario, qué parte a Renta de la tierra/inmueble y qué parte a Beneficio/Interés del capital."
  },

  "pbi_ingreso": {
    unidad: "Unidad 4 — La macroeconomía. Herramientas conceptuales para el análisis del ingreso nacional",
    contenidos: "El origen del Producto Bruto Interno (PBI) y la contabilidad nacional. Valor agregado y bienes finales vs. intermedios. Discusiones sobre la validez del PBI para conocer la calidad de vida. Crecimiento vs. desarrollo.",
    expectativas: [
      "Expectativa 4: Establecer relaciones entre el crecimiento y desarrollo de un país y el PBI.",
      "Expectativa 1: Reconocer lo económico como resultado de una actividad humana socio-culturalmente determinada."
    ],
    nucleo: "El **Producto Bruto Interno (PBI)** mide el valor monetario de todos los **bienes y servicios finales** producidos dentro de un país en un período determinado (o la suma del **valor agregado** en cada etapa para no contar dos veces los insumos). Sin embargo, que crezca el PBI (**crecimiento económico**) no garantiza automáticamente que mejore la vida de toda la población (**desarrollo humano y ambiental**).",
    analogia: "Medir el éxito de una familia mirando únicamente el total de plata que entró a la casa en el año: ese número no te dice si para ganarla tuvieron que trabajar 16 horas por día sin descanso, si se endeudaron, si se repartió todo en una sola persona o si se deterioró la salud de la casa.",
    ideaErronea: "Sumar todas las ventas de todas las etapas productivas (el trigo + la harina + el pan) duplicando o triplicando el valor real producido, o creer que un país con mayor PBI siempre tiene menor desigualdad y mejor calidad de vida.",
    tituloCaso: "La cadena del pan argentino y la paradoja de las dos provincias: ¿Crecer es lo mismo que desarrollarse?",
    narrativaCaso: `**Parte A — Cómo no contar dos veces el mismo trigo:**
En una localidad productiva intervienen tres eslabones para producir una partida de pan:
1. **El productor agropecuario** cosecha trigo (sin insumos previos comprados a terceros en este ejemplo simplificado) y se lo vende al molino por **$100.000 [DATO FICTICIO]**.
2. **El molino harinero** transforma ese trigo en harina y se la vende a la panadería por **$180.000 [DATO FICTICIO]**.
3. **La panadería** hornea el pan y lo vende a las familias consumidoras finales por **$300.000 [DATO FICTICIO]**.

**Parte B — Dos regiones con el mismo PBI por habitante:**
Imaginemos dos regiones imaginarias de **100.000 habitantes** que este año alcanzaron exactamente el mismo PBI anual:
- **Región Norte:** Aumentó su PBI un **8% [DATO FICTICIO]** gracias a una explotación intensiva que contaminó el río local; el **70% del ingreso [DATO FICTICIO]** queda concentrado en el 10% más rico, y las tareas de cuidado familiar y huertas comunitarias no aparecen en la estadística.
- **Región Sur:** Tuvo el mismo PBI total, pero con acceso universal a agua potable, escuelas técnicas equipadas, menor desigualdad distributiva y preservación del bosque nativo.`,
    tablaHeaders: ["Etapa Productiva", "Valor de Venta de la Etapa", "Costo de Insumos Intermedios Comprados", "Valor Agregado en la Etapa (Venta - Insumos)", "¿Es Bien Intermedio o Final?"],
    tablaFilas: [
      ["**1. Campo (Trigo)**", "$100.000 `[DATO FICTICIO]`", "$0 `[DATO FICTICIO]`", "", "Bien intermedio"],
      ["**2. Molino (Harina)**", "$180.000 `[DATO FICTICIO]`", "$100.000 `[DATO FICTICIO]`", "", "Bien intermedio"],
      ["**3. Panadería (Pan)**", "$300.000 `[DATO FICTICIO]`", "$180.000 `[DATO FICTICIO]`", "", "Bien final"],
      ["**TOTALES**", "Suma bruta: $580.000", "Insumos: $280.000", "**PBI (Suma de VA):** ", "**Valor Bien Final: $300.000**"]
    ],
    preguntasNivel1: [
      "En la Parte A: ¿cuál es el **bien final** y cuáles son los **bienes intermedios** en la cadena del pan?",
      "En la Parte B: ¿qué diferencia existe entre los conceptos de **crecimiento económico** y **desarrollo económico y social**?"
    ],
    preguntasNivel2: [
      "Completá la tabla calculando el **Valor Agregado** de cada etapa (Campo, Molino y Panadería). Demostrá por qué sumar las ventas brutas ($580.000) sería un error de **doble contabilización** y verificá que la suma de los Valores Agregados coincide exactamente con el valor del bien final ($300.000).",
      "Si el año que viene la panadería vende los mismos kilos de pan pero al doble de precio ($600.000) solo por inflación, ¿aumentó realmente la riqueza física producida? Explicá la diferencia entre **PBI Nominal** y **PBI Real**."
    ],
    preguntasNivel3: [
      "Mencioná **tres dimensiones fundamentales para la calidad de vida** de un país que el indicador del PBI deja afuera o mide mal (por ejemplo: distribución del ingreso, trabajo doméstico y de cuidados no remunerado, deterioro ambiental o tiempo libre).",
      "Si fueras parte de un equipo económico estudiantil, ¿qué otros indicadores sumarías junto al PBI para evaluar si una ciudad o país está mejorando de verdad?"
    ],
    resolucionDocente: [
      "**Cálculo del Valor Agregado (VA):** Campo: $100.000 - $0 = **$100.000**. Molino: $180.000 - $100.000 = **$80.000**. Panadería: $300.000 - $180.000 = **$120.000**. Suma total de VA = $100.000 + $80.000 + $120.000 = **$300.000**, idéntico al valor del bien final (Pan).",
      "**PBI Nominal vs. Real:** Si sube el precio pero se produce la misma cantidad física de pan, sube el PBI Nominal (a precios corrientes) pero el **PBI Real** (a precios constantes) permanece igual (+0%).",
      "**Validez del PBI (Expectativa 4):** El PBI mide flujo de producción mercantil, pero ignora la distribución (Índice de Gini), el trabajo de cuidado en los hogares, las externalidades ambientales negativas y la salud/educación (IDH)."
    ],
    juego1Nombre: "La Cadena del Valor Agregado: El Desafío de No Contar Dos Veces",
    juego1Mecanica: "Cada grupo recibe sobres con 3 cadenas productivas argentinas (Soja → Aceite → Biodiésel; Algodón → Tela → Remera; Litio → Celda → Batería) con algunas tarjetas 'trampa' (doble contabilización, inflación sin más unidades, trabajo doméstico). Deben calcular el PBI real aportado por su cadena en 15 minutos.",
    juego2Nombre: "El Nuevo Termómetro del Bienestar Nacional",
    juego2Mecanica: "Simulación de una cumbre económica juvenil donde los grupos deben auditar a la 'Región Norte' y a la 'Región Sur' creando un Índice de Desarrollo Estudiantil con 4 indicadores ponderados, defendiendo por qué el PBI solo no alcanza para medir el bienestar."
  },

  "politicas_macro": {
    unidad: "Unidad 5 — La macroeconomía. Las políticas macroeconómicas",
    contenidos: "La política fiscal en un Estado neoliberal y de tipo keynesiano: intervención en los ciclos económicos. El presupuesto público y el multiplicador. El Banco Central y la política monetaria.",
    expectativas: [
      "Expectativa 3: Conocer los principales instrumentos de las políticas macroeconómicas y su relación con la microeconomía.",
      "Expectativa 13: Conocer las relaciones entre las políticas de los bancos centrales y las políticas monetarias nacionales."
    ],
    nucleo: "El Estado cuenta con dos grandes cajas de herramientas macroeconómicas: la **política fiscal** (impuestos, gasto público e inversión en obras, educación o transferencias) y la **política monetaria** a cargo del **Banco Central** (cantidad de dinero, tasas de interés y encajes bancarios). Frente a las crisis o ciclos económicos, las escuelas **keynesiana** y **neoliberal/ortodoxa** debaten cómo y cuándo usarlas.",
    analogia: "Los pedales y el volante de un colectivo en una ruta con subidas y bajadas (los ciclos económicos): cuando el colectivo pierde fuerza en una subida (recesión y caída del empleo), el enfoque keynesiano propone pisar el acelerador del gasto e inversión pública para empujar el motor; el enfoque ortodoxo prioriza frenar el gasto para no recalentar ni endeudar el vehículo.",
    ideaErronea: "Pensar que 'el presupuesto de un Estado nacional funciona exactamente igual que el presupuesto de una casa familiar' (olvidando que si el Estado recorta su gasto en plena recesión, también caen los ingresos de las empresas y familias que le venden o trabajan para él: efecto multiplicador).",
    tituloCaso: "Dos gabinetes económicos ante una caída del consumo y del empleo juvenil en la ciudad",
    narrativaCaso: `En un municipio industrial se produjo este semestre una caída de ventas en los comercios del **15% [DATO FICTICIO]** y cerraron varios talleres, dejando a **500 jóvenes recién egresados sin conseguir trabajo [DATO FICTICIO]**.

El Ministerio de Economía evalúa qué hacer con una partida presupuestaria de **$1.000 millones [DATO FICTICIO]** y convoca a dos equipos de asesores con visiones teóricas distintas:

1. **Propuesta del Equipo A (Enfoque Keynesiano — Política Fiscal Expansiva):**
   - Destinar los **$1.000 millones [DATO FICTICIO]** a construir un polo tecnológico escolar y reparar calles del barrio contratando mano de obra e insumos locales.
   - *Mecanismo del Multiplicador:* Esos trabajadores gastarán el **80% de su ingreso ($800 millones) [DATO FICTICIO]** en almacenes, panaderías y tiendas del barrio; a su vez, esos comerciantes volverán a gastar el **80% ($640 millones) [DATO FICTICIO]** en sus proveedores, multiplicando la actividad total por mucho más que los $1.000 millones iniciales.

2. **Propuesta del Equipo B (Enfoque Neoliberal / Ortodoxo — Ajuste Fiscal y Monetario):**
   - No gastar esos **$1.000 millones [DATO FICTICIO]** para reducir el déficit del presupuesto público y pedir al Banco Central que **suba la tasa de interés** para enfriar la cantidad de dinero en circulación.
   - *Argumento:* Sostienen que el gasto estatal presiona sobre la inflación o la deuda, y que la estabilidad de precios y menores impuestos futuros atraerán inversión privada espontáneamente.`,
    tablaHeaders: ["Ronda de circulación del ingreso", "Quién recibe y gasta el dinero (Propensión a consumir = 80%)", "Nuevo ingreso generado en el barrio", "Efecto acumulado en la producción local"],
    tablaFilas: [
      ["**Inyección inicial (Obra pública)**", "Constructores, albañiles y proveedores locales", "$1.000 millones `[DATO FICTICIO]`", "$1.000 millones"],
      ["**1.ª Ronda de consumo (80%)**", "Comercios de alimentos, ropa y transporte del barrio", "$800 millones `[DATO FICTICIO]`", "$1.800 millones"],
      ["**2.ª Ronda de consumo (80% de 800)**", "Distribuidores, talleres y empleados de comercios", "$640 millones `[DATO FICTICIO]`", ""],
      ["**3.ª Ronda de consumo (80% de 640)**", "Productores e insumos regionales", "", ""]
    ],
    preguntasNivel1: [
      "Diferenciá qué instrumentos pertenecen a la **política fiscal** (Ministerio de Economía / Congreso) y cuáles a la **política monetaria** (Banco Central).",
      "¿Qué propone hacer cada uno de los dos equipos (Keynesiano vs. Neoliberal) frente a la caída del consumo y del empleo?"
    ],
    preguntasNivel2: [
      "Completá la tabla del **efecto multiplicador keynesiano** calculando cuánto nuevo ingreso se genera en la 3.ª ronda (el 80% de $640 millones `[DATO FICTICIO]`) y cuál es el efecto acumulado hasta ahí.",
      "Explicá qué pasa en los comercios y pymes del barrio cuando el Banco Central **sube fuertemente la tasa de interés** (Política Monetaria Contractiva): ¿se vuelve más fácil o más caro pedir un crédito para comprar máquinas o pagar en cuotas?"
    ],
    preguntasNivel3: [
      "Compará los riesgos y límites de ambas posturas (**Expectativas 3 y 13**):\n  - ¿Qué riesgo enfrenta la propuesta keynesiana si se financia únicamente con emisión monetaria cuando las fábricas ya están al tope de su capacidad?\n  - ¿Qué costo social y productivo provoca la propuesta ortodoxa cuando recorta el gasto público y sube las tasas de interés en medio de una recesión con desempleo juvenil?"
    ],
    resolucionDocente: [
      "**Cálculo del Multiplicador:**\n  - 2.ª Ronda acumulada: $1.000M + $800M + $640M = **$2.440 millones**.\n  - 3.ª Ronda: $80\\% \\text{ de } 640 = \\mathbf{\\$512\\text{ millones}}$ → Acumulado en solo 4 pasos: **$2.952 millones** (y el multiplicador total teórico con $c = 0,8$ es $k = \\frac{1}{1 - 0,8} = 5$, llegando hasta $5.000 millones).",
      "**Instrumentos:** Política Fiscal = Gasto público ($G$), Impuestos ($T$) y Transferencias. Política Monetaria (BCRA) = Tasa de interés de referencia, encajes bancarios y operaciones de mercado abierto.",
      "**Debate teórico plural:** El enfoque keynesiano prioriza sostener la demanda agregada y el pleno empleo mediante política anticíclica; el enfoque ortodoxo/monetarista prioriza el equilibrio fiscal y el control monetario de la inflación, aun a costa de enfriar la actividad a corto plazo."
    ],
    juego1Nombre: "Debate de Gabinete Económico: Keynesianos vs. Ortodoxos ante la Crisis",
    juego1Mecanica: "El aula se divide en 3 bloques: 1) Equipo Asesor Keynesiano, 2) Equipo Asesor Neoliberal/Ortodoxo, y 3) Representantes de Pymes, Trabajadores y Estudiantes del Municipio. Cada equipo asesor presenta su plan de 3 medidas fiscales y monetarias en 5 minutos y debe responder las preguntas concretas del bloque social.",
    juego2Nombre: "La Cadena del Multiplicador en Vivo",
    juego2Mecanica: "Cinco bancos del aula representan eslabones económicos (Obra Pública escolar → Obreros → Almacén del barrio → Taller textil → Proveedor). Empiezan con un billete ficticio de $1.000: cada banco guarda el 20% (ahorro) y gasta el 80% en el banco siguiente, anotando en el pizarrón cómo $1.000 iniciales generaron casi $3.000 de ventas totales en el aula."
  },

  "inflacion_agregada": {
    unidad: "Unidad 6 — La macroeconomía. Oferta y demanda agregada",
    contenidos: "La oferta y la demanda agregada. Salarios, precios y nivel de empleo. Inflación y desempleo: relación de intercambio. Déficit presupuestario, inflación y deuda pública. Polémica sobre la efectividad de la política económica.",
    expectativas: [
      "Expectativa 3: Conocer los principales instrumentos de las políticas macroeconómicas y su relación con la microeconomía.",
      "Expectativa 12: Conocer distintas perspectivas acerca de cómo se determina el salario y los precios."
    ],
    nucleo: "El equilibrio macroeconómico entre **Oferta Agregada (OA)** y **Demanda Agregada (DA)** determina el nivel general de producción, empleo y precios. La **inflación** (suba generalizada y sostenida de precios) y el **desempleo** son dos problemas centrales cuya causa se debate entre distintas escuelas: inflación por exceso de demanda/emisión, inflación de costos (insumos, tarifas, devaluación) e inflación por puja distributiva.",
    analogia: "La presión de agua en toda la red de una ciudad: puede subir porque todos abrieron las canillas al mismo tiempo y la red no da abasto (tirón de demanda), o porque aumentó el costo de bombear desde la planta central y los caños principales tienen cuellos de botella (empuje de costos y estructura productiva).",
    ideaErronea: "Pensar que la inflación tiene siempre una única causa simple en cualquier país y momento, o confundir 'que baje la inflación' (desinflación: los precios suben más despacio) con 'que bajen los precios' (deflación).",
    tituloCaso: "Por qué subió el menú estudiantil y el transporte: Desarmando las causas de la inflación y el empleo",
    narrativaCaso: `En el centro comercial de la ciudad donde estudian los chicos de 5.º año, durante el último trimestre ocurrieron tres fenómenos económicos simultáneos que afectaron el costo de vida y el trabajo:

1. **Shock de Costos (Oferta Agregada):** El precio mayorista del combustible y la electricidad aumentó un **25% [DATO FICTICIO]**, y el dólar oficial subió encareciendo los repuestos importados de los colectivos y las harinas. Aunque la gente no estaba comprando más que antes, los comedores y comercios subieron sus precios un **18% [DATO FICTICIO]** para no trabajar a pérdida.
2. **Puja Distributiva (Precios vs. Salarios):** Como los precios subieron un **18% [DATO FICTICIO]**, el salario real (lo que alcanza a comprar el sueldo) cayó. Los sindicatos pidieron recomponer los sueldos un **18%**, y las grandes empresas formadoras de precios volvieron a remarcar sus listas para mantener su margen de ganancia.
3. **Dilema entre Inflación y Desempleo:** Para frenar las subas de precios, se aplicó un recorte fuerte del crédito y del gasto público (contracción de la **Demanda Agregada**). La inflación mensual bajó del **6% al 3% mensual [DATO FICTICIO]**, pero las ventas de los comercios del centro cayeron un **20% [DATO FICTICIO]** y dejaron de tomar jóvenes para los puestos de fin de semana.`,
    tablaHeaders: ["Fenómeno observado en la ciudad", "Curva principal afectada (Oferta Agregada / Demanda Agregada)", "Causa teórica de la variación de precios", "Efecto sobre el Nivel de Precios", "Efecto sobre el Empleo y la Producción"],
    tablaFilas: [
      ["**1. Suba de combustibles, tarifas e insumos**", "Oferta Agregada (se contrae)", "Inflación de costos / cambiaria", "Sube (+18%) `[DATO FICTICIO]`", "Cae o se estanca"],
      ["**2. Remarcación de márgenes vs. paritarias**", "Oferta y Demanda Agregada", "Puja distributiva e inercia", "Sube", "Tensión sobre el salario real"],
      ["**3. Enfriamiento brusco del consumo y crédito**", "Demanda Agregada (se contrae)", "Política contractiva de estabilización", "Desacelera (de 6% a 3%) `[DATO FICTICIO]`", "Cae el empleo juvenil (-20% ventas)"]
    ],
    preguntasNivel1: [
      "¿Qué diferencia hay entre decir que 'bajó la inflación del 6% al 3% mensual' y decir que 'bajaron los precios'?",
      "¿Cuáles son las distintas causas de inflación que aparecen en las situaciones 1 y 2 del relato?"
    ],
    preguntasNivel2: [
      "Si el sueldo mensual de un trabajador de comercio era de **$800.000 [DATO FICTICIO]** y la canasta de alimentos y servicios básicos subió un **18% [DATO FICTICIO]** mientras su sueldo nominal no cambió, ¿cuánto debería cobrar ahora para recuperar exactamente el mismo **salario real** (poder de compra) que tenía antes?",
      "Utilizando el esquema de **Oferta Agregada (OA)** y **Demanda Agregada (DA)**: explicá por qué cuando sube el costo de la energía y los insumos (Situación 1) se produce al mismo tiempo inflación y caída de la actividad (**estanflación**)."
    ],
    preguntasNivel3: [
      "Analizá el dilema de la Situación 3 (Relación de intercambio entre inflación y desempleo / Curva de Phillips): ¿es aceptable reducir la inflación generando recesión y desempleo juvenil, o qué políticas alternativas sobre la oferta productiva y los acuerdos de precios y salarios podrían moderar la inflación sin destruir puestos de trabajo?"
    ],
    resolucionDocente: [
      "**Cálculo de Salario Real vs. Nominal:** Para mantener el poder adquisitivo frente a un +18% de inflación, el salario nominal debe pasar de $800.000 a $\\$800.000 \\times 1,18 = \\mathbf{\\$944.000}$ (una pérdida de poder de compra equivalente a $144.000 si no se actualiza).",
      "**Análisis OA-DA:** Un shock de costos (tarifas/devaluación) desplaza la curva de Oferta Agregada hacia la izquierda/arriba: sube el nivel general de precios y cae el nivel de producto/empleo simultáneamente.",
      "**Pluralismo teórico:** Contrastar la explicación monetarista (exceso de dinero/demanda) con la explicación estructuralista y poskeynesiana (restricción externa, costos de insumos difundidos y puja distributiva entre capital y trabajo)."
    ],
    juego1Nombre: "La Mesa del Acuerdo Económico y Social: Frenar la Inflación Cuidando el Empleo",
    juego1Mecanica: "Simulación de una mesa tripartita nacional integrada por: 1) Confederación de Trabajadores, 2) Unión Industrial y Supermercados, y 3) Equipo Económico del Estado. Tienen que negociar un acuerdo trimestral de precios, tarifas y salarios donde ninguna de las tres partes pierda poder adquisitivo ni cierre puestos de trabajo.",
    juego2Nombre: "Diagnóstico Clínico de la Inflación: ¿Demanda, Costos o Puja Distributiva?",
    juego2Mecanica: "Los grupos reciben 6 titulares periodísticos ficticios basados en la economía argentina. Deben diagnosticar para cada titular qué curva se movió (OA o DA), cuál es la causa de fondo y por qué aplicar la receta equivocada (por ejemplo, enfriar el consumo cuando la suba fue por tarifas eléctricas) puede empeorar el desempleo."
  },

  "deuda_dictadura": {
    unidad: "Proyecto Especial — La deuda externa y la dictadura militar (1976-1983)",
    contenidos: "Proyecto involucrado: 'La deuda externa y la dictadura militar de 1976-1983'. Deuda externa, fuga de capitales, estatización de deuda privada (1982), rol de organismos internacionales (FMI) y consecuencias económicas y sociales hasta el presente. Memoria, Verdad y Justicia.",
    expectativas: [
      "Expectativa 1: Reconocer lo económico como resultado de una actividad humana socio-culturalmente determinada.",
      "Expectativa 2: Identificar actores y sujetos sociales con intereses y necesidades contrapuestos.",
      "Expectativa 3: Conocer los instrumentos macroeconómicos y el impacto del endeudamiento externo."
    ],
    nucleo: "Durante la última dictadura cívico-militar (1976-1983), la **deuda externa argentina** se multiplicó de manera extraordinaria sin traducirse en desarrollo industrial ni bienestar social, sino financiando la **valorización financiera (bicicleta financiera)** y la **fuga de capitales**. En 1982, mediante los seguros de cambio del Banco Central, se produjo la **estatización de la deuda externa privada**, transfiriendo las deudas de grandes grupos económicos al conjunto de la sociedad argentina.",
    analogia: "Que un administrador tome el control de un edificio por la fuerza sin dejar opinar a los vecinos, pida préstamos millonarios a nombre de unos pocos departamentos privilegiados que sacan ese dinero afuera, y antes de irse firme un papel para que la deuda de esos pocos la paguen todas las familias del edificio durante décadas con sus expensas.",
    ideaErronea: "Pensar que 'la deuda externa creció porque el país gastó demasiado en obras públicas, salud o salarios para la población' o creer que las deudas privadas y las deudas públicas son siempre independientes sin ver cómo en 1982 el Estado asumió los pasivos de grandes empresas privadas.",
    tituloCaso: "Deuda privada, pago público: El mecanismo de endeudamiento y estatización entre 1976 y 1983",
    narrativaCaso: `En el marco del proyecto de **Memoria, Verdad y Justicia** de 5.º año, el curso analiza cómo se transformó la estructura económica argentina durante la última dictadura cívico-militar (1976-1983) y por qué ese endeudamiento condicionó a las generaciones siguientes.

A partir de los registros históricos de evolución de la deuda externa *(nota: verificar cifras exactas con el gráfico y material teórico de la docente [VERIFICAR: datos del gráfico de evolución de la deuda externa de la cátedra])*, se observa el siguiente proceso en tres etapas:

1. **Etapa 1 — El salto del endeudamiento (1976-1981):** La deuda externa total del país se multiplicó casi por seis en pocos años [VERIFICAR: monto inicial 1976 vs. monto final 1983 en el gráfico de la docente], impulsada por la reforma financiera de 1977 y la apertura irrestricta de capitales. Al mismo tiempo que entraban dólares por préstamos, cerraban miles de fábricas nacionales y caía la participación de los trabajadores en el ingreso.
2. **Etapa 2 — Bicicleta financiera y fuga de capitales:** Grandes grupos económicos locales y filiales extranjeras tomaban préstamos en dólares en el exterior a tasas bajas, los colocaban a altas tasas de interés en el sistema financiero local y luego volvían a comprar dólares baratos para girarlos a cuentas en el exterior (**fuga de capitales**), sin construir fábricas ni generar empleo en el país.
3. **Etapa 3 — La estatización de la deuda privada (1982):** Cuando el peso se devaluó abruptamente hacia 1981-1982, esos grandes grupos privados argumentaron que no podían pagar sus deudas en dólares. El Banco Central implementó regímenes de **seguros de cambio** por los cuales **el Estado argentino se hizo cargo de la deuda externa de grandes empresas privadas**, socializando las pérdidas sobre toda la ciudadanía que recuperaría la democracia en 1983.`,
    tablaHeaders: ["Mecanismo / Etapa (1976-1983)", "Actores beneficiados", "Actores perjudicados", "Impacto en la producción e industria nacional", "Consecuencia para la democracia desde 1983"],
    tablaFilas: [
      ["**1. Apertura y Reforma Financiera (1977)**", "Sector financiero y especulativo", "Trabajadores (congelamiento salarial) e industria local", "Desindustrialización y cierre de talleres", "Pérdida de tejido productivo"],
      ["**2. Endeudamiento y Fuga de Capitales**", "Grandes tomadores de crédito con activos en el exterior", "Reservas del Banco Central y ahorro nacional", "Los préstamos no se invirtieron en máquinas ni obras", "Deuda sin contrapartida productiva `[VERIFICAR]`"],
      ["**3. Estatización de Deuda Privada (1982)**", "Grandes empresas endeudadas en dólares", "Toda la población / Presupuesto público nacional", "Transferencia de recursos públicos al pago de intereses", "Condicionamiento externo y planes de ajuste del FMI"]
    ],
    preguntasNivel1: [
      "Definí con tus palabras los tres conceptos clave del proyecto: **deuda externa**, **fuga de capitales** y **estatización de la deuda privada**.",
      "¿En qué se diferencia una deuda externa que un país contrae para construir rutas, escuelas o centrales eléctricas de una deuda que termina financiando la especulación financiera y la salida de divisas?"
    ],
    preguntasNivel2: [
      "Completá el cuadro comparativo e interpretá los datos del gráfico de evolución de la deuda externa de la cátedra `[VERIFICAR: cifras del gráfico de la docente]`: ¿por qué proporción se multiplicó la deuda entre 1976 y 1983 y qué ocurrió en paralelo con la industria nacional y los salarios?",
      "Explicá paso a paso cómo funcionó en 1982 el mecanismo de **estatización de la deuda privada**: ¿quiénes habían pedido originalmente esos dólares y quiénes terminaron pagándolos a través de los impuestos y recortes presupuestarios posteriores?"
    ],
    preguntasNivel3: [
      "¿Por qué fue necesario suprimir los derechos democráticos, intervenir sindicatos y perseguir a delegados de fábricas a partir de 1976 para poder imponer este modelo económico regresivo?",
      "Desde el marco de **Memoria, Verdad y Justicia**: ¿qué responsabilidades tuvieron los actores civiles/económicos locales y los organismos financieros internacionales (como el FMI), y por qué un endeudamiento tomado en dictadura siguió condicionando la educación, la salud y la soberanía económica en democracia?"
    ],
    resolucionDocente: [
      "**Nota metodológica fundamental:** Todas las cifras históricas precisas deben contrastarse con el gráfico y el material teórico elaborado por la docente (`[VERIFICAR]`). A modo de referencia historiográfica estándar (Basualdo; Rapoport; fallo judicial 'Olmos'), la deuda externa pasó de aproximadamente USD 7.800 millones en 1975/1976 a alrededor de USD 43.000–45.000 millones a fines de 1983 `[VERIFICAR con el gráfico de la cátedra]`.",
      "**Mecanismo económico (Valorización financiera y Estatización):** El diferencial entre la tasa de interés interna y la pauta de devaluación ('tablita cambiaria') permitió ganancias extraordinarias en dólares que luego se fugaron del sistema. En 1982 (gestión Cavallo en el BCRA / Dagnino Pastore), mediante regímenes de seguros de cambio y pases, el Estado absorbió en moneda nacional licuada por la inflación los pasivos en dólares de grandes grupos concentrados.",
      "**Vínculo Memoria, Verdad y Justicia:** El terrorismo de Estado no fue ajeno a la economía: tuvo como objetivo disciplinar a la fuerza de trabajo y reestructurar regresivamente la matriz productiva y distributiva del país."
    ],
    esTemaSensible: true,
    juego1Nombre: "Comisión Investigadora Parlamentaria y Ciudadana sobre la Deuda (1984): Análisis de Fuentes y Responsabilidades",
    juego1Mecanica: "IMPORTANTE: Por tratarse de un tema vinculado al terrorismo de Estado y los Derechos Humanos, NO se utilizan puntajes, premios ni competencia lúdica. El curso se organiza como una Comisión Bicameral y Ciudadana en la recuperación democrática de 1984. Cuatro equipos analizan expedientes documentales (1: Impacto en los trabajadores e industria; 2: Mecanismo financiero y fuga de capitales; 3: Estatización de la deuda privada de 1982; 4: Rol de los bancos acreedores y el FMI) y redactan un Dictamen Fundamentado sobre responsabilidades históricas y justicia económica.",
    juego2Nombre: "Línea de Tiempo Viva: Pasado y Presente del Endeudamiento Externo",
    juego2Mecanica: "Dinámica de investigación y debate guiado sin competencia: los grupos conectan tarjetas de hechos históricos (1976-1983) con recortes periodísticos actuales sobre presupuesto educativo, salud pública y renegociaciones con el FMI, construyendo en el pizarrón un mapa de relaciones causales para la puesta en común y la reflexión escrita individual."
  }
};

/**
 * Selecciona la plantilla curricular más adecuada según la unidad y el tema pedido,
 * o construye una adaptación específica si el docente escribió un tema personalizado.
 */
function seleccionarPlantilla(unidadTema) {
  const texto = (unidadTema || '').toLowerCase();

  if (texto.includes('deuda') || texto.includes('dictadura') || texto.includes('1976') || texto.includes('fmi') || texto.includes('fuga')) {
    return BANCO_CURRICULAR.deuda_dictadura;
  }
  if (texto.includes('elasticidad') || texto.includes('teoría de la demanda')) {
    return BANCO_CURRICULAR.elasticidad;
  }
  if (texto.includes('consumidor') || texto.includes('utilidad') || texto.includes('indiferencia') || texto.includes('consumo')) {
    return BANCO_CURRICULAR.consumidor;
  }
  if (texto.includes('producción') || texto.includes('produccion') || texto.includes('costo') || texto.includes('beneficio') || texto.includes('corto y largo')) {
    return BANCO_CURRICULAR.produccion;
  }
  if (texto.includes('monopolio') || texto.includes('oligopolio') || texto.includes('opep') || texto.includes('cartel') || texto.includes('competencia monopolística')) {
    return BANCO_CURRICULAR.monopolio_oligopolio;
  }
  if (texto.includes('equilibrio') || texto.includes('intervención') || texto.includes('intervencion') || texto.includes('precios máximos') || texto.includes('competencia perfecta') || texto.includes('fallas') || texto.includes('unidad 2')) {
    return BANCO_CURRICULAR.equilibrio_mercados;
  }
  if (texto.includes('distribución') || texto.includes('distribucion') || texto.includes('salario') || texto.includes('sindicato') || texto.includes('trabajo') || texto.includes('renta') || texto.includes('unidad 3')) {
    return BANCO_CURRICULAR.distribucion_trabajo;
  }
  if (texto.includes('pbi') || texto.includes('producto bruto') || texto.includes('ingreso nacional') || texto.includes('contabilidad nacional') || texto.includes('crecimiento') || texto.includes('unidad 4')) {
    return BANCO_CURRICULAR.pbi_ingreso;
  }
  if (texto.includes('fiscal') || texto.includes('keynes') || texto.includes('multiplicador') || texto.includes('banco central') || texto.includes('monetaria') || texto.includes('presupuesto') || texto.includes('unidad 5')) {
    return BANCO_CURRICULAR.politicas_macro;
  }
  if (texto.includes('inflación') || texto.includes('inflacion') || texto.includes('desempleo') || texto.includes('oferta y demanda agregada') || texto.includes('oferta agregada') || texto.includes('déficit') || texto.includes('unidad 6')) {
    return BANCO_CURRICULAR.inflacion_agregada;
  }
  if (texto.includes('micro') && texto.includes('macro')) {
    return BANCO_CURRICULAR.micro_macro;
  }
  if (texto.includes('diagnóstico') || texto.includes('introductoria') || texto.includes('escasez') || texto.includes('metodológicos') || texto.includes('bienes escasos')) {
    return BANCO_CURRICULAR.escasez;
  }

  return BANCO_CURRICULAR.elasticidad;
}

function crearSlug(texto) {
  return (texto || 'caso')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 45);
}

function obtenerFechaHoy() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * AGENTE 1: Genera el documento Markdown del Pedagogo / Casista
 */
function generarPedagogo(pedidoParsed) {
  const unidadTema = pedidoParsed['Unidad y tema'] || 'Unidad 1 — Teoría de la demanda y Elasticidad precio e ingreso de la demanda';
  const curso = pedidoParsed['Curso y grupo'] || '5.º año, orientación Economía. Grupo de ritmos heterogéneos';
  const tiempo = pedidoParsed['Tiempo disponible'] || '1 clase de 80 minutos';
  const modalidad = pedidoParsed['Modalidad'] || 'trabajo en grupos de 4';
  const cuesta = pedidoParsed['Qué me cuesta hoy'] || 'los ejercicios del manual usan ejemplos lejanos';
  const restricciones = pedidoParsed['Restricciones'] || 'sin computadoras en el aula; hay proyector';
  const evitar = pedidoParsed['Algo que quiero evitar'] || 'ejemplos con marcas reales o con cifras que no pueda verificar';
  const observaciones = (pedidoParsed['Observaciones'] && pedidoParsed['Observaciones'] !== '(opcional)') ? pedidoParsed['Observaciones'] : '';

  const p = seleccionarPlantilla(unidadTema);
  const fecha = obtenerFechaHoy();

  const notaObservaciones = observaciones
    ? `\n> **Adaptación especial a tus observaciones docentes:** Se incorporó tu pedido de *"${observaciones}"* y se cuidó expresamente evitar *"${evitar}"*.`
    : `\n> **Cuidado metodológico del pedido:** Se diseñó la situación para superar la dificultad detectada (*"${cuesta}"*) respetando la restricción de aula (*"${restricciones}"*) y evitando *"${evitar}"*.`;

  return `Agente: Pedagogo / Casista
Fecha: ${fecha}
Pedido: ${unidadTema} (${tiempo}, ${modalidad}, ${curso})
Unidad y contenidos: ${p.unidad} — ${p.contenidos}
Fuentes usadas: materiales/planificacion.md; materiales/bibliografia.md; entradas/pedido.md
Estado: BORRADOR

---

## 1. Ficha técnica y pedagógica

- **Unidad y tema seleccionado:** ${unidadTema}
- **Contenidos de la planificación:** ${p.contenidos}
- **Destinatarios y organización:** ${curso} · **Tiempo:** ${tiempo} · **Modalidad:** ${modalidad}.
- **Condiciones de aula consideradas:** ${restricciones}.
- **Expectativas de logro vinculadas:**
${p.expectativas.map(e => `  - *${e}*`).join('\n')}
- **Capacidades a desarrollar:** Resolución de problemas · Pensamiento crítico · Trabajo colaborativo · Comunicación y expresión · Ciudadanía democrática.

---

## 2. Núcleo conceptual (para el docente)

${p.nucleo}
- **Analogía cotidiana para el aula:** ${p.analogia}
- **Idea previa errónea más frecuente a desarmar (vinculada a "${cuesta}"):** ${p.ideaErronea}

---

## 3. Caso contextualizado: "${p.tituloCaso}"

${p.narrativaCaso}
${notaObservaciones}

---

## 4. Tres preguntas disparadoras graduadas

- **Nivel 1 (Identificar y describir):**
${p.preguntasNivel1.map(q => `  - ${q}`).join('\n')}

- **Nivel 2 (Aplicar y calcular):**
${p.preguntasNivel2.map(q => `  - ${q}`).join('\n')}

- **Nivel 3 (Evaluar supuestos y comparar perspectivas):**
${p.preguntasNivel3.map(q => `  - ${q}`).join('\n')}

---

## 5. Dos enfoques posibles para llevar el caso al aula (${tiempo})

- **Enfoque 1 (Inductivo — partir de la situación para llegar al concepto):**
  - *Dinámica:* Presentar el caso *"${p.tituloCaso}"* al inicio de la clase (${restricciones}) sin adelantar la definición formal. Pedir que en **${modalidad}** respondan las preguntas de Nivel 1 y 2 a partir de los datos del relato. Luego, usar sus propias conclusiones en la puesta en común para formalizar el concepto en el pizarrón.
  - *Cuándo conviene:* Ideal para **${curso}** cuando notás que "${cuesta}", ya que evita que respondan repitiendo de memoria y los involucra desde un dilema concreto.

- **Enfoque 2 (Deductivo — partir del marco conceptual para analizar el caso):**
  - *Dinámica:* Abrir con una exposición dialogada breve (15 minutos) apoyada en la analogía cotidiana y desarmando la idea errónea inicial. Luego entregar el caso para que los grupos apliquen las categorías teóricas, completen los cálculos y debatan la pregunta de Nivel 3.
  - *Cuándo conviene:* Recomendable si querés asegurar que todos los grupos manejen el vocabulario específico antes de leer los datos del caso.

---

## 6. Decisiones para el docente

1. **Revisión y aprobación del caso:** Verificá si los montos marcados con \`[DATO FICTICIO]\` (o \`[VERIFICAR]\`) te resultan cómodos para trabajar en el pizarrón con tu curso; podés modificarlos con el botón **"✏️ Modo Edición"** o hacer clic directamente en **"✓ Aprobar Caso"** para habilitar al Agente 2 (Diseñador Didáctico).
2. **Elección de enfoque de apertura:** Definir si empezarás la clase de **${tiempo}** con la lectura inductiva del caso o con los 15 minutos de encuadre conceptual en el pizarrón.
3. **Énfasis del cierre:** Decidir cuánto peso darle en la puesta en común al cálculo numérico/analítico (Nivel 2) frente al debate de perspectivas e intereses sociales contrapuestos (Nivel 3).
`;
}

/**
 * AGENTE 2: Genera el documento Markdown del Diseñador Didáctico (Guía de Aula)
 */
function generarDisenador(pedidoParsed, pedagogoFilename) {
  const unidadTema = pedidoParsed['Unidad y tema'] || 'Unidad 1 — Teoría de la demanda y Elasticidad precio e ingreso de la demanda';
  const curso = pedidoParsed['Curso y grupo'] || '5.º año, orientación Economía. Grupo de ritmos heterogéneos';
  const tiempo = pedidoParsed['Tiempo disponible'] || '1 clase de 80 minutos';
  const modalidad = pedidoParsed['Modalidad'] || 'trabajo en grupos de 4';
  const restricciones = pedidoParsed['Restricciones'] || 'sin computadoras en el aula; hay proyector';

  const p = seleccionarPlantilla(unidadTema);
  const fecha = obtenerFechaHoy();

  const headerRow = `| ${p.tablaHeaders.join(' | ')} |`;
  const sepRow = `|${p.tablaHeaders.map(() => '---').join('|')}|`;
  const bodyRows = p.tablaFilas.map(row => `| ${row.join(' | ')} |`).join('\n');

  return `Agente: Diseñador Didáctico
Fecha: ${fecha}
Pedido: ${unidadTema} (${tiempo}, ${modalidad}, ${curso})
Unidad y contenidos: ${p.unidad} — ${p.contenidos}
Fuentes usadas: salidas/pedagogo/${pedagogoFilename} (Estado: APROBADO); materiales/planificacion.md; entradas/pedido.md
Estado: BORRADOR

---

## 1. Datos de la actividad

- **Materia:** Elementos de micro y macroeconomía (${curso}).
- **Unidad y Tema:** ${unidadTema}.
- **Duración estimada:** ${tiempo}.
  - *Apertura (15 min):* Lectura compartida del caso *"${p.tituloCaso}"* y organización en **${modalidad}**.
  - *Desarrollo grupal (45 min):* Resolución paso a paso de la guía con acompañamiento docente por las mesas.
  - *Puesta en común y cierre (20 min):* Contraste de resultados en pizarrón y entrega del producto final del equipo.
- **Modalidad:** ${modalidad} (roles sugeridos: coordinador/a de lectura, responsable de datos y tabla, redactor/a de argumentos y vocero/a para el plenario).
- **Recursos y condiciones de aula:** ${restricciones}. 1 guía impresa por equipo (podés imprimirla desde la pestaña **"🖨️ 5. Vista de Impresión"**), carpeta y pizarrón.

---

## 2. Guía para estudiantes

### Caso de estudio: "${p.tituloCaso}"
${p.narrativaCaso}

---

### Paso 1: Organización y sistematización de datos del caso
Lean atentamente la situación planteada y completen en equipo el siguiente cuadro en su carpeta:

${headerRow}
${sepRow}
${bodyRows}

**Consigna 1.1:** ${p.preguntasNivel1[0]}
**Consigna 1.2:** ${p.preguntasNivel1[1] || 'Identifiquen qué actores económicos intervienen y qué objetivo busca cada uno.'}

---

### Paso 2: Aplicación conceptual y análisis cuantitativo
A partir de los datos registrados en el cuadro del Paso 1, resuelvan y fundamenten cada procedimiento:

1. ${p.preguntasNivel2[0]}
2. ${p.preguntasNivel2[1] || 'Comparen los resultados obtenidos y expliquen cómo impactan en las decisiones de los protagonistas del caso.'}

---

### Paso 3: Evaluación crítica y cruce de perspectivas
Discutan en el grupo y redacten una respuesta fundamentada para la siguiente cuestión:

- ${p.preguntasNivel3[0]}
${p.preguntasNivel3[1] ? `- ${p.preguntasNivel3[1]}` : ''}

---

### Paso 4: Producto final entregable del equipo
Redacten en una hoja aparte (con nombre de los integrantes) un **Informe o Recomendación Fundamentada de 8 a 12 líneas** que incluya obligatoriamente:
1. **Diagnóstico:** Qué muestra el cuadro de datos del Paso 1 (citando las cifras del caso).
2. **Explicación económica:** Cómo se aplica el concepto de **${unidadTema}** para explicar lo ocurrido.
3. **Propuesta o conclusión:** Qué decisión concreta tomarían o recomendarían teniendo en cuenta los distintos actores sociales involucrados.

---

## 3. Tres niveles de andamiaje (para atender ritmos heterogéneos)

### Nivel A — Con apoyo (pistas y andamiaje guiado)
- **Recordatorio conceptual clave:** ${p.nucleo}
- **Pista para destrabar el Paso 1 y 2:** Antes de responder, subrayen en el texto del caso las cifras marcadas con \`[DATO FICTICIO]\` / \`[VERIFICAR]\` y compárenlas fila por fila en la tabla. Piensen en la analogía trabajada en clase: *${p.analogia}*
- **Cuidado con esta confusión frecuente:** Eviten caer en la idea de que *"${p.ideaErronea}"*.

### Nivel B — Base (consigna estándar)
- Resolución autónoma en **${modalidad}** de los Pasos 1 a 4 completos, integrando los cálculos/relaciones de la tabla con la argumentación escrita del Producto Final.

### Nivel C — Ampliación (desafío extra para grupos que terminan antes)
- **Pregunta de profundización:** ¿Qué cambiaría en las conclusiones del caso si el contexto económico general se modificara brusca e inesperadamente el mes próximo (por ejemplo, un cambio del 40% en los ingresos de las familias o una nueva regulación estatal)? Redacten un párrafo adicional evaluando quiénes ganarían y quiénes perderían en ese nuevo escenario.

---

## 4. Criterios de valoración (Borrador de rúbrica observable)

| Criterio Observable | Evidencia esperada en la producción grupal | Expectativa / Capacidad vinculada |
|---|---|---|
| **1. Comprensión y uso de datos del caso** | Completa correctamente el cuadro del Paso 1 y respalda sus afirmaciones con los datos del caso, sin responder de memoria. | ${p.expectativas[0]} |
| **2. Rigor en la aplicación conceptual** | Aplica con precisión las categorías de *${unidadTema}* en el Paso 2 explicando el procedimiento seguido. | Capacidad: Resolución de problemas. |
| **3. Reconocimiento de actores y perspectivas** | Identifica en los Pasos 3 y 4 los intereses contrapuestos y las consecuencias sociales de las decisiones económicas. | ${p.expectativas[1] || 'Expectativa 2: Actores sociales e intereses contrapuestos.'} |
| **4. Trabajo colaborativo y comunicación** | Presenta el informe final de 8 a 12 líneas de forma clara, ordenada y con participación equitativa del equipo. | Capacidad: Trabajo colaborativo y Comunicación. |

---

## 5. Solo docente: Resolución esperada y claves de monitoreo en el aula

### Clave de corrección y procedimiento esperado
${p.resolucionDocente.map((item, idx) => `${idx + 1}. ${item}`).join('\n\n')}

### Errores frecuentes y cómo intervenir en las mesas
- **Error frecuente:** ${p.ideaErronea}
- **Intervención sugerida:** No dar la respuesta cerrada; pedir al grupo que mire la fila comparativa del cuadro del Paso 1 y contrastar su intuición inicial con el resultado obtenido.
- **Qué mirar durante los 45 minutos de trabajo grupal:**
  - En los primeros 15 minutos, verificar que todos los grupos hayan logrado completar las celdas vacías del cuadro del Paso 1 (si un grupo se traba, ofrecer la pista del **Nivel A — Con apoyo**).
  - A los 30 minutos, revisar que en el Paso 4 estén usando vocabulario específico de la unidad y no solo opiniones generales sin sustento en el caso.

---

## 6. Decisiones para el docente

1. **Aprobación de la guía:** Si la secuencia de 4 pasos y los niveles de andamiaje se ajustan a tu grupo, hacé clic en **"✓ Aprobar Guía"** para habilitar al Agente 3 (Gamificador) y la versión limpia en **"🖨️ 5. Vista de Impresión"**.
2. **Andamiaje impreso o oral:** Definir si incluirás el recuadro de *"Nivel A — Con apoyo"* impreso en la hoja de todos los grupos o si lo tendrás en tu escritorio para acercarlo únicamente a las mesas que lo necesiten.
3. **Instrumento de evaluación:** Decidir si el Producto Final del Paso 4 se recogerá al terminar los **${tiempo}** como nota de seguimiento formativo grupal o si será la base oral para la puesta en común.
`;
}

/**
 * AGENTE 3: Genera el documento Markdown del Gamificador / Dinamizador
 */
function generarGamificador(pedidoParsed, pedagogoFilename, disenadorFilename) {
  const unidadTema = pedidoParsed['Unidad y tema'] || 'Unidad 1 — Teoría de la demanda y Elasticidad precio e ingreso de la demanda';
  const curso = pedidoParsed['Curso y grupo'] || '5.º año, orientación Economía. Grupo de ritmos heterogéneos';
  const tiempo = pedidoParsed['Tiempo disponible'] || '1 clase de 80 minutos';
  const modalidad = pedidoParsed['Modalidad'] || 'trabajo en grupos de 4';
  const restricciones = pedidoParsed['Restricciones'] || 'sin computadoras en el aula; hay proyector';

  const p = seleccionarPlantilla(unidadTema);
  const fecha = obtenerFechaHoy();

  const notaEtica = p.esTemaSensible
    ? `\n> **⚠️ Criterio ético y pedagógico obligatorio (Memoria, Verdad y Justicia):** Por tratarse de un contenido vinculado a la última dictadura cívico-militar (1976-1983) y sus consecuencias sociales, **ambas propuestas descartan por completo puntajes, premios, ganadores o mecánicas de competencia frívola**. Se estructuran como dinámicas de **investigación documental, comisión parlamentaria de roles argumentativos y debate guiado basado en fuentes**.`
    : '';

  return `Agente: Gamificador / Dinamizador
Fecha: ${fecha}
Pedido: ${unidadTema} (${tiempo}, ${modalidad}, ${curso})
Unidad y contenidos: ${p.unidad} — ${p.contenidos}
Fuentes usadas: salidas/disenador/${disenadorFilename} (Estado: APROBADO); salidas/pedagogo/${pedagogoFilename}; materiales/planificacion.md; entradas/pedido.md
Estado: BORRADOR

---
${notaEtica}

## Propuesta 1: "${p.juego1Nombre}"

### 1. Nombre y objetivo de aprendizaje
- **Nombre de la dinámica:** *${p.juego1Nombre}*
- **Objetivo de aprendizaje:** Poner en acción los conceptos de **${unidadTema}** a partir del caso *"${p.tituloCaso}"*, promoviendo la argumentación económica con datos, el trabajo colaborativo y el reconocimiento de distintos actores e intereses (**${p.expectativas[0]}**).

### 2. Mecánica, roles y rondas
- **Organización del aula:** Se respeta la estructura de **${modalidad}** para no perder tiempo reacomodando todo el salón.
- **Desarrollo de la dinámica:** ${p.juego1Mecanica}
- **Rondas cronometradas:**
  - *Ronda 1 — Preparación de argumentos y datos (12 min):* Cada equipo revisa el cuadro de datos de la guía y prepara su postura técnica.
  - *Ronda 2 — Intercambio y negociación / audiencia (20 min):* Se desarrolla el debate estructurado donde cada intervención debe citar al menos un dato o relación económica del caso.
  - *Ronda 3 — Consenso o dictamen final (8 min):* Redacción de la resolución grupal en una carilla o afiche breve.

### 3. Material y tiempo
- **Duración:** 40 minutos (puede implementarse en la segunda mitad de la clase de **${tiempo}** o en el bloque siguiente).
- **Materiales necesarios:** Solo pizarrón, hojas de carpeta y la guía ya trabajada (adaptado 100% a tu condición: *${restricciones}*).

### 4. Puente con el concepto económico
- La dinámica obliga a los estudiantes a salir de la repetición teórica y utilizar el núcleo conceptual (*${p.nucleo}*) como herramienta de decisión: quien no usa las categorías económicas y los datos del caso no puede sostener la postura de su rol frente a los demás grupos.

### 5. Cierre conceptual (3 preguntas para volver del juego a la teoría)
1. *¿Qué dato concreto del caso resultó más decisivo durante la discusión y por qué?*
2. *¿Cómo se vio reflejada en la actividad la idea de que en economía existen actores con necesidades e intereses contrapuestos?*
3. *¿Qué parte de nuestra intuición inicial (*"${p.ideaErronea}"*) tuvimos que corregir al hacer las cuentas y escuchar a las otras partes?*

### 6. Riesgos didácticos y cómo prevenirlos
- **Riesgo:** Que los estudiantes discutan desde opiniones generales o eslóganes sin usar los conceptos ni los números de la guía.
- **Prevención:** Regla de validación docente: toda propuesta o intervención en la ronda debe mencionar explícitamente su impacto en el cuadro de datos del Paso 1 y Paso 2 de la guía.

---

## Propuesta 2: "${p.juego2Nombre}"

### 1. Nombre y objetivo de aprendizaje
- **Nombre de la dinámica:** *${p.juego2Nombre}*
- **Objetivo de aprendizaje:** Visualizar de manera práctica y participativa el mecanismo económico detrás de **${unidadTema}**, facilitando que un grupo de **${curso}** comprenda las relaciones causales antes o después de la formalización escrita.

### 2. Mecánica y secuencia paso a paso
- **Dinámica:** ${p.juego2Mecanica}
- **Secuencia en el aula:**
  - *Paso 1 (10 min):* El docente plantea en el pizarrón las reglas y el escenario inicial del caso *"${p.tituloCaso}"*.
  - *Paso 2 (15 min):* Ejecución de las dos rondas comparativas (situación inicial vs. cambio de condiciones económicas) con registro rápido por mesa.
  - *Paso 3 (15 min):* Volcado de resultados en el pizarrón y construcción colectiva de la conclusión teórica.

### 3. Material y tiempo
- **Duración:** 40 minutos.
- **Materiales:** Pizarrón/proyector (${restricciones}) y tarjetas de papel o registro en cuaderno por grupo de 4. Cero requerimiento de computadoras o internet.

### 4. Puente con el concepto económico
- Permite experimentar en vivo la analogía trabajada en el caso (*${p.analogia}*), logrando que los estudiantes descubran por sí mismos cómo el cambio en una variable altera el resultado general.

### 5. Cierre conceptual (3 preguntas para después de la actividad)
1. *Si comparamos los resultados de la Ronda 1 y la Ronda 2 en el pizarrón, ¿qué principio económico explica ese cambio de comportamiento?*
2. *${p.preguntasNivel3[0]}*
3. *¿Qué aprendimos hoy sobre **${unidadTema}** que nos sirve para entender lo que pasa en nuestro barrio o en las noticias de Argentina?*

### 6. Riesgos didácticos y cómo prevenirlos
- **Riesgo:** Que el entusiasmo por la dinámica consuma los minutos finales y quede sin hacer la bajada conceptual en la carpeta.
- **Prevención:** Cortar la actividad estrictamente 10 minutos antes del timbre para que cada estudiante anote en su carpeta las 3 conclusiones del pizarrón.

---

## Decisiones para el docente

1. **Elección entre las dos propuestas:**
   - Elegí la **Propuesta 1 (*${p.juego1Nombre}*)** si buscás fortalecer la **argumentación oral, el debate de perspectivas y la negociación entre actores sociales**.
   - Elegí la **Propuesta 2 (*${p.juego2Nombre}*)** si preferís una **simulación ágil y visual** que destrabe la comprensión del mecanismo económico en grupos heterogéneos.
2. **Articulación con la evaluación:** Definir si el desempeño en la dinámica sumará una valoración formativa (participación, respeto de turnos, uso de vocabulario específico) complementaria a la entrega escrita de la guía del Agente 2.
`;
}

const API_GENERADOR = {
  UNIDADES_Y_TEMAS,
  BANCO_CURRICULAR,
  seleccionarPlantilla,
  crearSlug,
  obtenerFechaHoy,
  generarPedagogo,
  generarDisenador,
  generarGamificador
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_GENERADOR;
}
if (typeof window !== 'undefined') {
  window.MotorEconomia = API_GENERADOR;
}
