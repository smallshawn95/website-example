let x = 0;
let meter = document.getElementById("meter");
let output = document.getElementById("output");
output.innerHTML = x;

function plus(){
    if(x < 10){
        x += 1;
    }
    output.innerHTML = x;
}

function minus(){
    if(x > 0){
        x -= 1;
    }
    output.innerHTML = x;
}