// initial declaration of score variables
let humanScore = 0;
let computerScore = 0;


// function to be used by getComputerChoice, chooses a
// random selection from 1,2,3
function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

// used in conjunction with getRandomInt, chooses a 
// random selection from Rock, Paper, Scissors
function getComputerChoice() {
    let num = getRandomInt(3);
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// no longer feasible as we are not prompting user
// response via a windows.prompt, but through buttons now
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase().slice(0,1) + choice.slice(1);

    if (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = getHumanChoice();
    }
    return choice;
}

// modified to account for user response via a series
// of buttons, displays a new box when 5 rounds are up,
// showing the winner
function playRound() {
    const computerChoice = getComputerChoice();

    const doc = document.querySelector(".btts")

    doc.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target.id == computerChoice) return;

        switch(target.id) {
            case 'rock' :
                if(computerChoice == "Paper") {
                    computerScore++;
                    break;
                }
                else {
                    humanScore++;
                    break;
                }
            
            case 'paper' :
                if(computerChoice == "Scissors") {
                    computerScore++;
                }
                else {
                    humanScore++;
                }

            case 'scissors' :
                if(computerChoice == "Rock") {
                    computerScore++;
                }
                else {
                    humanScore++;
                }
        }
    })
}


function playGame() {
    const humanScoreBoard = document.querySelector(".human");
    const computerScoreBoard = document.querySelector(".bot");

    for (let i = 0; i < 5; i++) {
        playRound();
        humanScoreBoard.textContent = humanScore;
        computerScoreBoard.textContent = computerScore;
    }
    const doc = document.querySelector("#game");
}

playGame();