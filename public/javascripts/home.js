const signUpButton = document.getElementById('signUp');
const goBackButton = document.getElementById('goBack');
const signUp_container_div = document.querySelector('.sign-up-container');
const signIn_container_div = document.querySelector('.sign-in-container');

signUpButton.addEventListener('click', () => {
  signIn_container_div.style.display = "none";
  signUp_container_div.style.display = "inline";
});

goBackButton.addEventListener('click', () => {
  signIn_container_div.style.display = "inline";
  signUp_container_div.style.display = "none";
});