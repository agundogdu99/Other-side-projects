// Fortune Teller

function randomise(len) {
    return Math.floor(Math.random() * len)
}

const fortuneTeller = {
    letters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    future: ['bright', 'grim', 'wealthy', 'intense', 'like a lost cause', 'brilliant'],
    suggestion: ['take a break', 'keep going at it', 'never give up!', 'just give up...', 'not even bother'],
    prediction() {
        return `Your name starts with the letter ${this.letters[randomise(this.letters.length)]}, your future is looking ${this.future[randomise(this.future.length)]}. I suggest you should ${this.suggestion[randomise(this.suggestion.length)]}`
    }
}

console.log(fortuneTeller.prediction())