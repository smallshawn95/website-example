let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am_pm = document.getElementById("am-pm");

setInterval(function(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let twelve_name = h >= 12 ? "PM" : "AM";
    let hh = document.querySelector("#hh");
    let mm = document.querySelector("#mm");
    let ss = document.querySelector("#ss");

    if(h > 12){
        h -= 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    am_pm.innerHTML = twelve_name;
    hh.style.transform = `rotateZ(${h * 30}deg)`;
    mm.style.transform = `rotateZ(${m * 6}deg)`;
    ss.style.transform = `rotateZ(${s * 6}deg)`;
});
