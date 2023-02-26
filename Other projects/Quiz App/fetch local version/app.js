const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
const questionCounterText = document.getElementById('question-counter')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progress-bar-full')

let currentQuestion = {}
let acceptingAnswers = false
let questionCounter = 0
let availableQuestions = []

let questions = [];

fetch("questions.json")
.then( res => {
    return res.json()
})
.then( loadedQuestions => {
    questions = loadedQuestions
    startGame()
})
.catch(err => {
    console.log(err)
})

const CORRECT_BONUS = 10
const MAX_QUESTIONS = 3

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    // The spread operator above allows us to obtain a FULL COPY - so when we edit it, it doesnt edit the original

    getNewQuestion()
}


getNewQuestion = () => {
    // console.log(availableQuestions.length)
    // console.log(questionCounter)

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        // go to the end page
        return window.location.assign('end.html')
    }

    questionCounter ++
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`

    // Update Progress Bar
    progressBarFull.style.width = (questionCounter/MAX_QUESTIONS) * 100 + '%'

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach( choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach( choice => {
    choice.addEventListener('click', e => {
        console.log(e.target)
        if (!acceptingAnswers) return

        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply =  selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)

    })
})

function incrementScore(num) {
    score += num
    scoreText.innerText = score
}


