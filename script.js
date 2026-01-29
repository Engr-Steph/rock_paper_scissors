function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    }
    else if (randomNumber < 0.66) {
        return "paper"; 
    }
    else {
        return "scissors";
    }  
}
console.log(getComputerChoice());


function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It is a tie");
        return;
    }
    if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
    ){
       humanScore++
       console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
    }
    
    else {
        computerScore++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }  
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);