let computerSelection;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
let gameResult;
let gameRound;
let userPlays;
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

function userPlay() {

    let promptText = "Welcome to Rock, Paper and Scissors\n" + "Please type rock, paper or scissors to play";
    let incorrectText = "Please type rock, paper or scissors"
    let userInput = prompt(promptText)
    let userInputs
    

    if(userInput === null) {
        userInput = prompt("You pressed cancel, please type rock, paper or scissors")
    }else{

    userInputs = userInput.toLowerCase().split(' ').join('');

    while (
      userInputs !== "rock" &&
      userInputs !== "paper" &&
      userInputs !== "scissors"
    ) {
      userInputs = prompt("Incorrect option\n" + incorrectText).toLowerCase().split(' ').join('');
    }
    }

    return userInputs;

}


function playRound() {

    computerChoice = computerPlay();
    playerSelection = userPlay();

    if(playerSelection == computerChoice){
        gameResult = "Draw, You played the same choice";
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
        console.log(playRound(),`\nRound ${i + 1}`);
        playNumber++;
    }

    if (playerWin > computerWin) {
        gameRound = `You win, Player has most wins: ${playerWin} wins`;
    }else if (playerWin < computerWin) {
        gameRound = `You lose, Computer has most wins: ${computerWin} wins`;
    } else{
        gameRound = "No winner, same number of wins";
    }
    console.log(gameRound)

    if (confirm("Play Again?")) {
        playerWin = 0;
        computerWin = 0;
        game(); 
    } else {
        console.log('You pressed cancel, You are not playing again')
        console.log(`Number of plays: ${playNumber}`)
    }


}

game();