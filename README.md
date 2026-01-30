# rock_paper_scissor
## Game Logic (Pseudocode)
START
DEFINE getComputerChoice
- Randomly return "rock", "paper", or "scissors"
END FUNCTION

DEFINE getHumanChoice
- Prompt user to enter "rock", "paper", or "scissors"
- Convert input to lowercase
- RETURN user choice
END FUNCTION

DEFINE playRound(humanChoice, computerChoice)
- Compare humanChoice and computerChoice
- Determine round winner or tie
- Update scores
- Display round result
END FUNCTION

DEFINE playGame
- Initialize humanScore and computerScore to 0
- Play 5 rounds:
    - Get human choice
    - Get computer choice
    - Play round
- Display final scores
- Declare overall winner or tie
END FUNCTION

Call playGame()
END