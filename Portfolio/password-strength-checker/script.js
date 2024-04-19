let passwordInput = document.getElementById('password');
let passwordStrengths = document.querySelectorAll('.password-strength');
let text = document.getElementById('text');

passwordInput.addEventListener('input', function(event){
    let password = event.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30;
    let strengthText, gradientColor;
    if(strength <= 4){
        strengthText = 'Weak';
        gradientColor = '#ff2c1c';
    }else if(strength <= 8){
        strengthText = 'Medium';
        gradientColor = '#ff9800';
    }else{
        strengthText = 'Strong';
        gradientColor = '#12ff12';
    }

    passwordStrengths.forEach(passwordStrength => {
        passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, #1115 ${degree}deg)`;
    });
    text.textContent = strengthText;
    text.style.color = gradientColor;
});
