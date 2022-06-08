import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const books = await this.bookService.getById(parseInt(id));
    res.status(StatusCodes.OK).json(books);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const bookCreated = await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json(bookCreated);
  }

  public update = async (req: Request, res: Response) => {
    const book = req.body;
    const { id } = req.params;
    await this.bookService.update(book, parseInt(id));
    res.status(StatusCodes.NO_CONTENT).end();
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.bookService.delete(parseInt(id));
    res.status(StatusCodes.OK).json({ message: 'Book deleted succesfully' });
  }
}

export default BooksController