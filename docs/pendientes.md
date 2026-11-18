# Estado del proyecto y pendientes

Última actualización: ver el historial de commits.

## Hecho
- Lectura en español: ejercicios 1 a 5 con nombres claros, modalidad visible (Deslizar / Destello), destello con tiempo regulable (2 s a 1/10 s), perfil visible en todas las páginas, frases de ánimo con el nombre cada 5 frases, palabras y frases por banda de edad (bancos iniciales).
- Práctica JLPT N5: vocabulario (60), gramática (46), lectura (10 textos), comprensión auditiva (14 ejercicios; 1 con audio nuevo, EP01), explicaciones en español, opciones mezcladas, simulación con 3 partes y tiempo (tiempos provisorios).
- Hiragana y katakana: ejercicios de letras y de dibujo, con tiradas sin repeticiones y errores que vuelven a los dos turnos.
- Hiragana: Leer en movimiento con modalidad Deslizar y Destello (como en lectura), y pausa mientras se mantiene el dedo en la pantalla.
- Hiragana y katakana: banco de palabras con dibujo en data/kana/vocab.json: 301 palabras (237 en hiragana: 68 para 3–5, 95 para 6–7, 74 para 8–10; 64 en katakana, solo para 6 años en adelante: 44 para 6–7, 20 para 8–10). El katakana no aparece para 3–5 años.
- Soroban interactivo de 4 columnas, con toque y arrastre.
- Dominio: archivo CNAME preparado, pero retirado temporalmente para que el sitio funcione.

## Esperando tu decisión
1. Dominio crisalidas.ar: esperar que esté a tu nombre (2 o 3 días). Después: registros DNS, registro TXT de verificación, dominio en Pages y archivo CNAME.
2. Audios de comprensión auditiva: quedan 5 ejercicios sin audio (EP06 a EP10). Decime cuántos grabamos (cada línea consume cuota de HeyGen).
3. Página de administración para agregar palabras y frases: decidir cómo se exporta la lista.
4. Tiempos y cantidades oficiales del examen N5: verificar con la fuente oficial.

## Contenido por revisar o ampliar
- JLPT N5: cantidades y tiempos oficiales sin verificar. El sitio oficial jlpt.jp no se pudo abrir desde la sesión (el dominio no resuelve). Hay que revisar a mano las preguntas de muestra.
- Lectura en español: 73 palabras y 20 frases. Objetivo: unas 300 de cada una, por banda de edad.
- Práctica JLPT: ampliar vocabulario, gramática y lectura. Revisar las explicaciones en español.
- Hiragana y katakana: revisar las palabras nuevas (ambiguas sobre todo; los emojis de algunas palabras pueden verse distinto según el teléfono). Seguir ampliando data/kana/vocab.json (objetivo: unas 300 palabras de hiragana, más katakana).
- Kanji: 1.º grado completo (80 kanji con lecturas y significado) y 36 palabras con kanji. Pendiente: 2.º a 6.º grado (la lista oficial del Ministerio de Educación de Japón hay que verificarla antes de cargarla), kanji en Leer en movimiento, y furigana en las opciones de "Ver el dibujo y elegir la palabra".

## Código por hacer
- Soroban, hecho: armar y leer con números de hasta 99 y 999 (selector de nivel), y ejercicio Dictado (la app dice el número y el alumno lo arma).
- Soroban, hecho: 3) suma con llevada en dos pasos. Las reglas siguen la tabla de 90 casos de suma del documento de verificación (D, C, T, M), con el orden: primero se quita lo que haga falta en la varilla, después se lleva 1 a las decenas. Probado contra las 90 celdas.
- Soroban, hecho: 5) resta en dos etapas (sin pedir decena; pidiendo decena), con la tabla de 90 casos de resta del documento (D, C, T, M inversos). Primero se pide la decena y después se completa en la varilla. Probado contra las 90 celdas.
- Soroban, hecho: 6) multiplicar una cifra por una cifra con los dos factores a la vista (両置き), con los pasos de la tabla de multiplicar.
- Soroban, hecho: la lección de multiplicar aclara que hay que saber la tabla de multiplicar de memoria; el soroban registra el producto, no lo calcula (confirmado con el reglamento y fuentes de búsqueda).
- Soroban, pendiente: multiplicar varias cifras; en niveles altos, pasar a dejar solo el multiplicando en el ábaco (片落とし). El orden de cálculo para varias cifras sigue sin confirmar.
- Soroban, hecho: separación en Aprender (explicaciones paso a paso) y Ejercicios (armar, leer, dictado). Los niveles de 6–7 y 8–10 años aparecen con candado en 3–5 o 6–7; el aviso ofrece volver o seguir igual (con confirmación), y la elección queda guardada por perfil en este dispositivo.
- Soroban, hecho: formato de las lecciones (suma, resta, suma con llevada, multiplicar): título grande con la operación, objetivo, y pasos numerados debajo del ábaco; la ayuda de índice y pulgar queda plegada al final. Ábaco a todo el ancho en teléfono.
- Soroban, hecho: el mismo formato (título, objetivo, paso o consigna) en "Qué vale cada ficha" y en Armar, Leer y Dictado.
- Soroban, corregido: al acertar en Armar o Dictado, el reinicio automático ya no cambia de ejercicio si el alumno cambió de menú antes.
- Soroban, hecho: práctica de suma y de resta en la sección Ejercicios, con nivel 1 (suma sin pasar de 10; resta sin pedir decena) y nivel 2 (suma pasando de 10; resta pidiendo decena). El nivel 2 está bloqueado para 3–5 años con la opción a seguir igual.
- Soroban, hecho: práctica mixta ("Suma y resta juntas"), con suma y resta al azar en cada ejercicio; nivel 1 sin complementos, nivel 2 con complementos y pedir decena (bloqueado para 3–5 años, con opción a seguir igual).
- Soroban: técnica de dedos corregida según la práctica estándar: el pulgar sube las cuentas de tierra hacia la barra; el índice baja las de tierra y mueve la cuenta de cielo (confirmado con una fuente de búsqueda).
- Soroban, hecho: en las prácticas, si el ábaco no muestra el número esperado y el alumno deja de tocar 2 segundos, aparece una pista: "Ahora el ábaco muestra N. Revisá las fichas que moviste."
- Soroban, pendiente: niveles más altos (varias cifras), que suben por etapas.
- Diferencia a recordar: en kana los kanji y el katakana están bloqueados sin opción (la escritura lo exige); en soroban el bloqueo tiene opción a seguir (es avance).
- Soroban: separar en dos partes, Aprender (explicaciones paso a paso) y Ejercicios (práctica), propuesta del usuario.
- Soroban: revisar con material japonés el orden de los movimientos (quitar primero o llevar primero); por ahora se usa quitar primero.
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
