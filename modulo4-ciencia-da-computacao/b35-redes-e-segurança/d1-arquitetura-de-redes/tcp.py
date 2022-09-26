import socket
 
ip = "127.0.0.1"
port = 1234

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((ip, port))
server.listen(5)

while True:
  client, address = server.accept()
  print(f"Connection estabished - {address[0]}:{addres[1]}")
  data = conn.recv(1024)
  conn.sendall(data)
  conn.close()