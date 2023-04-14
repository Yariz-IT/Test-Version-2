// Отслеживаем клик по кнопке перехода к следующему вопросу   

ELEMENTS.button.onclick = () => {
    const newQuestion = questionSequence[questionIndex]
    const nextResultQuestion = questionSequence[questionIndex + 1]
    const nextQuestion = questionIndex + 1
    if (newQuestion) {
        renderQuestionWithAnswers(newQuestion, nextQuestion)
        questionIndex++
        isSelectAnswer = !isSelectAnswer
        if (!nextResultQuestion) {
            buttonState()
        }
    } else {
        renderResult()
    }
}

// Отслеживание клика по ответу 
ELEMENTS.answers.onclick = (event) => {
    const clickOnTheAnswer = event.target.classList.contains('test__answer')
    if (clickOnTheAnswer && !isSelectAnswer) {
        renderAnswersStatus(event.target)
        isSelectAnswer = !isSelectAnswer
        blockButton(false)
    }
}
