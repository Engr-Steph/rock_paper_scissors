// Function to generate the computer's choice
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

// Function to get the human player's choice
function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice.toLowerCase(); // Convert input to lowercase for consistency
}
console.log(getHumanChoice());

// Function to play the entire game of 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round of the game
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It is a tie");
            return;
        }

        // Check if human wins the round
        if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
        ){
        humanScore++ // Increment human score
        console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
        }
        
        else {
            computerScore++ // Increment computer score
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }  
    }

    // Loop to play 5 rounds
    for (let i = 1; i <= 5; i ++){
        console.log(`Round ${i}`);
        playRound(getComputerChoice(), getHumanChoice())
    }

    // Display final scores after all rounds
    console.log("Final Score");
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
    }
}
playGame();




/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);*/