
// Функция отрисовки статуса ответа

function renderAnswersStatus(answers) {
    const isValid = answers.dataset.valid !== undefined
    if (isValid) {
        answers.classList.add('valid')
        rightAnswerCount++
    } else {
        const validAnswer = answers.parentNode.querySelector('[data-valid]')
        validAnswer.classList.add('valid')
        answers.classList.add('not__valid')
    }
}