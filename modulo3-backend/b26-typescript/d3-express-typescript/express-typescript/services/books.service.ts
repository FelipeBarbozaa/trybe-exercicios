import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { NotFoundError } from 'restify-errors';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  //tentando
  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }
  //tentando

  public async create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(book: Book, id: number) {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }
    return this.model.update(book, id);
  }

  public async delete(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }
    await this.model.delete(id);
  }
}

export default BookService;