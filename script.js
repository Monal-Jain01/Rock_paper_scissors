let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreDisplay.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `Better Luck Next Time! ${compChoice} beats your ${userChoice} `;
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msg.innerText = "It's a draw! Play again. ";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            if(compChoice==="Paper") userWin= false;
        }
        else if(userChoice==="Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})