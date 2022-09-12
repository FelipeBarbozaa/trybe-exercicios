import random

words = []
with open("exercicio2.txt", mode="r") as file:
  for row in file:
    words.append(row.strip('\n'))

word_choiced = random.choice(words)
scrambled_word = "".join(random.sample(word_choiced, len(word_choiced)))

print('Uma palavra foi escolhida e embaralhada, você terá 3 chances de acertá-la! ')
tries = 1
while True:
  if tries > 3:
    print('Suas chances acabaram, você perdeu! ')
    print(f'A palavra correta era: {word_choiced}')
    break
  print(f'Palavra: {scrambled_word}')
  answer = input(f"tentativa número {tries}: ")
  if answer == word_choiced:
    print('Parabéns, você acertou! ')
    break
  else:
    tries += 1
    print('Resposta errada! ')
