import { Router } from 'express';

import BookDao from './bookDao';
import BookRepository from './bookRepository';
import BookService from './bookService';
import BookController from './bookController';
import BookRouter from './bookRouter';

const router = Router();

const bookRepository = new BookRepository(BookDao);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
const bookRouter = new BookRouter(router, bookController);

export { bookRouter };
