let computerSelection;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
let result;
let round;



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
            result = "Draw";
       }else if(playerSelection === "rock" && computerChoice === "scissors"){
           result = "You win, Computer chose scissors";
           playerWin++;
       }else if(playerSelection === "scissors" && computerChoice === "paper"){
           result = "You win, Computer chose paper";
           playerWin++;
       }else if(playerSelection === "paper" && computerChoice === "rock"){
           result = "You win, Computer chose rock";
           playerWin++;
       }else if(playerSelection === "scissors" && computerChoice === "rock"){
           result = "You lose, Computer chose rock";
           computerWin++;
       }else if(playerSelection === "paper" && computerChoice === "scissors"){
           result = "You lose, Computer chose scissors";
           computerWin++;
       }else if(playerSelection === "rock" && computerChoice === "paper") {
           result = "You lose, Computer chose paper";
           computerWin++;
       }


    return result
}


function game() {
 
    for(let i = 0; i < 5; i++ ){



        let userInput = prompt('Please choose between rock, paper and scissors');

        if (userInput === null) {
            i--;
        }else {

         playerSelection = userInput.toLowerCase();

        if(!isNaN(playerSelection)) {
            round = "Please enter either paper, scissors or rock";
            console.log(round)
            i--;
        } else if (playerSelection === "paper" || playerSelection === "scissors" || playerSelection === "rock") {
            console.log(playRound(playerSelection), i);  
        } else {
            round = "Wrong spelling, Please spell correctly: paper, rock or scissors";
            console.log(round)
            i--;
        }


        if (playerWin > computerWin) {
            round = `You win, Player has most wins: ${playerWin} wins`;
        }else if (playerWin < computerWin) {
            round = `You lose, Computer has most wins: ${computerWin} wins`;
        } else{
            round = "No winner, same number of wins"
        }

        }

    }

    console.log(round)
}

game()