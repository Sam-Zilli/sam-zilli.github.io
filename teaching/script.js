document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initStepVisualizers();
  initQuizzes();
});

function initTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  function activateTab(targetId) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.tabTarget === targetId);
    });
    tabPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.tabPanel === targetId);
    });
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tabTarget));
  });

  const initial = tabButtons[0]?.dataset.tabTarget;
  if (initial) activateTab(initial);
}

function initStepVisualizers() {
  document.querySelectorAll('[data-step-viz]').forEach((viz) => {
    const stepButtons = viz.querySelectorAll('[data-step-id]');
    const highlights = viz.querySelectorAll('[data-step-highlight]');
    const explanations = viz.querySelectorAll('[data-step-explanation]');

    function goToStep(stepId) {
      stepButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.stepId === stepId);
      });
      highlights.forEach((el) => {
        el.classList.toggle('is-highlighted', el.dataset.stepHighlight === stepId);
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
