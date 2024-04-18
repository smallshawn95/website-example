let download = document.querySelector('.download');
let container = document.getElementById('container');
let number = document.getElementById('number');

download.addEventListener('click', function(event){
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(function(){
        let max = 5;
        let min = 1;
        degree += Math.floor(Math.random() * (max - min) + min);
        container.style.background = `conic-gradient(#f5036c ${degree}%, #333 0%)`;
        number.innerHTML = `${degree}<span>%</span>`
        if(degree > 100){
            clearInterval(interval);
            container.classList.add('done');
            number.innerHTML = '<i class="fa-solid fa-check"></i><br><small>100% Done</small>';
            return;
        }
    }, 100);
});
