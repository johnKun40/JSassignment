let computerSelection;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
let gameResult;
let gameRound;
let userPlays;
let playNumber = 0;

let rockPlay = document.querySelector('.rock');
let paperPlay = document.querySelector('.paper');
let scissorsPlay = document.querySelector('.scissors');
let round = document.querySelector('.game-round');   
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let winner = document.querySelector('.game-winner');
let restart = document.querySelector('.game-button');
let welcome = document.querySelector('.welcome-button');
let welcomeWrapper = document.querySelector('.welcome');
let gameWrapper = document.querySelector('.game-wrapper');

welcome.addEventListener('click', () => {
    welcomeWrapper.style.display = 'none'
    gameWrapper.style.display = 'block'
})

rockPlay.addEventListener('click', () => {
    playRound("rock")
});

paperPlay.addEventListener('click', () => {
    playRound("paper")
});

scissorsPlay.addEventListener('click', () => {
    playRound("scissors")
});


function computerPlay(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computerSelection = "rock";
        break;
      case 2:
        computerSelection = "paper";
        break;
      case 3:
        computerSelection = "scissors";
        break;
    }
    return computerSelection;
}



function playRound(playerSelection) {

    computerChoice = computerPlay();
    

    if(playerSelection == computerChoice){
        round.textContent = "Draw, You played the same choice";
    }else if(playerSelection === "rock" && computerChoice === "scissors"){
        round.textContent = "You win, Computer chose scissors";
        playerWin++;
    }else if(playerSelection === "scissors" && computerChoice === "paper"){
        round.textContent = "You win, Computer chose paper";
        playerWin++;
    }else if(playerSelection === "paper" && computerChoice === "rock"){
        round.textContent = "You win, Computer chose rock";
        playerWin++;
    }else if(playerSelection === "scissors" && computerChoice === "rock"){
        round.textContent = "You lose, Computer chose rock";
        computerWin++;
    }else if(playerSelection === "paper" && computerChoice === "scissors"){
        round.textContent = "You lose, Computer chose scissors";
        computerWin++;
    }else if(playerSelection === "rock" && computerChoice === "paper") {
        round.textContent = "You lose, Computer chose paper";
        computerWin++;
    }
    // return gameResult 
    playerScore.innerHTML = playerWin;
    computerScore.innerHTML = computerWin;

    game()

}


function game(){

    if (playerWin == 5){
        winner.textContent = "Player wins!, 5 wins"
        computerWin = 0;
        playerWin = 0;
    
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }else if(computerWin == 5){
        winner.textContent = "Computer wins!, 5 wins"
        computerWin = 0;
        playerWin = 0;
    
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }


}


restart.addEventListener('click', () => {
    computerWin = 0;
    playerWin = 0;

    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;


})

