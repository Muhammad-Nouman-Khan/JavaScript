let boxes = document.querySelectorAll(".box");

let winPatters = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let statusInfo = document.querySelector("#status");

let winImg = document.querySelector("#win-img");

let resetBtn = document.querySelector("#resetBtn");

let ting = new Audio("ting.mp3");

let win = new Audio("gameover.mp3");

let currPlayer = "X";

let play = true;

let changePlayer = () => {

    if (currPlayer == "X") {
        currPlayer = "O";
    }
    else {
        currPlayer = "X";
    }

    statusInfo.innerText = `${currPlayer}'s Turn`;
}

let checkWinner = () => {
    for (let pattern of winPatters) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 == box2 && box2 == box3) {
                play = false;
                statusInfo.innerText = `${currPlayer} Wins !!!`;
                winImg.classList.remove("hide");
                win.play();
            }
        }
    }
    if (play) {
        changePlayer();
    }
}

let checkDraw = () => {
    let draw = true;
    for(let box of boxes){
        if(box.innerText == ""){
            draw = false;
        }
    }

    if(draw){
        statusInfo.innerText = `Draw!`;
        winImg.classList.remove("hide");
        play = false;
        win.play();
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (play == true) {
            ting.play();
            if (box.innerText == "") {
                box.innerText = currPlayer;
                checkWinner();
                checkDraw();
            }
        }
    })
})

resetBtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        winImg.classList.add("hide");
        statusInfo.innerText = `X's Turn`;
        play = true;
        currPlayer = "X";
    }
})

