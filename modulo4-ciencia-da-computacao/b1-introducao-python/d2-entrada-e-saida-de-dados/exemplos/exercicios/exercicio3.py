import json
import csv
from rich import print

result = dict()
with open('books.json') as file:
  books = json.load(file)
  for book in books:
    categories = book["categories"]
    for category in categories:
      result[category] = (
        1 + result.get(category, 0)
      )

def export_data(report_data: dict, headers: list):
  with open("report.csv", mode="w") as file:
    csv_writer = csv.writer(file)
    csv_writer.writerow(headers)
    for key, value in report_data.items():
      csv_writer.writerow([key, round(value / len(books), 5)])

export_data(result, ['Livro', 'Porcentagem'])