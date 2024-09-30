let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; //PLayerX PlayerO
const reset = () => {
    turn0 = true;
    for (box of boxes){
        box.disabled = false; 
        box.innerText = "";
        msgContainer.classList.add("hide");
        count = 0;
        win=false;
    }
}

resetBtn.addEventListener("click", reset);

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let count=0;
let win=false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO) {
            box.innerText = "O";
            box.classList.remove("color");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("color");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disable = () => {
    for (box of boxes){
        box.disabled =true;
    }
}

let msg= document.querySelector(".msg");
const checkWinner = () => {
    for (let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if (posVal1 === posVal2 && posVal2 ===posVal3){
                win=true;
                msg.innerText = `Congratulations, Winner is ${posVal1}`;
                msgContainer.classList.remove("hide");
                disable();
            }
            if(count===9 && win === false){
                msg.innerText = "It's a tie! No Winner";
                msgContainer.classList.remove("hide");
            }
        }
    }
}

newBtn.addEventListener("click", reset);