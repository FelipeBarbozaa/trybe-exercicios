const fatorial = numero => {
  let resultado = numero;
  for (let i = numero - 1; i >= 1; i -= 1) {
    resultado *= i
  }
  return resultado;
}

console.log(fatorial(5))


const fatorial2 = (numero) => (
  numero === 1 ? 1 : numero * fatorial2(numero - 1)
);


console.log(fatorial2(5))