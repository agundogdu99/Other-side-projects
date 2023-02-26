const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
const questionCounterText = document.getElementById('question-counter')
const scoreText = document.getElementById('score')
const progressBarFull = document.getElementById('progress-bar-full')
const loader = document.getElementById('loader')
const game = document.getElementById('game')

let currentQuestion = {}
let acceptingAnswers = false
let questionCounter = 0
let availableQuestions = []

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986")
.then( res => {
    return res.json()
})
.then( loadedQuestions => {
    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        }
        const answerChoices = [...loadedQuestion.incorrect_answers]
        formattedQuestion.answer = Math.ceil(Math.random() * 4);
        answerChoices.splice(formattedQuestion.answer, 0, loadedQuestion.correct_answer);  
        
        answerChoices.forEach((choice, index) => {
            formattedQuestion['choice' + (index + 1)] = choice;
        })
        return formattedQuestion
    })
    

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
    game.classList.remove('hidden')
    loader.classList.add('hidden')
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
    question.innerText = decodeURIComponent(currentQuestion.question)
    console.log(question)

    choices.forEach( choice => {
        const number = choice.dataset['number']
        choice.innerText = decodeURIComponent(currentQuestion['choice' + number])
        console.log(choice)
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach( choice => {
    choice.addEventListener('click', e => {
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


