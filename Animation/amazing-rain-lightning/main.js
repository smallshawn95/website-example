function rain(){
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");
    let left = Math.floor(Math.random() * 310);
    let width = 0.5 + Math.random() * 5;
    let height = 0.5 + Math.random() * 50;
    let duration = 1 + Math.random() * 0.5;

    e.classList.add("drop");
    e.style.left = left + "px";
    e.style.width = width + "px";
    e.style.height = height + "px";
    e.style.animationDuration = duration + "s";
    cloud.appendChild(e);

    setTimeout(function(){
        cloud.removeChild(e);
    }, 2000);
}

setInterval(function(){
    rain()
}, 20);