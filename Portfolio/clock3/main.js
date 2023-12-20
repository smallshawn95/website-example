let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm"); 

setInterval(() => {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    
    hh.style.transform = `rotateZ(${h * 30 + (m * 6 / 12)}deg)`;
    mm.style.transform = `rotateZ(${m * 6}deg)`;
    ss.style.transform = `rotateZ(${s * 6}deg)`;

    ampm.innerHTML = (h >= 12) ? "PM" : "AM";
    if(h > 12){
        h -= 12;
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
});
