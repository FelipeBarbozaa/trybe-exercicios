const button = document.querySelector('#botao');
let inputNameUser = document.querySelector('#inputEmailUser');
const emailUser = document.querySelector('#emailUser');

function getUserValue(event) {
  event.preventDefault();
  console.log(inputNameUser.value);
  emailUser.innerHTML = inputNameUser.value
}

button.addEventListener('click', getUserValue)