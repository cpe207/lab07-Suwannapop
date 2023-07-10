//simple email validation
const RegBtn = document.querySelector("#submit-btn");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const emCK = document.querySelector("#emailcheck");
const passWd = document.querySelector("#passwordCK");

firstName.onkeyup = (event) => {
  firstName.classList.remove("is-valid");
  firstName.classList.remove("is-invalid");
};
lastName.onkeyup = (event) => {
  lastName.classList.remove("is-valid");
  lastName.classList.remove("is-invalid");
};
emCK.onkeyup = (event) => {
  emCK.classList.remove("is-valid");
  emCK.classList.remove("is-invalid");
};
passWd.onkeyup = (event) => {
  passWd.classList.remove("is-valid");
  passWd.classList.remove("is-invalid");
};

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

RegBtn.onclick = () => {
  if (passWd.value == "" || passWd.value.length < 6) {
    passWd.classList.add("is-invalid");
  } else {
    passWd.classList.add("is-valid");
  }
  if (firstName.value == "") {
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.add("is-valid");
  }
  if (lastName.value == "") {
    lastName.classList.add("is-invalid");
  } else {
    lastName.classList.add("is-valid");
  }
  if (validateEmail(emCK.value) == true) {
    emCK.classList.add("is-valid");
  } else {
    emCK.classList.add("is-invalid");
  }
};
