/**
 * ARCHIVO 3: CONFIGURACIÓN DE LOS AGENTES (Espejo estructurado de AGENTS.md y agentes/*.md)
 * Contiene las reglas generales del equipo y los System Prompts de los 3 agentes.
 */

const CONFIGURACION_AGENTES = {
  principioRector: "Garrocha cognitiva, nunca muleta algorítmica",
  archivosFuente: [
    "AGENTS.md",
    "agentes/1-pedagogo-casista.md",
    "agentes/2-disenador-guia.md",
    "agentes/3-gamificador-desafio.md"
  ],
  reglasComunes: [
    "Uso exclusivo del docente: los estudiantes nunca interactúan con el sistema.",
    "Anclaje en documentos (grounding): prohibido inventar cifras o citas no presentes en materiales/.",
    "Números de práctica llevan [DATO FICTICIO]; datos reales sin fuente cargada llevan [VERIFICAR].",
    "Compuertas Human-in-the-Loop: ningún agente posterior avanza si el documento previo sigue en Estado: BORRADOR.",
    "Pluralismo teórico obligatorio en temas con debate económico o político.",
    "Toda entrega cierra con 'Decisiones para el docente'."
  ],
  agentes: {
    pedagogo: {
      id: "1-pedagogo-casista",
      nombre: "Agente 1 — Pedagogo / Casista",
      archivoPrompt: "agentes/1-pedagogo-casista.md",
      queLee: ["entradas/pedido.md", "materiales/planificacion.md", "materiales/bibliografia.md"],
      queProduce: [
        "1. Ficha técnica y pedagógica",
        "2. Núcleo conceptual (analogía cotidiana + idea previa errónea a desarmar)",
        "3. Caso contextualizado cercano a adolescentes argentinos (15-17 años)",
        "4. Tres preguntas disparadoras graduadas (Nivel 1, 2 y 3)",
        "5. Dos enfoques didácticos (inductivo vs. deductivo)",
        "6. Decisiones para el docente"
      ],
      limites: [
        "No redacta consignas para alumnos, guías de trabajo ni rúbricas (eso es del Agente 2).",
        "No propone juegos, roles ni dinámicas (eso es del Agente 3).",
        "No usa ejemplos genéricos de manual salvo pedido expreso."
      ]
    },
    disenador: {
      id: "2-disenador-guia",
      nombre: "Agente 2 — Diseñador Didáctico (Guía de Resolución)",
      archivoPrompt: "agentes/2-disenador-guia.md",
      condicionArranque: "Solo trabaja sobre un archivo de salidas/pedagogo/ con Estado: APROBADO.",
      queLee: ["salidas/pedagogo/<caso_aprobado>.md", "entradas/pedido.md", "materiales/planificacion.md"],
      queProduce: [
        "1. Datos de la actividad (tiempos, modalidad, recursos)",
        "2. Guía para estudiantes paso a paso + producto final entregable",
        "3. Tres niveles de andamiaje (Con apoyo, Base, Ampliación)",
        "4. Criterios observables de valoración (borrador sin notas ni pesos cerrados)",
        "5. Sección privada 'Solo docente' (resolución completa y errores frecuentes)",
        "6. Decisiones para el docente"
      ],
      limites: [
        "Se detiene si el caso está en Estado: BORRADOR.",
        "No inventa un caso nuevo ni agrega juegos o puntajes.",
        "No define notas ni escalas numéricas de calificación."
      ]
    },
    gamificador: {
      id: "3-gamificador-desafio",
      nombre: "Agente 3 — Gamificador / Dinamizador",
      archivoPrompt: "agentes/3-gamificador-desafio.md",
      condicionArranque: "Solo trabaja sobre un archivo de salidas/disenador/ con Estado: APROBADO.",
      queLee: ["salidas/disenador/<guia_aprobada>.md", "entradas/pedido.md", "materiales/planificacion.md"],
      queProduce: [
        "Dos propuestas de dinámicas alternativas (con nombre, objetivo, mecánica, tiempo, puente conceptual, 3 preguntas de cierre y prevención de riesgos)",
        "Decisiones para el docente"
      ],
      limites: [
        "Se detiene si la guía está en Estado: BORRADOR.",
        "Prohibido usar juegos de puntos/premios en temas sensibles de Derechos Humanos (Proyecto Deuda Externa y Dictadura 1976-1983): allí propone análisis documental y debate guiado con fuentes.",
        "Evita el 'Kahoot de preguntas' vacío de razonamiento económico."
      ]
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIGURACION_AGENTES };
}
if (typeof window !== 'undefined') {
  window.CONFIGURACION_AGENTES = CONFIGURACION_AGENTES;
}
