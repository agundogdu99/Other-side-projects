const username = document.querySelector('#username')
const saveScoreBtn = document.getElementById('saveScoreBtn')

const finalScore = document.getElementById('final-score')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5
finalScore.innerText = mostRecentScore


username.addEventListener('keyup', () => {

    if (username.value.length <= 2) {
        saveScoreBtn.disabled = true;
    } else {
        saveScoreBtn.disabled = false;

    }
})

function saveHighScore(e) {
    e.preventDefault()
    // localStorage.setItem(username.value, mostRecentScore)
    const score = {
        score: mostRecentScore,
        name: username.value
    }

    // Push scores to highScores - then Sort them in high to low order, then splice them
    // at 5 OR MAX_HIGH_SCORES to keep it at a max of 5
    highScores.push(score)
    highScores.sort( (a,b) => {
        return b.score - a.score
    })
    highScores.splice(MAX_HIGH_SCORES)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign("index.html")
}