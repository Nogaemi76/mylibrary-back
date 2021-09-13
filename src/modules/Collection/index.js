import { Router } from 'express';

import CollectionDao from './collectionDao';
import CollectionRepository from './collectionRepository';
import CollectionService from './collectionService';
import CollectionController from './collectionController';
import CollectionRouter from './collectionRouter';

const router = Router();

const collectionRepository = new CollectionRepository(CollectionDao);
const collectionService = new CollectionService(collectionRepository);
const collectionController = new CollectionController(collectionService);
const collectionRouter = new CollectionRouter(router, collectionController);

export { collectionRouter };
