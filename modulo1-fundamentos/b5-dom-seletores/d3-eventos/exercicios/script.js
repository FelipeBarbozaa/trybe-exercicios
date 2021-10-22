function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const sexta = [5, 12, 19, 26]
const feriado = [25, 26, 32]

function calendario() {
  for (let dias of dezDaysList) {
    document.querySelector("#days").appendChild(document.createElement('li')).innerText = dias
  }

  for (let dias in dezDaysList) {
    document.querySelectorAll("#days li")[dias].className = "day"
  }

  for (let dias of feriado) {
    document.querySelector("#days").children[dias].className += " holiday"
  }

  for (let dias of sexta) {
    document.querySelector("#days").children[dias].className += " friday"
  }

}
calendario(), holiday(), teste()

function holiday(Feriados) {
  document.querySelector(".buttons-container").appendChild(document.createElement("button"))
  document.querySelector(".buttons-container").children[0].id = "btn-holiday"
}


document.querySelector("#btn-holiday").addEventListener('click', mudarCor)

let condicao = 0
function mudarCor() { 
  let array = document.querySelectorAll(".holiday")
  if (condicao %2 === 0) {
    for (index in array) {
      document.querySelectorAll(".holiday")[index].style = "background-color: green"
    }
  }
  if (condicao %2 === 1) {
    for (index in array) {
      document.querySelectorAll(".holiday")[index].style = "background-color: rgb(238,238,238)"
    }
  }
  condicao += 1
}

function teste(Sextafeira) {
  document.querySelector(".buttons-container").appendChild(document.createElement("button"))
  document.querySelector(".buttons-container").lastChild.id = "btn-friday"
}

let contador = 0
function clicar() {
  let sexta = document.querySelectorAll(".friday")
  let sextaDias = [4, 11, 18, 25]
  if (contador %2 === 0) {
    for (let dias in sexta) {
      document.querySelectorAll(".friday")[dias].innerText = "SEXTOU!!"
    }
  }
  if (contador %2 === 1) {
    for (let i = 0; i < sextaDias.length; i += 1) {
      document.querySelectorAll(".friday")[i].innerText = sextaDias[i]
    }
  }
  contador += 1
  console.log(contador)
}

document.querySelector("#btn-friday").addEventListener('click', clicar)


