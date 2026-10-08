function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "rock";
    }else if (randomNumber === 1){
        return  "paper";
    }else {
        return "scissors";
    }
}
function getHumanChoice(){
    return prompt("Choose rock, paper, or scissors:");
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log(`Tie! Both chose ${humanChoice}.`);
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    }else{
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
    }
}
for (let i = 0; i<5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${ComputerScore}`);
if (humanScore>computerScore){
    console.log(`You Win The Game`);
}else if(computerScore>humanScore){
    console.log(`Computer Wins The Game`);
}else{
    console.log(`The Game is a Tie`);
}
}
playGame();