def write_file(path):
  file = open(path, mode="w")
  for num in range (0, 10000):
    file.write('{:d}\n'.format(num).zfill(5))
  file.close()

  file = open("texto.txt", mode="r")
  content = file.read()
  print(content)
  file.close()

if __name__ == "__main__":
  write_file('texto.txt')