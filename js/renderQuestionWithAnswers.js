
// Отрисовка вопроса с ответами

function renderQuestionWithAnswers(question, questionNumber) {
    const { ANSWERS, rightAnswer } = question
    ELEMENTS.question.innerHTML = question.QUESTION
    ELEMENTS.questionNumber.innerHTML = questionNumber
    renderAnswers(ANSWERS, rightAnswer)
    blockButton(true)
}
renderQuestionWithAnswers(questionSequence[0], 1)