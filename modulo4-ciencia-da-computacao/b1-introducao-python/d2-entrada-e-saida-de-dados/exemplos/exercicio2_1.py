# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.

total = 0
err = False

while err == False:
  try:
    total += float(input('Digite um número: '))
  except:
    err = True
    print(f'Valor inválido, a soma total é de: ${total}')
