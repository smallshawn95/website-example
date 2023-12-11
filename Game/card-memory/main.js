const emojis = [
    "😀", "😀", "😎", "😎",
    "😍", "😍", "😶", "😶",
    "🥺", "🥺", "😮", "😮",
    "😂", "😂", "😬", "😬"
];

var card_emojis = emojis.sort(function(){
    if(Math.random() > 0.5){
        return 1;
    }else{
        return -1;
    }
});

let count = 0;

for(var i = 0; i < 16; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = card_emojis[i];
    box.onclick = function(){
        this.classList.add("boxOpen");
        setTimeout(function(){
            if(document.querySelectorAll(".boxOpen").length > 1){
                count += 1;
                let a = document.querySelectorAll(".boxOpen")[0];
                let b = document.querySelectorAll(".boxOpen")[1];
                if(a.innerHTML == b.innerHTML){
                    a.classList.add("boxMatch");
                    b.classList.add("boxMatch");
                    a.classList.remove("boxOpen");
                    b.classList.remove("boxOpen");
                    if(document.querySelectorAll(".boxMatch").length == 16){
                        alert(`Win, you use ${count} times in total.`);
                    }
                }else{
                    a.classList.remove("boxOpen");
                    b.classList.remove("boxOpen");
                }
            }
        }, 800);
    }
    document.querySelector(".game").appendChild(box);
}
