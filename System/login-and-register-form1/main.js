let signinButton = document.querySelector(".signin-button");
let signupButton = document.querySelector(".signup-button");
let body = document.querySelector("body");
let formBox = document.querySelector(".form-box");

signupButton.onclick = function(){
    body.classList.add("active");
    formBox.classList.add("active");
}

signinButton.onclick = function(){
    body.classList.remove("active");
    formBox.classList.remove("active");
}