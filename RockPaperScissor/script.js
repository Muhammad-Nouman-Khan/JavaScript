let pick = document.querySelectorAll("img");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let displayResult = document.querySelector("#pick");
let userWon = 0;

let compWon = 0;

const genComp = () => {
    let choices = ["rock", "paper", "scissor"];
    let pick = Math.floor(Math.random() * 3);
    return choices[pick];
}

const checkWinner = (userWin) => {
    if (userWin) {
        console.log(`You Won !`);
        userScore.innerText = ++userWon;
        displayResult.innerText = `You Won!`;
    }
    else {
        console.log(`Computer Won!`);
        compScore.innerText = ++compWon;
        displayResult.innerText = `Computer Won!`;

    }
}

const drawGame = () => {
    console.log(`Draw!`);
    displayResult.innerText = `Draw!`;

}

const playGame = (userChoice) => {
    console.log(`user choice = `, userChoice);

    let compChoice = genComp();

    console.log(`comp choice = `, compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = compChoice == "scissor" ? false : true;
        }
        else {
            userWin = compChoice == "rock" ? false : true;
        }

        checkWinner(userWin);
    }


}

pick.forEach((img) => {
    img.addEventListener("click", () => {
        let userChoice = img.getAttribute("id");
        playGame(userChoice);
    })
})

