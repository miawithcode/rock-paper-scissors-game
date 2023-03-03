const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach((button) => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `Player: ${player}`;
    computerChoice.textContent = `Computer: ${computer}`;
    resultText.textContent = checkResult();
}))

function computerTurn(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;
    }
}

function checkResult(){
    if(player == computer){
        return "Result: It's a tie!"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER" ? "Result: You win!" : "Result: You lose!");
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR" ? "Result: You win!" : "Result: You lose!");
    }
    else if(computer == "SCISSOR"){
        return (player == "ROCK" ? "Result: You win!" : "Result: You lose!");
    }
}