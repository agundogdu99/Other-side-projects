const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const dataset = [
    { id: 1, data: 'A' },
    { id: 2, data: 'B' },
    { id: 3, data: 'C' },
    { id: 4, data: 'D' },
    { id: 5, data: 'E' },
    { id: 6, data: 'F' },
    { id: 7, data: 'G' },
    { id: 8, data: 'H' },
    { id: 9, data: 'I' },
    { id: 10, data: 'J' },
    { id: 11, data: 'A' },
    { id: 12, data: 'B' },
    { id: 13, data: 'C' },
    { id: 14, data: 'D' },
    { id: 15, data: 'E' },
    { id: 16, data: 'F' }
    // { id: 17, data: 'G' },
    // { id: 18, data: 'H' },
    // { id: 19, data: 'I' },
    // { id: 20, data: 'J' },
  ];
  

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 800);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// const backOfCardDiv = document.querySelectorAll('.back')
const cardContainers = document.querySelectorAll('.card-container .card');
