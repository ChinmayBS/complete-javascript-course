'use strict';

console.log(document.querySelector('.message').textContent);

//DOM and DOM manipulation (Documnet object model)
//complete repesentation of html incuding elements and text as well.
//DOM!==Javascript DOM is not a part of javascript
//DOM comes from web API's

//selecting and manipulating elements
//document.querySelector('.message').textContent = 'Correct Number, You Won!!!';
// document.querySelector('.number').textContent = 20;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);

//handling click events
//event listener(wait for a certain event to happen and do something )
// document.querySelector('.check').addEventListener('click', () => {
//   document.querySelector('.guess').value = 19;
// });

//game random number
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let secrectNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gameStatus = true;

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  //   console.log(guessNumber);
  if (!gameStatus) {
    document.querySelector('.guess').value = '';
    return;
  }
  if (!guessNumber) {
    displayMessage('No Number!!!');
  } else {
    if (guessNumber === secrectNumber) {
      //player wins the game
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secrectNumber;
      gameStatus = false;
      displayMessage('Correct Number, You Won!!!!');

      highScore = Math.max(highScore, score);
      document.querySelector('.highscore').textContent = highScore;
    } else if (guessNumber !== secrectNumber) {
      if (score) {
        displayMessage(
          guessNumber > secrectNumber ? 'Too High!!!' : 'Too low!!!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game');
      }
    }
  }

  document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secrectNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  gameStatus = true;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
