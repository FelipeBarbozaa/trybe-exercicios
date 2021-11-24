const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const quantidade = names.join().split('').reduce((cum, e) => (e === 'a' || e === 'A')? cum+1: cum+0, 0)
console.log(quantidade)
// retorna 20
