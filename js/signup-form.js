
// inputs
const firstname = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// lables
const firstnameLable = document.getElementById('name-lable');
const lastnameLable = document.getElementById('lastname-lable');
const emailLable = document.getElementById('email-lable');
const passwordLable = document.getElementById('password-lable');


// inputs error
function error() {
  if (!firstname.value) {
    firstname.classList.add('input-error');
    firstnameLable.classList.add('error');
  } else {
    firstname.classList.remove('input-error');
    firstnameLable.classList.remove('error');
  }

  if (!lastname.value) {
    lastname.classList.add('input-error');
    lastnameLable.classList.add('error')
  } else {
    lastname.classList.remove('input-error');
    lastnameLable.classList.remove('error');
  }

  if (!email.value) {
    email.classList.add('input-error');
    emailLable.classList.add('error')
  } else {
    email.classList.remove('input-error');
    emailLable.classList.remove('error');
  }

  if (!password.value) {
    password.classList.add('input-error');
    passwordLable.classList.add('error');
  } else {
    password.classList.remove('input-error');
    passwordLable.classList.remove('error');
  }

  // chractor error

  if (firstname.value.length < 6) {
    firstname.classList.add('input-error');
    firstnameLable.textContent = "username can't be less then 6 chractor.";
    firstnameLable.classList.add('error');
  } else {
    firstname.classList.remove('input-error');
    firstnameLable.classList.remove('error');
  }


  if (password.value.length < 8) {
    password.classList.add('input-error');
    passwordLable.textContent = "password can't be less then 8 chractor.";
    passwordLable.classList.add('error');
  } else {
    password.classList.remove('input-error');
    passwordLable.classList.remove('error');
  }

}


