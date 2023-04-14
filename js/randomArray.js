// Рандомнный выбор вопроса

function randomArray(array, count) {
    let randomArray = []

    while (array.length && randomArray.length < count) {
        const maxCoefficient = array.length - 1
        const randomCoefficient = Math.round(Math.random() * maxCoefficient)
        const randomNumber = 5
        //  ^ выбор рандомного числа из всего колличества вопросов
        const cutQuestion = array.splice(randomCoefficient, randomNumber)
        randomArray = randomArray.concat(cutQuestion)

    }
    return randomArray
}