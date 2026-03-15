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

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

function playRound(humanChoice, computerChoice){

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie!";
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    
    else {
        computerScore++
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

    if (humanScore === 5) {
        resultsDiv.textContent = "🎉 You win the game!";
    }

    if (computerScore === 5){
        resultsDiv.textContent =  "💻 Computer wins the game!";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});

    // Display final scores after all rounds
    /*console.log("Final Score");
    console.log("Human", humanScore);
    console.log("Computer", computerScore);

     // Determine and display the overall winner   
    if (humanScore > computerScore) {
        console.log("You win the game");
    }
    else if (computerScore > humanScore) {
       console.log("Computer wins the game"); 
    }
    else {
        console.log("It's a tie!")
       }*/

