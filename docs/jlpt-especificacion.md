# Sección de exámenes JLPT (especificación pendiente)

Estado: pendiente. Se construye más adelante. Por ahora solo nivel N5.

## Navegación

- En la página de inicio aparece una tarjeta **Exámenes**.
- Al entrar, se ven los niveles disponibles. Por ahora solo **N5**.
- Dentro de N5, dos botones:
  1. **Simulación de examen**: tres partes con tiempo, como el examen real.
  2. **Práctica para el examen**: preguntas por tema, con explicación y repetición de errores.

## Diseño

- Tomar el diseño de la app "Práctica JLPT N5" (artifact de claude.ai) como referencia.
- Estilo de cuaderno de examen, una columna de hasta 760 px.
- Colores de referencia (modo claro):
  - Papel #ECEFF4, hoja #FAFBFD, tinta #141E2C, tinta secundaria #4A576B, línea #C8D1DD
  - Índigo #274A8C (único acento), correcto #23784F, incorrecto #B03A28
- Modo oscuro: papel #0E131B, hoja #161D28, tinta #E6EBF3, índigo #8DAEF0.
- Tipografías: Shippori Mincho (títulos y japonés) y Zen Kaku Gothic New (interfaz).
- Opciones con óvalos numerados, como en la hoja de respuestas.
- Barra superior con temporizador, navegación por número de pregunta y estado de cada una.
- Resumen final con puntaje por parte y estimación de aprobado o no.

## Práctica para el examen

- Cuatro áreas: gramática, vocabulario, lectura y comprensión auditiva.
- Cada respuesta se corrige y se explica en español.
- Los errores vuelven con repetición espaciada (sistema de cajas), igual que en las demás actividades.
- Se guarda el avance por perfil.

## Simulación de examen

- Tres bloques: vocabulario, gramática y lectura, y comprensión auditiva.
- Tiempos y cantidades de preguntas: **verificar en la Fundación Japón antes de usarlos**.
- Puntaje estimado por parte, y total.

## Contenido

- Kanji de N5: lista de 110 (100 o 103 según la fuente), con lecturas on y kun y palabras de ejemplo. Verificar contra fuente oficial o de referencia.
- Vocabulario de N5: unas 800 palabras, verificadas en tandas.
- Preguntas: banco fijo revisado. No se generan en vivo con IA.
- Comprensión auditiva: audios con las voces fijas de HeyGen (ver audio/chokai/voces.json).

## Pendientes

1. Verificar tiempos y cantidades oficiales del examen N5.
2. Confirmar la lista de kanji de N5.
3. Escribir y revisar el banco de preguntas por área.
4. Armar la página de exámenes con el diseño del artifact.

## Principio: dos modalidades distintas

Las dos partes del proyecto no se mezclan.

**Aprender japonés (pedagógica).**
- Enseñanza como en el colegio, a criterio nuestro.
- Pasos graduales, felicitaciones y explicaciones amables.
- Bandas de edad (3 a 5, 6 a 7, 8 a 10) donde tienen sentido, por ejemplo hiragana, katakana y después kanji.
- Ejemplo: Reconocer las letras, Leer y elegir el dibujo, Leer en movimiento.

**Preparación para exámenes (JLPT).**
- Estructura y dificultad según el sistema oficial de los organizadores del examen.
- Sin bandas de edad: el mismo banco para todos, con dificultad graduada dentro de N5.
- Feedback neutral: correcto o incorrecto, respuesta y explicación, sin felicitaciones excesivas.
- Simulación con tiempo, como en el examen real.
