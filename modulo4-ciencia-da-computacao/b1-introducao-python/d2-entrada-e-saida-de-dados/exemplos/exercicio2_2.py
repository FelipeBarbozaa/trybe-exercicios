# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

total = 0
numeros = input('Digite os valores e separe-os com um espaço: ')
numerosSeparados = numeros.split(' ')

for numero in numerosSeparados:
  if numero.isdigit():
    total += int(numero)
  else:
    print(f"Erro ao somar valores, {numero} é um valor inválido")

print(f"A soma total de todos os digitos válidos é de: {total}")