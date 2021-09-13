import { Router } from 'express';

import AuthorDao from './authorDao';
import AuthorRepository from './authorRepository';
import AuthorService from './authorService';
import AuthorController from './authorController';
import AuthorRouter from './authorRouter';

const router = Router();

const authorRepository = new AuthorRepository(AuthorDao);
const authorService = new AuthorService(authorRepository);
const authorController = new AuthorController(authorService);
const authorRouter = new AuthorRouter(router, authorController);

export { authorRouter };
