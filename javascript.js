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
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log(`It's a tie! You both picked ${humanChoice}!`);
        return;
    }

    if (humanChoice == "Rock") {
        if(computerChoice == "Paper") {
            computerScore++;
            console.log("You lose! Paper beats rock!")
        }
        else {
            humanScore++;
            console.log("You win! Rock beats scissors!")
        }
    }
    else if (humanChoice == "Paper") {
        if(computerChoice == "Scissors") {
            computerScore++;
            console.log("You lose! Scissors beats rock!")
        }
        else {
            humanScore++;
            console.log("You win! Paper beats rock!")
        }
    }

    if (humanChoice == "Scissors") {
        if(computerChoice == "Rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors!")
        }
        else {
            humanScore++;
            console.log("You win! Scissors beats paper!")
        }
    }
}

function playGame() {
    console.log("Hello! Welcome to Rock Paper Scissors!")

    
}
