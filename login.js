var password = document.getElementById("pass1");
var password2 = document.getElementById("pass2");

function validatePassword(){
    
  if(password.value != password2.value) {
    password2.setCustomValidity("Passwords Don't Match");
    
  } 
  else {
    password2.setCustomValidity('');
  }
}

pass1.onchange = validatePassword;
pass2.onkeyup = validatePassword;

let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});