const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const teste = arrays.reduce((acc, tt) => {
  tt.map((callback) => acc.push(callback))
  return acc
}, []) 

console.log(teste)