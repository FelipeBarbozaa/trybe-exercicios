def write_file(path):
  with open(path, mode="w") as file:
    for num in range (0, 10000):
      file.write('{:d}\n'.format(num).zfill(5))

  with open(path, mode="r") as file:
    content = file.read()
    print(content)

if __name__ == "__main__":
  write_file('texto.txt')