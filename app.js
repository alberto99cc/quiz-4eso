const totalLevels = 7;
let currentLanguage = 'ca';

const translations = {
  ca: {
    eyebrow: 'Aprenentatge interactiu',
    heroTitle: 'HTML Learning Lab',
    heroCopy: 'Tria una activitat per practicar HTML de manera visual, intuïtiva i divertida.',
    homeQuizTitle: 'Nivell 1: Escape Room Quiz',
    homeQuizCopy: 'Respon preguntes sobre etiquetes, tancaments i estructura HTML per avançar de forma gradual.',
    homeQuizBtn: 'Entrar al quiz',
    homeDragTitle: 'Nivell 2: Arrastra les etiquetes',
    homeDragCopy: 'Completa un exemple HTML arrossegant les etiquetes correctes als espais buits.',
    homeDragBtn: 'Entrar al joc',
    backHome: '← Tornar al menú',
    quizIntro: 'Cada repte desbloqueja el següent. Contesta correctament i avança a la següent pàgina com si fos un llibre.',
    quizIntroItems: [
      'Nivell 1: falta una etiqueta.',
      'Nivell 2: una etiqueta està mal tancada.',
      'Nivell 3: les etiquetes estan desordenades.',
      'Nivell 4: cal completar una pàgina sencera.',
      'Nivell 5: etiqueta per a llista numerada.',
      'Nivell 6: etiqueta semàntica per al contingut principal.',
      'Nivell 7: enllaç amb text visible.'
    ],
    quizLevelTitles: [
      'Nivell 1: falta una etiqueta',
      'Nivell 2: etiqueta mal tancada',
      'Nivell 3: etiquetes desordenades',
      'Nivell 4: completa la pàgina',
      'Nivell 5: llista numerada',
      'Nivell 6: etiqueta semàntica',
      'Nivell 7: enllaç amb text visible'
    ],
    quizLevelCopies: [
      'Completa el codi amb l\'etiqueta que falta:',
      'Quina versió soluciona el tancament incorrecte?',
      'Aquesta combinació està mal ordenada. Quina opció és correcta?',
      'Quina etiqueta falta per completar aquesta pàgina?',
      'Quina etiqueta s\'utilitza per a una llista numerada?',
      'Quina etiqueta és la més adequada per al contingut principal?',
      'Quina opció crea un enllaç correcte amb text visible?'
    ],
    quizFinalTitle: '🎉 Enhorabona!',
    quizFinalCopy: 'Has superat tots els nivells de l\'Escape Room HTML. Ara saps identificar etiquetes que falten, tancaments erronis, ordenació incorrecta i com completar una pàgina HTML.',
    progressLabel: 'Progrés',
    dragIntroTitle: 'Completa el codi amb les etiquetes adequades',
    dragIntroCopy: 'Cada nivell presenta un fragment de codi amb espais buits. Arrossega l\'etiqueta correcta i comprova si ho has fet bé.',
    dragLegend: ['Paràgraf', 'Enllaç', 'Imatge'],
    dragLevelLabel: 'Nivell',
    dragBankTitle: 'Etiquetes disponibles',
    dragPlaceholder: 'Arrossega aquí',
    dragCheck: 'Comprovar',
    dragReset: 'Reiniciar',
    dragNext: 'Següent pregunta',
    dragTheoryHeading: 'Per què és correcte?',
    dragFeedbackCorrect: 'Correcte!',
    dragFeedbackError: 'Alguna etiqueta no encaixa. Prova a canviar-la o revisa l’exemple.',
    dragTagLabels: {
      p: 'Paràgraf',
      a: 'Enllaç',
      img: 'Imatge',
      h2: 'Títol secundari',
      li: 'Element de llista',
      strong: 'Text destacat',
      h1: 'Títol principal'
    },
    quizFeedbackSelect: 'Selecciona una opció abans de comprovar.',
    quizFeedbackCorrect: 'Correcte! Anem a la següent pàgina.',
    quizFeedbackIncorrect: 'No és correcte. Torna-ho a intentar.',
    quizCheckContinue: 'Comprova i segueix',
    quizCheckFinish: 'Comprova i finalitza'
  },
  es: {
    eyebrow: 'Aprendizaje interactivo',
    heroTitle: 'HTML Learning Lab',
    heroCopy: 'Elige una actividad para practicar HTML de manera visual, intuitiva y divertida.',
    homeQuizTitle: 'Nivel 1: Escape Room Quiz',
    homeQuizCopy: 'Responde preguntas sobre etiquetas, cierres y estructura HTML para avanzar de forma gradual.',
    homeQuizBtn: 'Entrar al quiz',
    homeDragTitle: 'Nivel 2: Arrastra las etiquetas',
    homeDragCopy: 'Completa un ejemplo HTML arrastrando las etiquetas correctas a los espacios vacíos.',
    homeDragBtn: 'Entrar al juego',
    backHome: '← Volver al menú',
    quizIntro: 'Cada reto desbloquea el siguiente. Responde correctamente y avanza a la siguiente página como si fuera un libro.',
    quizIntroItems: [
      'Nivel 1: falta una etiqueta.',
      'Nivel 2: una etiqueta está mal cerrada.',
      'Nivel 3: las etiquetas están desordenadas.',
      'Nivel 4: hay que completar toda una página.',
      'Nivel 5: etiqueta para lista numerada.',
      'Nivel 6: etiqueta semántica para el contenido principal.',
      'Nivel 7: enlace con texto visible.'
    ],
    quizLevelTitles: [
      'Nivel 1: falta una etiqueta',
      'Nivel 2: etiqueta mal cerrada',
      'Nivel 3: etiquetas desordenadas',
      'Nivel 4: completa la página',
      'Nivel 5: lista numerada',
      'Nivel 6: etiqueta semántica',
      'Nivel 7: enlace con texto visible'
    ],
    quizLevelCopies: [
      'Completa el código con la etiqueta que falta:',
      '¿Qué versión soluciona el cierre incorrecto?',
      'Esta combinación está mal ordenada. ¿Qué opción es correcta?',
      '¿Qué etiqueta falta para completar esta página?',
      '¿Qué etiqueta se utiliza para una lista numerada?',
      '¿Qué etiqueta es la más adecuada para el contenido principal?',
      '¿Qué opción crea un enlace correcto con texto visible?'
    ],
    quizFinalTitle: '🎉 ¡Enhorabuena!',
    quizFinalCopy: 'Has superado todos los niveles del Escape Room HTML. Ahora sabes identificar etiquetas que faltan, cierres erróneos, ordenación incorrecta y cómo completar una página HTML.',
    progressLabel: 'Progreso',
    dragIntroTitle: 'Completa el código con las etiquetas adecuadas',
    dragIntroCopy: 'Cada nivel presenta un fragmento de código con espacios vacíos. Arrastra la etiqueta correcta y comprueba si lo has hecho bien.',
    dragLegend: ['Párrafo', 'Enlace', 'Imagen'],
    dragLevelLabel: 'Nivel',
    dragBankTitle: 'Etiquetas disponibles',
    dragPlaceholder: 'Arrastra aquí',
    dragCheck: 'Comprobar',
    dragReset: 'Reiniciar',
    dragNext: 'Siguiente pregunta',
    dragTheoryHeading: '¿Por qué es correcto?',
    dragFeedbackCorrect: '¡Correcto!',
    dragFeedbackError: 'Alguna etiqueta no encaja. Prueba a cambiarla o revisa el ejemplo.',
    dragTagLabels: {
      p: 'Párrafo',
      a: 'Enlace',
      img: 'Imagen',
      h2: 'Título secundario',
      li: 'Elemento de lista',
      strong: 'Texto destacado',
      h1: 'Título principal'
    },
    quizFeedbackSelect: 'Selecciona una opción antes de comprobar.',
    quizFeedbackCorrect: '¡Correcto! Vamos a la siguiente página.',
    quizFeedbackIncorrect: 'No es correcto. Vuelve a intentarlo.',
    quizCheckContinue: 'Comprueba y sigue',
    quizCheckFinish: 'Comprueba y finaliza'
  }
};

