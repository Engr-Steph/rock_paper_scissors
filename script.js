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

function playGame() {
    
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

    // Loop for 5 rounds
    for (let i = 1; i <= 5; i ++){
        console.log(`Round ${i}`);
        playRound(getComputerChoice(), getHumanChoice())
    }

    console.log("Final Sore");
    console.log("Human", humanScore);
    console.log("Computer", computerScore);

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