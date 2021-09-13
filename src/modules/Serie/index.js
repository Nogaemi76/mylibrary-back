import { Router } from 'express';

import SerieDao from './serieDao';
import SerieRepository from './serieRepository';
import SerieService from './serieService';
import SerieController from './serieController';
import SerieRouter from './serieRouter';

const router = Router();

const serieRepository = new SerieRepository(SerieDao);
const serieService = new SerieService(serieRepository);
const serieController = new SerieController(serieService);
const serieRouter = new SerieRouter(router, serieController);

export { serieRouter };