const answers = {
  1: 'correct',
  2: 'correct',
  3: 'correct',
  4: 'correct',
  5: 'correct',
  6: 'correct',
  7: 'correct'
};

const expectedTags = {
  1: 'p',
  2: 'a',
  3: 'img'
};

function getTagLabel(tagName, lang = currentLanguage) {
  return translations[lang].dragTagLabels[tagName] || 'Etiqueta';
}

function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;

  document.getElementById('hero-eyebrow').textContent = t.eyebrow;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-copy').textContent = t.heroCopy;
  document.getElementById('home-quiz-title').textContent = t.homeQuizTitle;
  document.getElementById('home-quiz-copy').textContent = t.homeQuizCopy;
  document.getElementById('home-quiz-btn').textContent = t.homeQuizBtn;
  document.getElementById('home-drag-title').textContent = t.homeDragTitle;
  document.getElementById('home-drag-copy').textContent = t.homeDragCopy;
  document.getElementById('home-drag-btn').textContent = t.homeDragBtn;
  document.querySelector('.back-home').textContent = t.backHome;
  document.getElementById('quiz-intro-text').textContent = t.quizIntro;
  t.quizIntroItems.forEach((item, index) => {
    document.getElementById(`quiz-intro-item-${index + 1}`).textContent = item;
  });
  t.quizLevelTitles.forEach((title, index) => {
    document.getElementById(`quiz-level-${index + 1}-title`).textContent = title;
  });
  t.quizLevelCopies.forEach((copy, index) => {
    document.getElementById(`quiz-level-${index + 1}-copy`).textContent = copy;
  });
  document.getElementById('quiz-final-title').textContent = t.quizFinalTitle;
  document.getElementById('quiz-final-copy').textContent = t.quizFinalCopy;
  document.getElementById('drag-intro-title').textContent = t.dragIntroTitle;
  document.getElementById('drag-intro-copy').textContent = t.dragIntroCopy;
  document.getElementById('drag-legend-p').innerHTML = `<span class="legend-dot dot-p"></span>${t.dragLegend[0]}`;
  document.getElementById('drag-legend-a').innerHTML = `<span class="legend-dot dot-a"></span>${t.dragLegend[1]}`;
  document.getElementById('drag-legend-img').innerHTML = `<span class="legend-dot dot-img"></span>${t.dragLegend[2]}`;
  document.getElementById('drag-level-indicator').textContent = `${t.dragLevelLabel} ${currentDragLevel} / ${totalDragLevels}`;
  document.getElementById('check-drag').textContent = t.dragCheck;
  document.getElementById('reset-drag').textContent = t.dragReset;
  document.getElementById('next-drag-level').textContent = t.dragNext;
  document.querySelectorAll('.back-home').forEach(button => {
    button.textContent = t.backHome;
  });
  document.querySelectorAll('#quiz-mode button[data-level]').forEach(button => {
    const level = Number(button.dataset.level);
    button.textContent = level === totalLevels ? t.quizCheckFinish : t.quizCheckContinue;
  });
  document.querySelectorAll('#drag-mode .bank-title').forEach(title => {
    title.textContent = t.dragBankTitle;
  });
  document.querySelectorAll('#drag-mode .tag').forEach(tag => {
    const tagName = tag.dataset.tag;
    tag.innerHTML = `<strong>&lt;${tagName}&gt;</strong><span>${getTagLabel(tagName, lang)}</span>`;
  });
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  const activeQuizPage = document.querySelector('.page:not(.hidden)');
  if (activeQuizPage) {
    const level = Number(activeQuizPage.id.replace('level-', ''));
    updateProgress(level);
  }

  if (document.getElementById('drag-mode').classList.contains('hidden')) {
    const activeDragLevel = document.getElementById(`drag-level-${currentDragLevel}`);
    if (activeDragLevel) {
      resetDragGame();
    }
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.home-screen, .mode-panel').forEach(screen => {
    screen.classList.add('hidden');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.remove('hidden');
  }
}

