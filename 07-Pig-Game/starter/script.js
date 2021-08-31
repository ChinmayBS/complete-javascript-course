'use strict';

//Selcting elements by query and id
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //bit faster
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//varibales
const scores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;
let gameState = true;

//initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//change active player
//toggle method
const changePlayer = currentPlayer => {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
  document
    .querySelector(`.player--${currentPlayer ^ 1}`)
    .classList.remove('player--active');
};

//rollDice funcion
const rollDice = () => {
  if (gameState) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;
    if (randomNumber == 1) {
      currentScore = 0;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;

      currentPlayer = currentPlayer ^ 1; //switch player
      changePlayer(currentPlayer);
    } else {
      currentScore += randomNumber;
      //console.log(`.current--${currentPlayer}`);
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    }
  }
};

//restart game
const restartGame = () => {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentPlayer = 0;
  currentScore = 0;
  document.getElementById(`score--${0}`).textContent = scores[0];
  document.getElementById(`score--${1}`).textContent = scores[1];
  changePlayer(currentPlayer);
  gameState = true;
  diceEl.classList.remove('hidden');
};

//user rolls a dice
btnRoll.addEventListener('click', rollDice);

//new game button reset game
btnNew.addEventListener('click', restartGame);

//hold points
btnHold.addEventListener('click', () => {
  if (gameState) {
    scores[currentPlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    document.getElementById(`current--${currentPlayer}`).textContent = 0;

    if (scores[currentPlayer] >= 100) {
      gameState = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      currentPlayer = currentPlayer ^ 1;
      changePlayer(currentPlayer);
    }
  }
});
