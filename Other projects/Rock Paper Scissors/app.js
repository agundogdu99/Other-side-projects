const userScore = document.querySelector('#user-score')
const aiScore = document.querySelector('#ai-score')
const instruction = document.querySelector('#instruction')
const result = document.querySelector('#result')
const drawResult = document.querySelector('#draw-result')
const winnerSpan = document.querySelector('#winner')
const loserSpan = document.querySelector('#loser')
const rockSelection = document.querySelector('#rockSelection')
const paperSelection = document.querySelector('#paperSelection')
const scissorsSelection = document.querySelector('#scissorsSelection')
const resetButton = document.querySelector('#resetButton')
const userIcon = document.querySelector('#userIcon')
const aiIcon = document.querySelector('#aiIcon')



let userNumScore = 0
let aiNumScore = 0
userScore.innerText = userNumScore
aiScore.innerText = aiNumScore

let userChoice



// Function to randomly select Rock/Paper/Scissors
function randomGenerate() {
    num = Math.floor(Math.random() * 3)
    let selection
    if (num === 0) {
        return 'rock'
    } else if (num === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
    }


rockSelection.addEventListener('click', function() {
    userChoice = 'rock'
    onClick('rock')
})

paperSelection.addEventListener('click', function() {
    userChoice = 'paper'
    onClick('paper')
})

scissorsSelection.addEventListener('click', function() {
    userChoice = 'scissors'
    onClick('scissors')
})


function onClick(userChoice) {
    let aiChoice = randomGenerate()

    userIcon.style.display = 'inline-flex'
    aiIcon.style.display = 'inline-flex'

    if (userChoice === 'rock') {
        userIcon.src = './resources/rock-svgrepo-com.svg'
    } else if (userChoice === 'paper') {
        userIcon.src = './resources/paper-svgrepo-com.svg'
    } else {
        userIcon.src = './resources/scissors-svgrepo-com.svg'
    }

    if (aiChoice === 'rock') {
        aiIcon.src = './resources/rock-svgrepo-com.svg'
    } else if (aiChoice === 'paper') {
        aiIcon.src = './resources/paper-svgrepo-com.svg'
    } else {
        aiIcon.src = './resources/scissors-svgrepo-com.svg'
    }

    playGame(userChoice, aiChoice)
}

function getResult(userChoice, aiChoice) {
    let score
    if (userChoice === aiChoice) {
        score = 0
    } else if (userChoice === 'rock' && aiChoice === 'scissors') {
        score = 1
    } else if (userChoice === 'paper' && aiChoice === 'rock') {
        score = 1
    } else if (userChoice === 'scissors' && aiChoice === 'paper') {
        score = 1
    } else {
        score = -1
    }
    return score
}


function showResult(score, userChoice, aiChoice) {

    if (score === 0) {
        drawResult.style.display = 'inline-flex'
        result.style.display = 'none'
        instruction.style.display = "none"
    } else if (score === 1) {
        result.style.display = 'inline-flex'
        drawResult.style.display = 'none'
        winnerSpan.innerText = 'User'
        loserSpan.innerText = 'Computer'
        instruction.style.display = "none"
        userNumScore += 1
        userScore.innerText = userNumScore
    } else {
        drawResult.style.display = 'none'
        result.style.display = 'inline-flex'
        winnerSpan.innerText = 'Computer'
        loserSpan.innerText = 'User'
        instruction.style.display = "none"
        aiNumScore += 1
        aiScore.innerText = aiNumScore
    }
}



function playGame(userInput, aiInput) {
    let gameResult = getResult(userInput, aiInput);
    showResult(gameResult, userInput, aiInput);
    }


// Reset button listener
resetButton.addEventListener('click', resetGame)
// Reset button function
function resetGame() {
    userNumScore = 0
    aiNumScore = 0
    userScore.innerText = userNumScore
    aiScore.innerText = aiNumScore
    drawResult.style.display = 'none'
    result.style.display = 'none'
    instruction.style.display = 'inline-flex'
    userIcon.style.display = 'none'
    aiIcon.style.display = 'none'
}