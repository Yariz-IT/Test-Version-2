// Функция вывода вариантов ответа 

function renderAnswers(ANSWERS, rightNumberAnswer) {
    const answersHTML = []

    for (index = 0; index < ANSWERS.length; index++) {
        if (index + 1 === rightNumberAnswer) {
            answersHTML.push(`<div class="test__answer" data-valid>${ANSWERS[index]}</div>`)
        } else {
            answersHTML.push(`<div class="test__answer">${ANSWERS[index]}</div>`)
        }
    }

    ELEMENTS.answers.innerHTML = answersHTML.join('')
}