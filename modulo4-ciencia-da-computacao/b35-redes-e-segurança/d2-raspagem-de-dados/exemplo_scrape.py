import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
  response = requests.get(URL_BASE + next_page_url)
  selector = Selector(text=response.text)
  for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    details_url = product.css(".image_container a::attr(href)").get()
    new_response = requests.get(URL_BASE + details_url)
    new_selector = Selector(text=new_response.text)
    details = new_selector.css("#product_description ~ p::text").get()
    print(details)
    
  next_page_url = selector.css(".next a::attr(href)").get()
  print(next_page_url)