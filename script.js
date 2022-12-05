let computerSelection;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
let gameResult;
let gameRound;
let playNumber = 0;


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

    playNumber++;
    playerWin = 0;
    computerWin = 0;
 
    for(let i = 0; i < 5; i++ ){

        let userInput = prompt('Welcome to rock, paper scissors. Please choose between rock, paper and scissors');

        if (userInput === null) {
            gameRound = "You pressed Cancel, Type your choice and press Ok"
            console.log(gameRound)
            i--;
        }else {

            playerSelection = userInput.toLowerCase().split(' ').join('');

            if(!isNaN(playerSelection)) {
                gameRound = "Please type either paper, scissors or rock";
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

    if (confirm("Play Again?")) {
        game(); 
    } else {
        console.log('You pressed cancel, You are not playing again')
        console.log(`Number of plays: ${playNumber}`)
    }
}

game();