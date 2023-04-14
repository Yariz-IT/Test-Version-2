// Функция разблокировки кнопки 

function blockButton(isBlock) {
    if (isBlock) {
        ELEMENTS.button.classList.add('block')
    } else {
        ELEMENTS.button.classList.remove('block')
    }
}
