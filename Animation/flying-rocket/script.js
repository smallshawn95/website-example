function stars(){
    let i = 0, count = 20;
    let scene = document.querySelector(".scene");
    while(i < count){
        let x = Math.floor(Math.random() * window.innerWidth);
        let h = Math.random() * 100;
        let duration = Math.random() * 1;

        let star = document.createElement("i");
        star.style.left = `${x}px`;
        star.style.width = "1px";
        star.style.height = `${h + 50}px`;
        star.style.animationDuration = `${duration}s`
        
        scene.appendChild(star);
        i += 1;
    }
}

stars();
