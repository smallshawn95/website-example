let body = document.querySelector("body");
let signup = document.querySelector("#signup");
let signin = document.querySelector("#signin");

signup.onclick = function(){
    body.classList.add("signup");
};

signin.onclick = function(){
    body.classList.remove("signup");
};
