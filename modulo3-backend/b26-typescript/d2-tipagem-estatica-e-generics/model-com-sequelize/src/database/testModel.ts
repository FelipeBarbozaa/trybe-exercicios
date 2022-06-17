import Books from "./models/BookModel"

(async () => {
  const id = '6';
  const title = "Testando";
  const price = '145.90';
  const author = 2;
  const isbn = '8576082674';

  const books = await Books.create({ id, title, price, author, isbn });
  console.table(books);
  process.exit(0);

})();