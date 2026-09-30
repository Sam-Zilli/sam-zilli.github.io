document.addEventListener('DOMContentLoaded', () => {
  initLessonFlow();
  initStepVisualizers();
  initQuizzes();
});

function initLessonFlow() {
  const panels = document.querySelectorAll('[data-lesson-panel]');
  const tabs = document.querySelectorAll('[data-lesson-tab]');

  function goToSection(sectionId) {
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.lessonPanel === sectionId);
    });
    tabs.forEach((tab) => {
      tab.classList.toggle('is-active', tab.dataset.lessonTab === sectionId);
    });
    document.querySelector('main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('[data-lesson-next]').forEach((btn) => {
    btn.addEventListener('click', () => goToSection(btn.dataset.lessonNext));
  });

  document.querySelectorAll('[data-lesson-prev]').forEach((btn) => {
    btn.addEventListener('click', () => goToSection(btn.dataset.lessonPrev));
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => goToSection(tab.dataset.lessonTab));
  });

  goToSection('intro');
}

function initStepVisualizers() {
  document.querySelectorAll('[data-step-viz]').forEach((viz) => {
    const stepButtons = viz.querySelectorAll('[data-step-id]');
    const highlights = viz.querySelectorAll('[data-step-highlight]');
    const explanations = viz.querySelectorAll('[data-step-explanation]');
    const annotations = viz.querySelectorAll('[data-viz-annotation]');
    const stepPhases = viz.querySelectorAll('[data-step-visible]');

    function goToStep(stepId) {
      const step = String(stepId);
      stepButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.stepId === step);
      });
      stepPhases.forEach((el) => {
        const allowed = el.dataset.stepVisible.split(',').map((s) => s.trim());
        el.hidden = !allowed.includes(step);
      });
      highlights.forEach((el) => {
        el.classList.toggle(
          'is-highlighted',
          step !== '0' && el.dataset.stepHighlight === step
        );
      });
      annotations.forEach((el) => {
        el.hidden = step === '0';
      });
      explanations.forEach((el) => {
        el.classList.toggle('is-visible', el.dataset.stepExplanation === stepId);
      });
    }

    stepButtons.forEach((btn) => {
      btn.addEventListener('click', () => goToStep(btn.dataset.stepId));
    });

    const first = stepButtons[0]?.dataset.stepId;
    if (first) goToStep(first);
  });
}

function initQuizzes() {
  document.querySelectorAll('[data-quiz]').forEach((quiz) => {
    const correctId = quiz.dataset.quizCorrect;
    const options = quiz.querySelectorAll('[data-quiz-choice]');
    const feedbackCorrect = quiz.querySelector('[data-feedback="correct"]');
    const feedbackWrong = quiz.querySelector('[data-feedback="wrong"]');

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const choice = option.dataset.quizChoice;
        const isCorrect = choice === correctId;

        options.forEach((opt) => {
          opt.classList.remove('quiz-option--correct', 'quiz-option--wrong');
        });
        feedbackCorrect?.classList.remove('is-visible');
        feedbackWrong?.classList.remove('is-visible');

        option.classList.add(isCorrect ? 'quiz-option--correct' : 'quiz-option--wrong');

        if (isCorrect) {
          feedbackCorrect?.classList.add('is-visible');
        } else {
          feedbackWrong?.classList.add('is-visible');
        }
      });
    });
  });
}
