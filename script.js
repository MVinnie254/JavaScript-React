
 //Addition
 function add7(number) {
    return number + 7;
}

console.log(add7(10));
//multiply
function multiply(number1, number2) {
    return number1 * number2;
}

console.log(multiply(3, 2));
//capitalize
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));
//Lastletter
function lastLetter(string) {
    return string.slice(-1);
}

console.log(lastLetter("abcd"));

function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } 
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// Testing
console.log(getComputerChoice());

playRound("rock", "scissors");

console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);