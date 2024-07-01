function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

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

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase().slice(0,1) + choice.slice(1);
    console.log(choice);

    if (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = getHumanChoice();
    }

}

getHumanChoice();