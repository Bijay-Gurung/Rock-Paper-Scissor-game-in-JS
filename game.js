document.addEventListener('DOMContentLoaded', function() {
    // Toggle Button
    function myFunction() {
      const element = document.body;
      element.classList.toggle("dark-mode");
  
      const button = document.querySelector("button");
      if (element.classList.contains("dark-mode")) {
        button.textContent = "Light";
      } else {
        button.textContent = "Dark";
      }
    }
  
    // Game Function
    let winMsg = 'Victory';
    let loseMsg = 'Defeat';
    let tieMsg = 'tie';
    let moveList = ['Rock', 'Paper', 'Scissors'];
    let resultDisplay = document.querySelector('#result');
    let moveDisplay = document.querySelectorAll('.Choices h2');
    let buttons = document.querySelectorAll('button');
    let playAgainButton = document.createElement('button');
  
    playAgainButton.innerHTML = 'Play Again!';
    playAgainButton.style.display = 'none';
  
    function calcResult(move1, move2) {
      if (move1 === move2) {
        return tieMsg;
      } else if (
        (move1 === 'Rock' && move2 === 'Scissors') ||
        (move1 === 'Paper' && move2 === 'Rock') ||
        (move1 === 'Scissors' && move2 === 'Paper')
      ) {
        return winMsg;
      } else {
        return loseMsg;
      }
    }
  
    function randomMove() {
      return Math.floor(Math.random() * moveList.length);
    }
  
    function startGame() {
      resultDisplay.innerHTML = 'Choose!';
  
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = moveList[i];
        buttons[i].style.display = 'inline-block';
        buttons[i].addEventListener('click', playRound);
      }
    }
  
    function endGame() {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
        buttons[i].removeEventListener('click', playRound);
      }
      playAgainButton.style.display = 'inline-block';
      playAgainButton.addEventListener('click', restartGame);
    }
  
    function restartGame() {
      startGame();
      playAgainButton.style.display = 'none';
    }
  
    function playRound(event) {
      const playerMove = event.target.innerHTML;
      const computerMove = moveList[randomMove()];
  
      moveDisplay[0].innerHTML = `Player: ${playerMove}`;
      moveDisplay[1].innerHTML = `Computer: ${computerMove}`;
  
      const result = calcResult(playerMove, computerMove);
      resultDisplay.innerHTML = result;
      endGame();
    }
  
    startGame();
    document.querySelector('.Container').appendChild(playAgainButton);
  });
  