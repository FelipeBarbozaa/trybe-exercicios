const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function mudarClasse(elemento) {
  document.querySelector(".tech").classList.remove("tech")
  elemento.target.classList = "tech"
}

firstLi.addEventListener('click', mudarClasse)
secondLi.addEventListener('click', mudarClasse)
thirdLi.addEventListener('click', mudarClasse)




// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function mudarTexto(valor) {
    document.querySelector(".tech").innerText = valor.target.value
}

input.addEventListener('keyup', mudarTexto)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function abrir() {
  window.location.href = "https://github.com/FelipeBarbozaa"
}

myWebpage.addEventListener('dblclick', abrir)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudarDeCor() {
  document.querySelector("#my-spotrybefy").style = "color: red"
}
document.querySelector("#my-spotrybefy").addEventListener('mouseover', mudarDeCor)

function retornarACor() {
  document.querySelector("#my-spotrybefy").style = "color: white"
}
document.querySelector("#my-spotrybefy").addEventListener('mouseleave', retornarACor)

// Segue abaixo um exemplo do uso de event.target:



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.