/*Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .*/

console.log(document.querySelector("#elementoOndeVoceEsta"))
document.querySelector("#elementoOndeVoceEsta").parentElement.style = "color: red"
document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerText = "Adicionando um texto"
console.log(document.querySelector("#pai").firstElementChild)
console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling)
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling)
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling)
console.log(document.querySelector("#pai").firstElementChild.nextElementSibling.nextElementSibling)

/* Crie um irmão para elementoOndeVoceEsta .
Crie um filho para elementoOndeVoceEsta .
Crie um filho para primeiroFilhoDoFilho .
A partir desse filho criado, acesse terceiroFilho .

let posicao = document.querySelector("#pai")
let irmao = document.createElement('section')
posicao.appendChild(irmao)

*/

document.querySelector("#pai").appendChild(document.createElement('p'))

document.querySelector("#elementoOndeVoceEsta").appendChild(document.createElement('p'))

document.querySelector("#primeiroFilhoDoFilho").appendChild(document.createElement('p'))

console.log(document.querySelector("#primeiroFilhoDoFilho p").parentElement.parentElement.nextElementSibling)