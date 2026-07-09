# HTML Learning Lab

Proyecto educativo para 4t d'ESO que combina dos actividades interactivas para aprender HTML de forma visual y práctica.

## Qué incluye el proyecto

La aplicación tiene una pantalla de inicio con dos opciones:

1. Escape Room Quiz
   - Una aventura por niveles con preguntas sobre HTML.
   - Cada acierto avanza a la siguiente página.
   - Incluye una barra de progreso visual.

2. Arrastra les etiquetes
   - Un juego nuevo basado en arrastrar etiquetas HTML a un ejemplo de código.
   - Ayuda a comprender cómo se colocan algunas etiquetas básicas en una estructura HTML sencilla.

## Estructura de archivos

- `index.html`
  - Contiene la pantalla principal, el quiz y el juego de arrastrar etiquetas.
  - Carga los estilos y la lógica desde archivos externos.

- `styles.css`
  - Guarda todos los estilos visuales del proyecto.
  - Incluye el diseño moderno, los botones, las tarjetas y la interfaz del juego de arrastrar etiquetas.

- `app.js`
  - Contiene la lógica de navegación entre pantallas.
  - Gestiona el quiz por niveles y el juego de arrastrar etiquetas.

## Cómo funciona

1. Abre `index.html` en un navegador.
2. Elige entre el quiz o el juego de arrastrar etiquetas.
3. En el quiz, responde correctamente a cada pregunta para avanzar.
4. En el juego de arrastrar etiquetas, arrastra las etiquetas correctas a los espacios del ejemplo HTML y pulsa "Comprovar".

## Objetivo pedagógico

Este proyecto busca que el alumnado:

- reconegui etiquetes HTML básicas;
- comprengui el papel de las etiquetas en una estructura de página;
- practiqui de forma interactiva y visual.

## Cómo probarlo

1. Abre el archivo `index.html` en tu navegador.
2. Prueba el modo quiz.
3. Después entra en el modo de arrastrar etiquetas.
4. Si quieres, puedes ampliar el proyecto con más ejercicios o nuevas etiquetas.

## Funcionalidades detalladas

- **Dos actividades interactivas**: un *Escape Room Quiz* por niveles y un juego *Arrastra les etiquetes* (drag-and-drop).
- **Progresión desbloqueada**: el modo drag queda bloqueado fins completar correctament el nivell 1 del quiz per garantir una ruta didàctica.
- **Barra de progrés i indicador circular**: progrés principal (0%, 50%, 100%) que es mostra a la pantalla principal i s'actualitza quan es completa el quiz i el joc.
- **Aleatorització per evitar patrons**: les opcions del quiz es barregen cada vegada que es mostra la pàgina; el nivell 1 a més es rebaralla automàticament després d'una resposta incorrecta.
- **Banc d'etiquetes reconstruït per nivell**: en entrar a cada nivell del joc d'arrossegar, el banc d'etiquetes es reconstrueix i es baralla per evitar la memorització; també s'adapta al nombre d'espais requerits (p. ex. múltiples `<li>` si cal).
- **Comprovació i explicacions**: en prémer "Comprovar" les caselles marquen `correct`/`wrong` i, si és correcte, es mostra una targeta de teoria explicativa.
- **Panell de finalització**: en completar tots els nivells del joc apareix un panell de finalització amb un botó per tornar al menú.
- **Banner de completitud**: quan l'estat principal arriba al 100% apareix un banner de felicitació a la pantalla principal.
- **Bilingüe (Valencià / Español)**: tots els missatges i rètols estan traduïts i canvien amb l'switch d'idioma.
- **Autor i llicència**: s'ha afegit un badge amb `Created by Alberto Climent — 2026` i un enllaç a la llicència Creative Commons BY-SA 4.0.

## Cómo probar las últimas características

1. Obrir `index.html` en un navegador modern.
2. Entrar al *Quiz*: comprovar que les opcions es barregen cada cop que es mostra la pàgina; fer una resposta incorrecta al nivell 1 per veure la rebarregada automàtica.
3. Completar el nivell 1 del quiz per desbloquejar el mode *Arrastra les etiquetes*.
4. Entrar al joc d'arrossegar i canviar de nivell diverses vegades: comprovar que el banc d'etiquetes es reconstrueix i es baralla a cada entrada.
5. Comprovar que, en completar tots dos mòduls, el progress circular indica `100%` i apareix el banner de felicitació.

## Notes tècniques

- Tecnologies: HTML, CSS i JavaScript pur (sense frameworks).
- Estructura: fitxers principals `index.html`, `styles.css`, `app.js`.
- Control de versions: utilitza Git; aquest repositori està preparat per ser servit com a web estàtica.

---

Si vols que afegeixi un botó per descarregar un certificat o per compartir la finalització a xarxes, puc implementar-ho en la següent iteració.
