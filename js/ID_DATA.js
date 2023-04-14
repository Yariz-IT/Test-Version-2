const ID_DATA = {
    TITLE: 'Информационные технологии',
    QUESTIONS: [
        {
            ID: 1,
            QUESTION: 'В состав ПК входит?',
            ANSWERS: [
                'Сканер, принтер, монитор,',
                'Видеокарта, системный блок, устройство беспровадного питания',
                'Монитор, системный блок, клавиатура, мышь',
                'Винчестер, мышь, монитор, клавиатура',
            ],
            rightAnswer: 3,
        },
        {
            ID: 2,
            QUESTION: 'На что записываются все файлы ПК?',
            ANSWERS: [
                'Винчестер',
                'Модулятор',
                'Флоппи-диск',
                'Генератор',
            ],
            rightAnswer: 1,
        },
        {
            ID: 3,
            QUESTION: 'Как на клавиатуре включить заглавыне буквы?',
            ANSWERS: [
                'Alt+Ctrl',
                'Caps Lock',
                'Esc',
                'Enter',
            ],
            rightAnswer: 2,
        },
        {
            ID: 4,
            QUESTION: 'Устройство для визуального воспроизведения символьной и графической информации?',
            ANSWERS: [
                'Процессор',
                'Клавиатура',
                'Сканер',
                'Монитор',
            ],
            rightAnswer: 4,
        },
        {
            ID: 5,
            QUESTION: 'Для долговременного хранения пользовательской информации служит?',
            ANSWERS: [
                'Процессор',
                'Внешний носитель',
                'Дисковод',
                'Оперативная память',
            ],
            rightAnswer: 2,
        },
        {
            ID: 6,
            QUESTION: 'Как называется самый распространенный принтер, используемый для цветной печати?',
            ANSWERS: [
                'Матричный',
                'Твердокрасочный',
                'Лазерный',
                'Струйный',
            ],
            rightAnswer: 3,
        },
    ]
}

let isSelectAnswer = false
let questionIndex = 1
let rightAnswerCount = 0
const questionCount = 4
const numberAnswersForComplete = 2
const questionSequence  = randomArray(ID_DATA.QUESTIONS, questionCount)
// ^ последовательность вопросов, начинаются с 1

const answersOnQuestions = questionSequence[0].ANSWERS
const rightNumberAnswer = questionSequence[0].rightAnswer
