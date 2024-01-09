let aRatio = 0, bRatio = 0, winScore = 11;
let ratio = document.getElementById("ratio");
let aScoreText = document.getElementById("a-score");
let bScoreText = document.getElementById("b-score");
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

function deuce(aScore, bScore){
    if(aScore >= 10 && bScore >= 10 && aScore == bScore){
        winScore += 1;
    }
}

function change_ratio(){
    let aScore = parseInt(aScoreText.innerText);
    let bScore = parseInt(bScoreText.innerText);
    deuce(aScore, bScore);
    if(aScore == winScore){
        aRatio += 1;
        alert(`${aName.innerText} win.`);
        winScore = 11;
        aScoreText.innerText = "00";
        bScoreText.innerText = "00";
        ratio.innerText = `${aRatio} - ${bRatio}`;
    }else if(bScore == winScore){
        bRatio += 1;
        alert(`${bName.innerText} win.`);
        winScore = 11;
        aScoreText.innerText = "00";
        bScoreText.innerText = "00";
        ratio.innerText = `${aRatio} - ${bRatio}`;
    }
}

aPlusButton.onclick = function(){
    aScoreText.innerText = change_score(1, parseInt(aScoreText.innerText));
    change_ratio();
};
aMinusButton.onclick = function(){
    aScoreText.innerText = change_score(-1, parseInt(aScoreText.innerText));
    change_ratio();
};
bPlusButton.onclick = function(){
    bScoreText.innerText = change_score(1, parseInt(bScoreText.innerText));
    change_ratio();
};
bMinusButton.onclick = function(){
    bScoreText.innerText = change_score(-1, parseInt(bScoreText.innerText));
    change_ratio();
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
