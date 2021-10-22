// Função que pega a cor do input e adiciona ao localStorage
document.querySelector(".corDeFundo button").addEventListener("click", function() {
  let valor = document.querySelector(".corDeFundo input").value
  document.getElementsByTagName("body")[0].style.backgroundColor = valor
  localStorage.setItem("corDeFundo", valor)
})


// Função que muda a cor do Texto e adiciona ao localStorage
document.querySelector(".corDeTexto button").addEventListener("click", function() {
  let valor = document.querySelector(".corDeTexto input").value
  document.querySelector(".paragrafo").style.color = valor
  localStorage.setItem("corDeTexto", valor)
})


// Função que muda o tamanho da fonte
document.querySelector(".tamanhoDaFonte button").addEventListener("click", function() {
  let valor = document.querySelector(".tamanhoDaFonte input").value
  valor += "px"
  document.querySelector(".paragrafo").style.fontSize = valor
  localStorage.setItem("tamanhoDaFonte", valor)
})


// Função que adiciona um espaçamento entre as linhas do texto
document.querySelector(".espacamento button").addEventListener("click", function() {
  let valor = document.querySelector(".espacamento input").value
  document.querySelector(".paragrafo").style.lineHeight = valor
  localStorage.setItem("espacamento", valor)
})

//Função que muda o estilo da fonte
document.querySelector(".estiloDaFonte button").addEventListener("click", function() {
  let valor = document.querySelector(".estiloDaFonte input").value
  let fontes = ['Courier New', "monoespace", "sans-serif", 'Franklin Gothic Medium']
  document.querySelector(".paragrafo").style.fontFamily = fontes[parseInt(valor)-1]
  localStorage.setItem("estiloDaFonte", parseInt(valor-1))
})




// Função que deleta o localStorage e atualiza a página
document.getElementsByTagName("h1")[0].addEventListener("dblclick", function() {
  localStorage.clear()
  document.location.reload()
})


// Função que carrega o localStorage
window.onload = function carregar() {
  document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.corDeFundo
  document.querySelector(".paragrafo").style.color = localStorage.corDeTexto
  document.querySelector(".paragrafo").style.fontSize = localStorage.tamanhoDaFonte
  document.querySelector(".paragrafo").style.lineHeight = localStorage.espacamento

  let fontes = ['Courier New', "monoespace", "sans-serif", 'Franklin Gothic Medium']
  document.querySelector(".paragrafo").style.fontFamily = fontes[localStorage.estiloDaFonte]
}



