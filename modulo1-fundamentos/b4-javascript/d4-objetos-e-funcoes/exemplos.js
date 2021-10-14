function maior(array){
  valorInicial = array[0]
  for(let index = 0; index<array.length; index +=1){
    if(valorInicial < array[index]){
      valorInicial = array[index]
    }
  }
  return array.indexOf(valorInicial)
}
console.log(maior([200, 2, 10, 900, 20, 2, 30, 50, 100, 5, 7]))