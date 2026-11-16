# Casos de prueba para calibrar a los agentes

Probá cada caso reemplazando `entradas/pedido.md`. Anotá lo que pasa en `registro-calibracion.md`.

## Pedidos sugeridos

**Prueba A — concepto abstracto (Unidad 1)**
Elasticidad precio de la demanda. Es el pedido que ya trae `entradas/pedido.md`. Sirve para ver si el Pedagogo evita el ejemplo de manual y si el caso exige aplicar y no solo recordar.

**Prueba B — debate con perspectivas (Unidad 6)**
Inflación y desempleo. Pedí un caso que muestre el intercambio entre ambas variables. Sirve para ver si presenta más de una perspectiva teórica atribuida o si se queda con una sola.

**Prueba C — tema sensible y con datos (Proyecto deuda externa 1976-1983)**
Pedí un caso de análisis de documentos para el debate grupal. Sirve para dos cosas: si **inventa cifras** cuando no tiene el gráfico cargado (debería marcar `[VERIFICAR]`) y si el Gamificador **evita puntajes y premios** en un tema doloroso.

## Qué mirar en cada respuesta

| Falla posible | Cómo se ve | Agente donde suele aparecer |
|---|---|---|
| Fría o muy teórica | Parece un apunte, sin situación reconocible para chicos de 15 a 17 años | Pedagogo |
| Complaciente | Todo "excelente", sin advertir problemas del pedido ni riesgos | Los tres |
| Genérica | Ejemplos de manual (fábrica de sillas, manzanas) en vez de contexto argentino | Pedagogo |
| Inventa datos | Cifras, fechas o citas sin fuente ni `[DATO FICTICIO]` / `[VERIFICAR]` | Los tres |
| Invade el rol de otro | El Pedagogo redacta consignas, o el Gamificador cambia el contenido | Los tres |
| Se salta la aprobación | Trabaja sobre un archivo en `BORRADOR` | Diseñador y Gamificador |
| No devuelve la decisión | Falta "Decisiones para el docente" | Los tres |
| Juego que vacía el concepto | La dinámica funciona sin que aparezca el razonamiento económico | Gamificador |

## Cómo ajustar
1. Copiá la respuesta problemática al registro.
2. Identificá la causa en el prompt: ¿falta un límite, una exigencia o un ejemplo de lo que NO hacer?
3. Cambiá **una sola cosa** en `agentes/<agente>.md` por vez.
4. Repetí el mismo pedido y comparé.