function updateProgress(level) {
  const progressText = document.querySelector('.progress-text');
  const progressFill = document.querySelector('.progress-fill');
  progressText.textContent = `${translations[currentLanguage].progressLabel}: ${level} / ${totalLevels}`;
  progressFill.style.width = `${(level / totalLevels) * 100}%`;
}

function showPage(level) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(`level-${level}`).classList.remove('hidden');
  updateProgress(level);
}

function showFinal() {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById('final-step').classList.remove('hidden');
  document.querySelector('.progress-text').textContent = `${translations[currentLanguage].progressLabel}: ${totalLevels} / ${totalLevels}`;
  document.querySelector('.progress-fill').style.width = '100%';
}

function disableInputs(section) {
  section.querySelectorAll('input').forEach(input => input.disabled = true);
}

function initQuizMode() {
  showScreen('quiz-mode');
  showPage(1);

  document.querySelectorAll('#quiz-mode button[data-level]').forEach(button => {
    button.addEventListener('click', () => {
      const level = Number(button.dataset.level);
      const selected = document.querySelector(`input[name="level${level}"]:checked`);
      const message = button.parentElement.querySelector('.message');

      if (!selected) {
        message.textContent = translations[currentLanguage].quizFeedbackSelect;
        message.className = 'message error';
        return;
      }

      if (selected.value === answers[level]) {
        message.textContent = translations[currentLanguage].quizFeedbackCorrect;
        message.className = 'message success';
        disableInputs(button.parentElement);
        button.disabled = true;

        if (level < totalLevels) {
          setTimeout(() => showPage(level + 1), 700);
        } else {
          setTimeout(() => showFinal(), 700);
        }
      } else {
        message.textContent = translations[currentLanguage].quizFeedbackIncorrect;
        message.className = 'message error';
      }
    });
  });
}

