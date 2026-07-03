const totalLevels = 7;
const answers = {
  1: 'correct',
  2: 'correct',
  3: 'correct',
  4: 'correct',
  5: 'correct',
  6: 'correct',
  7: 'correct'
};

function updateProgress(level) {
  const progressText = document.querySelector('.progress-text');
  const progressFill = document.querySelector('.progress-fill');
  progressText.textContent = `Progrés: ${level} / ${totalLevels}`;
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
  document.querySelector('.progress-text').textContent = `Progrés: ${totalLevels} / ${totalLevels}`;
  document.querySelector('.progress-fill').style.width = '100%';
}

function disableInputs(section) {
  section.querySelectorAll('input').forEach(input => input.disabled = true);
}

function init() {
  showPage(1);

  document.querySelectorAll('button[data-level]').forEach(button => {
    button.addEventListener('click', () => {
      const level = Number(button.dataset.level);
      const selected = document.querySelector(`input[name="level${level}"]:checked`);
      const message = button.parentElement.querySelector('.message');

      if (!selected) {
        message.textContent = 'Selecciona una opció abans de comprovar.';
        message.className = 'message error';
        return;
      }

      if (selected.value === answers[level]) {
        message.textContent = 'Correcte! Anem a la següent pàgina.';
        message.className = 'message success';
        disableInputs(button.parentElement);
        button.disabled = true;

        if (level < totalLevels) {
          setTimeout(() => showPage(level + 1), 700);
        } else {
          setTimeout(() => showFinal(), 700);
        }
      } else {
        message.textContent = 'No és correcte. Torna-ho a intentar.';
        message.className = 'message error';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
