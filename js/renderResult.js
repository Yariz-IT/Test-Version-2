// Вывод результат опроса

function renderResult() {
    ELEMENTS.modalWindow.onclick
    ELEMENTS.modalWindow.style.visibility = 'visible'
    if (testResult()) {
        ELEMENTS.totalResult.innerHTML = 'Тест пройден 👌🏻'
        ELEMENTS.totalResult.classList.add('passed')
    } else {
        ELEMENTS.totalResult.innerHTML = 'Тест не пройден 🤏🏻'
        ELEMENTS.totalResult.classList.add('not__passed')
    }
}
