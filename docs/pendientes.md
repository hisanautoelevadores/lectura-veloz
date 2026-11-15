# Estado del proyecto y pendientes

Última actualización: ver el historial de commits.

## Hecho
- Lectura en español: ejercicios 1 a 5 con nombres claros, modalidad visible (Deslizar / Destello), destello con tiempo regulable (2 s a 1/10 s), perfil visible en todas las páginas, frases de ánimo con el nombre cada 5 frases, palabras y frases por banda de edad (bancos iniciales).
- Práctica JLPT N5: vocabulario (60), gramática (46), lectura (10 textos), comprensión auditiva (14 ejercicios; 1 con audio nuevo, EP01), explicaciones en español, opciones mezcladas, simulación con 3 partes y tiempo (tiempos provisorios).
- Hiragana y katakana: ejercicios de letras y de dibujo, con tiradas sin repeticiones y errores que vuelven a los dos turnos.
- Hiragana: Leer en movimiento con modalidad Deslizar y Destello (como en lectura), y pausa mientras se mantiene el dedo en la pantalla.
- Hiragana: banco de palabras con dibujo en data/kana/vocab.json (179 palabras: 56 para 3–5, 76 para 6–7, 47 para 8–10).
- Soroban interactivo de 4 columnas, con toque y arrastre.
- Dominio: archivo CNAME preparado, pero retirado temporalmente para que el sitio funcione.

## Esperando tu decisión
1. Dominio crisalidas.ar: esperar que esté a tu nombre (2 o 3 días). Después: registros DNS, registro TXT de verificación, dominio en Pages y archivo CNAME.
2. Audios de comprensión auditiva: quedan 9 ejercicios sin audio. Decime cuántos grabamos (cada línea consume cuota de HeyGen).
3. Página de administración para agregar palabras y frases: decidir cómo se exporta la lista.
4. Tiempos y cantidades oficiales del examen N5: verificar con la fuente oficial.

## Contenido por revisar o ampliar
- Lectura en español: 73 palabras y 20 frases. Objetivo: unas 300 de cada una, por banda de edad.
- Práctica JLPT: ampliar vocabulario, gramática y lectura. Revisar las explicaciones en español.
- Hiragana y katakana: revisar las palabras nuevas (ambiguas sobre todo; los emojis de algunas palabras pueden verse distinto según el teléfono). Agregar katakana con palabras de origen extranjero. Seguir ampliando data/kana/vocab.json (objetivo: unas 300 palabras).
- Kanji por grado: lista oficial del Ministerio de Educación de Japón a verificar, y la sección con furigana que se retira según el avance.

## Código por hacer
- Soroban: más columnas (cuando lo pidas), y ejercicios en los que el alumno forme un número.
- Lectura: control de pausa entre palabras en destello, regulable aparte.
- Lectura de nivel avanzado: doble palabra.

## Ideas para más adelante (necesitan poder comprobar aciertos)
- Velocidad automática según aciertos.
- Repetición de errores dentro de la lectura en movimiento.

## Descartado por ahora
- Modo memoria (escribir o elegir la palabra después del destello).

## Principio general
- Las opciones y las preguntas son aleatorias y lo menos repetitivas posible.
- Lo único que se repite a propósito son los errores, hasta que se aprenden.

## Simulación JLPT N5: tiempos y cantidades (estado)
- Tiempos oficiales: vocabulario 20 min, gramática y lectura 40 min, comprensión auditiva 30 min.
- Cantidades de referencia (rango de fuentes no oficiales, pendiente de verificar con las preguntas de muestra oficiales): 25, 22 y 24 ítems.
- Bancos a agrandar hasta cubrir esas cantidades con holgura: vocabulario y gramática cerca de 100; lectura unas 40 consignas; comprensión auditiva, según lo que se grabe.
