let aScore = document.getElementById("a-score");
let bScore = document.getElementById("b-score");
let aPlusButton = document.getElementById("a-plus");
let bPlusButton = document.getElementById("b-plus");
let aMinusButton = document.getElementById("a-minus");
let bMinusButton = document.getElementById("b-minus");

function change_score(x, score){
    let value = score + x;
    if(value < 0){
        value = 0;
    }
    if(value < 10){
        value = '0' + value;
    }
    return value;
}

aPlusButton.onclick = function(){
    aScore.innerText = change_score(1, parseInt(aScore.innerText));
};
aMinusButton.onclick = function(){
    aScore.innerText = change_score(-1, parseInt(aScore.innerText));
};
bPlusButton.onclick = function(){
    bScore.innerText = change_score(1, parseInt(bScore.innerText));
};
bMinusButton.onclick = function(){
    bScore.innerText = change_score(-1, parseInt(bScore.innerText));
};

let aName = document.getElementById("a-name");
let bName = document.getElementById("b-name");

aName.addEventListener("click", function(){
    let userInput = prompt("輸入選手一號名稱：", "選手一號");
    if(userInput.length > 0){
        this.innerText = userInput;
    }
});
bName.addEventListener("click", function(){
    let userInput = prompt("輸入選手二號名稱：", "選手二號");
    if(userInput.length > 0){
        this.innerText = userInput;
    }
});

let seconds = 0, minutes = 0;
let time = document.getElementById("time");

setInterval(function(){
    seconds += 1;
    if(seconds >= 60){
        seconds = 0;
        minutes += 1;
    }
    let secondsText = seconds < 10 ? '0' + seconds : seconds;
    let minutesText = minutes < 10 ? '0' + minutes : minutes;
    time.innerText = `${minutesText}:${secondsText}`;
}, 1000);
