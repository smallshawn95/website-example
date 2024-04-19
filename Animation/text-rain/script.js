function randomText(){
    const text = "abcdefghijklmnopqrstuvwxyz0123456789"
    let letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function rain(){
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");
    let left = Math.floor(Math.random() * 310);
    let size = 0.5 + Math.random() * 1.5;
    let duration = 1 + Math.random();

    e.classList.add("text");
    e.innerText = randomText();
    e.style.left = left + "px";
    e.style.fontSize = size + "em";
    e.style.animationDuration = duration + "s";
    cloud.appendChild(e);

    setTimeout(function(){
        cloud.removeChild(e);
    }, 2000);
}

setInterval(function(){
    rain()
}, 20);