let currentDragLevel = 1;
const totalDragLevels = 5;
const dragLevelExplanations = {
  1: {
    ca: 'És correcte perquè <strong>&lt;p&gt;</strong> serveix per al paràgraf, <strong>&lt;a&gt;</strong> per a un enllaç i <strong>&lt;img&gt;</strong> per a una imatge. Cada etiqueta té una funció concreta dins la pàgina.',
    es: 'Es correcto porque <strong>&lt;p&gt;</strong> sirve para el párrafo, <strong>&lt;a&gt;</strong> para un enlace y <strong>&lt;img&gt;</strong> para una imagen. Cada etiqueta tiene una función concreta dentro de la página.'
  },
  2: {
    ca: 'És correcte perquè <strong>&lt;h2&gt;</strong> s’utilitza per a un subtítol i <strong>&lt;p&gt;</strong> per a un paràgraf. L’estructura del text queda més clara amb aquesta diferència.',
    es: 'Es correcto porque <strong>&lt;h2&gt;</strong> se utiliza para un subtítulo y <strong>&lt;p&gt;</strong> para un párrafo. La estructura del texto queda más clara con esta diferencia.'
  },
  3: {
    ca: 'És correcte perquè <strong>&lt;li&gt;</strong> representa cada element d’una llista. Les llistes necessiten aquest tipus d’etiqueta per organitzar correctament els items.',
    es: 'Es correcto porque <strong>&lt;li&gt;</strong> representa cada elemento de una lista. Las listas necesitan este tipo de etiqueta para organizar correctamente los elementos.'
  },
  4: {
    ca: 'És correcte perquè <strong>&lt;strong&gt;</strong> destaca un text dins d’un altre element, com un enllaç. Ajuda a donar rellevància sense canviar l’estructura.',
    es: 'Es correcto porque <strong>&lt;strong&gt;</strong> destaca un texto dentro de otro elemento, como un enlace. Ayuda a dar relevancia sin cambiar la estructura.'
  },
  5: {
    ca: 'És correcte perquè <strong>&lt;h1&gt;</strong> identifica el títol principal i <strong>&lt;p&gt;</strong> el text corrent. Triar la etiqueta adequada millora la lectura i l’estructura del contingut.',
    es: 'Es correcto porque <strong>&lt;h1&gt;</strong> identifica el título principal y <strong>&lt;p&gt;</strong> el texto corriente. Elegir la etiqueta adecuada mejora la lectura y la estructura del contenido.'
  }
};

function showDragExplanation(level) {
  const theoryCard = document.getElementById(`theory-${level}`);
  if (!theoryCard) return;

  const explanation = dragLevelExplanations[level];
  theoryCard.innerHTML = `
    <h3>${translations[currentLanguage].dragTheoryHeading}</h3>
    <p class="theory-ca">${explanation.ca}</p>
    <p class="theory-es">${explanation.es}</p>
  `;
  theoryCard.classList.remove('hidden');
}

