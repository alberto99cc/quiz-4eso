# Escape Room HTML

Proyecto educativo para 4t d'ESO que presenta un Escape Room interactivo basado en preguntas sobre HTML.

## Qué contiene este proyecto

- `index.html`: la página principal del Escape Room.
- `styles.css`: estilos visuales separados para la página.
- `app.js`: toda la lógica de la aplicación.

## Cómo funciona

1. El usuario abre `index.html` en el navegador.
2. Aparece una introducción con una lista de niveles y una barra de progreso.
3. Cada nivel muestra un ejercicio corto de HTML.
4. Al responder correctamente, el juego avanza automáticamente a la siguiente página.
5. Cuando se completan los 7 niveles, se muestra una pantalla final de felicitación.

## Niveles incluidos

1. Falta una etiqueta en un título.
2. Etiqueta mal cerrada.
3. Etiquetas desordenadas.
4. Completar la estructura de una página HTML.
5. Elegir la etiqueta correcta para una lista numerada.
6. Elegir la etiqueta semántica correcta para el contenido principal.
7. Crear un enlace con texto visible.

## Estructura de archivos

- `index.html`
  - Contiene la interfaz y los niveles.
  - Carga `styles.css` y `app.js`.

- `styles.css`
  - Gestiona los colores, la tipografía, los contenedores y la barra de progreso.
  - Usa `.hidden` para ocultar niveles y `.progress-fill` para mostrar el avance.

- `app.js`
  - Controla la navegación entre niveles.
  - Actualiza la barra de progreso.
  - Comprueba las respuestas y muestra mensajes de error o éxito.

## Cómo probarlo

1. Abrir `index.html` en un navegador moderno.
2. Seleccionar la respuesta de cada nivel.
3. Pulsar el botón para comprobar.
4. Avanzar hasta completar todos los niveles.

## Notas

- La lógica está separada en `app.js` para mantener el HTML limpio.
- Los estilos están en `styles.css` para facilitar modificaciones visuales.
- El proyecto puede ampliarse con más niveles o nuevas preguntas.
