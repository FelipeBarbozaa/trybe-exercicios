# Dia 2

## O objetivo dos exercicios desse dia foi colocar em prática o que havia aprendido sobre:

- Manipular arrays (listas);
- Utilizar o comando `for` ;

------



1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função `console.log()` ;
2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

1. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
2. Utilizando `for` , descubra qual o maior valor contido no array e imprima-o;
3. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
4. Utilizando `for` , descubra qual o menor valor contido no array e imprima-o;
5. Utilizando `for` , crie um array que vá de 1 até 25 e imprima o resultado;
6. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por `2` .

### Bônus

Para os próximos dois exercícios [leia este artigo ](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/)e tente entender o que está acontencedo no código abaixo:

```javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

1. Ordene o array `numbers` em ordem crescente e imprima seus valores;
2. Ordene o array `numbers` em ordem decrescente e imprima seus valores;
3. Agora crie um novo array a partir do array `numbers` , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array `numbers` multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o `for` e o método `push` . O resultado deve ser o array abaixo:

```javascript
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```
