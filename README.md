# rock_paper_scissors
## Game Logic (Pseudocode)

START
Initialize choices = ["rock", "paper", "scissors"]

Prompt user to select rock, paper, or scissors
IF user input is invalid  
    Show error message  
    END game  

Generate random computer choice from choices array
IF user choice equals computer choice  
    Result = "Tie"  

ELSE IF  
    (user is rock AND computer is scissors) OR  
    (user is paper AND computer is rock) OR  
    (user is scissors AND computer is paper)  
    Result = "User wins"  

ELSE  
    Result = "Computer wins"  

Display:
- User choice
- Computer choice
- Result
END


## Development Approach
The project was built using task decomposition:
1. Implement core game logic
2. Generate computer choice
3. Handle win/lose/tie conditions
4. Add score tracking
## 5. Build user interface
## 6. Connect logic to UI
## 7. Final styling and polish