function resetDragGame() {
  const activeLevel = document.querySelector(`#drag-level-${currentDragLevel}`);
  if (!activeLevel) return;

  activeLevel.querySelectorAll('.slot').forEach(slot => {
    slot.innerHTML = `<span class="placeholder">${translations[currentLanguage].dragPlaceholder}</span>`;
    slot.classList.remove('filled', 'correct', 'wrong');
  });

  activeLevel.querySelectorAll('.tag').forEach(tag => {
    tag.classList.remove('used');
    tag.setAttribute('draggable', 'true');
  });

  document.querySelectorAll('.theory-card').forEach(card => card.classList.add('hidden'));

  const feedback = document.getElementById('drag-feedback');
  feedback.textContent = '';
  feedback.className = 'message';
  document.getElementById('next-drag-level').classList.add('hidden');
}

function showDragLevel(level) {
  document.querySelectorAll('#drag-mode .drag-game').forEach(game => game.classList.add('hidden'));
  document.getElementById(`drag-level-${level}`).classList.remove('hidden');
  document.getElementById('drag-level-indicator').textContent = `${translations[currentLanguage].dragLevelLabel} ${level} / ${totalDragLevels}`;
  currentDragLevel = level;
  resetDragGame();
}

function initDragMode() {
  showScreen('drag-mode');
  showDragLevel(1);

  document.querySelectorAll('#drag-mode .tag').forEach(tag => {
    tag.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', tag.dataset.tag);
      tag.classList.add('dragging');
    });

    tag.addEventListener('dragend', () => {
      tag.classList.remove('dragging');
    });
  });

  document.querySelectorAll('#drag-mode .drag-game').forEach(game => {
    game.querySelectorAll('.slot').forEach(slot => {
      slot.addEventListener('dragover', event => {
        event.preventDefault();
      });

      slot.addEventListener('drop', event => {
        event.preventDefault();
        const draggedTag = event.dataTransfer.getData('text/plain');
        const tagBankItem = game.querySelector(`.tag[data-tag="${draggedTag}"]`);

        if (!tagBankItem || tagBankItem.classList.contains('used')) {
          return;
        }

        const existingTag = slot.querySelector('.tag');
        if (existingTag) {
          existingTag.remove();
        }

        const tagCopy = document.createElement('div');
        tagCopy.className = 'tag used';
        tagCopy.dataset.tag = draggedTag;
        tagCopy.innerHTML = `<strong>&lt;${draggedTag}&gt;</strong><span>${getTagLabel(draggedTag)}</span>`;
        slot.innerHTML = '';
        slot.appendChild(tagCopy);
        slot.classList.add('filled');
        tagBankItem.classList.add('used');
        tagBankItem.setAttribute('draggable', 'false');
      });
    });
  });

  document.getElementById('check-drag').addEventListener('click', () => {
    const feedback = document.getElementById('drag-feedback');
    const activeLevel = document.getElementById(`drag-level-${currentDragLevel}`);
    const slots = Array.from(activeLevel.querySelectorAll('.slot'));

    slots.forEach(slot => {
      const placedTag = slot.querySelector('.tag')?.dataset.tag;
      const isCorrect = placedTag === slot.dataset.correct;
      slot.classList.toggle('correct', isCorrect && Boolean(placedTag));
      slot.classList.toggle('wrong', Boolean(placedTag) && !isCorrect);
    });

    const allCorrect = slots.every(slot => slot.querySelector('.tag')?.dataset.tag === slot.dataset.correct);

    if (allCorrect) {
      feedback.className = 'message success';
      feedback.textContent = translations[currentLanguage].dragFeedbackCorrect;
      showDragExplanation(currentDragLevel);
      document.getElementById('next-drag-level').classList.remove('hidden');
    } else {
      feedback.textContent = translations[currentLanguage].dragFeedbackError;
      feedback.className = 'message error';
      document.getElementById(`theory-${currentDragLevel}`).classList.add('hidden');
      document.getElementById('next-drag-level').classList.add('hidden');
    }
  });

  document.getElementById('reset-drag').addEventListener('click', resetDragGame);
  document.getElementById('next-drag-level').addEventListener('click', () => {
    if (currentDragLevel < totalDragLevels) {
      showDragLevel(currentDragLevel + 1);
    }
  });
}

function init() {
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });

  document.querySelectorAll('.mode-btn').forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      if (mode === 'quiz') {
        initQuizMode();
      } else if (mode === 'drag') {
        initDragMode();
      }
    });
  });

  document.querySelectorAll('.back-home').forEach(button => {
    button.addEventListener('click', () => {
      showScreen('home-screen');
    });
  });

  showScreen('home-screen');
}

document.addEventListener('DOMContentLoaded', init);
