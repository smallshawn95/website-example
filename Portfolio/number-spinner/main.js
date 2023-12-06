let x = 0;
let meter = document.getElementById("meter");
let output = document.getElementById("output");
output.innerHTML = x;

function plus(){
    if(x < 10){
        x += 1;
    }
    if(x >= 7){
        meter.style.background = "#ff0000";
        meter.style.filter = "drop-shadow(0 0 2.5px #ff0000) drop-shadow(0 0 10px #ff0000)";
    }
    output.innerHTML = x;
    meter.style.height = x * 10 + '%';
}

function minus(){
    if(x > 0){
        x -= 1;
    }
    if(x <= 6){
        meter.style.background = "#00ff00";
        meter.style.filter = "drop-shadow(0 0 2.5px #00ff00) drop-shadow(0 0 10px #00ff00)";
    }
    output.innerHTML = x;
    meter.style.height = x * 10 + '%';
}