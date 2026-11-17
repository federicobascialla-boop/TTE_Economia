/**
 * ARCHIVO 2: BIBLIOGRAFÍA DEL DOCENTE (Espejo estructurado de materiales/bibliografia.md)
 * Regla de AGENTS.md: Los textos listados que no tengan el PDF/texto completo cargado en
 * materiales/bibliografia/ deben citarse aclarando "(sin contenido cargado, consultar)".
 */

const BIBLIOGRAFIA_CATEDRA = {
  fuenteArchivo: "materiales/bibliografia.md",
  reglaCitacion: "sin contenido cargado, consultar",
  catalogo: {
    1: "A y L editores — La economía mundial luego de la Primera Guerra",
    2: "Abel, A. y Bernanke, B. — Macroeconomía",
    3: "Angrisani — Economía",
    4: "Angrisani, Medina y Rubbo — Economía. Estudio de la micro y macroeconomía",
    5: "Beker, V. y Mochón Morcillo, F. — Economía. Elementos de micro y macroeconomía",
    6: "Beker, V. y Mochón Morcillo, F. — Economía. Principios y aplicaciones",
    7: "Callen, T. — ¿Qué es el producto interno bruto?",
    8: "Casani, F.; Llorente, A. y Pérez, E. — Economía",
    9: "Castillo, J. y Maas, P. — Economía",
    10: "CONADU — Desarrollo económico, clase trabajadora y luchas sociales en la Argentina contemporánea",
    11: "Court, E. — Aplicaciones para finanzas empresariales",
    12: "Eggers, F. — Economía",
    13: "Eggers, F. — Elementos de micro y macroeconomía",
    14: "Fau, M. — Principales teorías en economía",
    15: "García, A. — Micro y macroeconomía",
    16: "González Pascual, J. — Análisis de la empresa a través de su información económico-financiera",
    17: "Kliksberg, B. — ¿Cómo enfrentar la pobreza y la desigualdad?",
    18: "Loría, E. y Parkin, M. — Microeconomía",
    19: "Mankiw, N. G. — Principios de economía",
    20: "Nordhaus, W. y Samuelson, P. — Economía",
    21: "Oyhanarte, M. — Indicadores económicos",
    22: "Pérez Enrri, D. — Introducción a la economía. La economía como un todo y para todos",
    23: "Pindyck, R. y Rubinfeld, D. — Microeconomía",
    24: "Rapoport, M. — La deuda externa argentina y la soberanía jurídica: sus razones históricas",
    25: "Rapoport, M. — Mitos, etapas y crisis en la economía argentina",
    26: "Rosero Ortiz, T. et al. — Introducción a la economía",
    27: "Texto escolar de comercio exterior para la educación secundaria",
    28: "Valsecchi, F. — Qué es la economía"
  },
  mapaPorUnidad: {
    "Período diagnóstico — Unidad introductoria": [5, 13, 14, 19, 22, 28],
    "Unidad 1 — La microeconomía. Aspectos generales": [4, 5, 6, 13, 16, 19, 20, 23],
    "Unidad 2 — La microeconomía. Análisis de los mercados": [5, 13, 18, 19, 20, 23],
    "Unidad 3 — La microeconomía. Elementos para el análisis de la distribución del ingreso": [5, 10, 13, 17, 19, 20],
    "Unidad 4 — La macroeconomía. Herramientas conceptuales para el análisis del ingreso nacional": [1, 2, 7, 21, 25],
    "Unidad 5 — La macroeconomía. Las políticas macroeconómicas": [2, 14, 19, 20, 25],
    "Unidad 6 — La macroeconomía. Oferta y demanda agregada": [2, 14, 19, 20, 25],
    "Proyecto Especial — La deuda externa y la dictadura militar (1976-1983)": [10, 24, 25]
  },

  obtenerCitaPorUnidad(nombreUnidad) {
    const ids = this.mapaPorUnidad[nombreUnidad] || [5, 19, 20];
    const autores = ids.slice(0, 4).map(id => `[#${id}] ${this.catalogo[id]}`).join("; ");
    return `materiales/bibliografia.md (${autores} — ${this.reglaCitacion})`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BIBLIOGRAFIA_CATEDRA };
}
if (typeof window !== 'undefined') {
  window.BIBLIOGRAFIA_CATEDRA = BIBLIOGRAFIA_CATEDRA;
}
