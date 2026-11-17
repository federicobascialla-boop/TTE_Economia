/**
 * ARCHIVO 1: PLANIFICACIÓN DE LA CÁTEDRA (Espejo estructurado de materiales/planificacion.md)
 * Cátedra: Elementos de micro y macroeconomía (5.° año, Nivel Secundario — Orientación Economía)
 */

const PLANIFICACION_CATEDRA = {
  materia: "Elementos de micro y macroeconomía (5.º año, orientación Economía)",
  fuenteArchivo: "materiales/planificacion.md",
  capacidades: [
    "Resolución de problemas",
    "Pensamiento crítico",
    "Aprendizaje autónomo",
    "Trabajo colaborativo",
    "Comunicación y expresión",
    "Ciudadanía democrática"
  ],
  expectativasDeLogro: {
    1: "Expectativa 1: Reconocer lo económico, en sus versiones micro y macroeconómicas, como resultado de una actividad humana socio-culturalmente determinada.",
    2: "Expectativa 2: Identificar actores y sujetos sociales con intereses y necesidades contrapuestos dentro de los procesos productivos.",
    3: "Expectativa 3: Conocer los principales instrumentos de las políticas macroeconómicas y su relación con la microeconomía.",
    4: "Expectativa 4: Establecer relaciones entre el crecimiento y desarrollo de un país y el PBI.",
    5: "Expectativa 5: Conocer los diferentes tipos de monopolios y oligopolios e identificarlos en casos concretos, a escala nacional e internacional.",
    6: "Expectativa 6: Conocer el funcionamiento de una economía de mercado y otros sistemas económicos.",
    7: "Expectativa 7: Aplicar los conceptos de curva de oferta y demanda de mercado en casos ideales y concretos.",
    8: "Expectativa 8: Utilizar las nociones de elasticidad de demanda y oferta de mercado.",
    9: "Expectativa 9: Reconocer el efecto de diversas políticas de intervención en mercados competitivos.",
    10: "Expectativa 10: Comprender los conceptos de costo y renta económica y su interrelación.",
    11: "Expectativa 11: Conocer las propiedades de eficiencia en la asignación de recursos de una economía de mercado.",
    12: "Expectativa 12: Conocer distintas perspectivas acerca de cómo se determina el monto del salario en una economía de mercado.",
    13: "Expectativa 13: Conocer las relaciones entre las políticas de los bancos centrales y las políticas monetarias nacionales."
  },
  unidadesYTemas: {
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
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANIFICACION_CATEDRA };
}
if (typeof window !== 'undefined') {
  window.PLANIFICACION_CATEDRA = PLANIFICACION_CATEDRA;
}
