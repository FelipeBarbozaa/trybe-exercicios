type Book = {
  book: string;
  author: string;
  genre: string;
}

class BooksWishlist {
  private wishList: Book[] = [];
  constructor(book: Book) {
    this.wishList.push(book);
  }

  addToWishlist(book: Book): void {
    this.wishList.push(book);
  }

  showWishlist(): void {
    console.log(this.wishList);
  }
}
const wishlist = new BooksWishlist({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia' });
wishlist.addToWishlist({
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller' });
wishlist.showWishlist();