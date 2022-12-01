let computerSelection;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
let gameResult;
let gameRound;


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
        gameResult = "Draw";
    }else if(playerSelection === "rock" && computerChoice === "scissors"){
        gameResult = "You win, Computer chose scissors";
        playerWin++;
    }else if(playerSelection === "scissors" && computerChoice === "paper"){
        gameResult = "You win, Computer chose paper";
        playerWin++;
    }else if(playerSelection === "paper" && computerChoice === "rock"){
        gameResult = "You win, Computer chose rock";
        playerWin++;
    }else if(playerSelection === "scissors" && computerChoice === "rock"){
        gameResult = "You lose, Computer chose rock";
        computerWin++;
    }else if(playerSelection === "paper" && computerChoice === "scissors"){
        gameResult = "You lose, Computer chose scissors";
        computerWin++;
    }else if(playerSelection === "rock" && computerChoice === "paper") {
        gameResult = "You lose, Computer chose paper";
        computerWin++;
    }

    return gameResult
}


function game() {
 
    for(let i = 0; i < 5; i++ ){

        let userInput = prompt('Please choose between rock, paper and scissors');

        if (userInput === null) {
            i--;
        }else {

            playerSelection = userInput.toLowerCase();

            if(!isNaN(playerSelection)) {
                gameRound = "Please enter either paper, scissors or rock";
                console.log(gameRound)
                i--;
            } else if (playerSelection === "paper" || playerSelection === "scissors" || playerSelection === "rock") {
                console.log(playRound(playerSelection), i);  
            } else {
                gameRound = "Wrong spelling, Please spell correctly: paper, rock or scissors";
                console.log(gameRound);
                i--;
            }

            if (playerWin > computerWin) {
                gameRound = `You win, Player has most wins: ${playerWin} wins`;
            }else if (playerWin < computerWin) {
                gameRound = `You lose, Computer has most wins: ${computerWin} wins`;
            } else{
                gameRound = "No winner, same number of wins";
            }
        }
    }
    console.log(gameRound)
}

game();