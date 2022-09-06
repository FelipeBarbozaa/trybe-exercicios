def maiorNumero(x, y):
    if (x > y):
        return x
    return y


def media(*numeros):
    total = 0
    for numero in numeros:
        total += numero
    return total / len(numeros)


def exercicio3(x):
    for linha in range(x):
      print("x" * x)

def maiorNome(nomes):
    maior = nomes[0]
    for nome in nomes:
        if len(maior) < len(nome):
            maior = nome
    return maior


def calculoTinta(tamanho):
    

# print(maiorNumero(5, 2))
# print(media(5, 2, 10)) 
# exercicio3(5)
# print(maiorNome(['Felipe', 'Gabriel', 'Lair', 'Pedro']))