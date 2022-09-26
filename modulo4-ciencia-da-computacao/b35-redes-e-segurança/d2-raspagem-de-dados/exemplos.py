import requests

for x in range(15):
    request = requests.get("https://www.novalrb.com.br/")
    print(request.status_code)