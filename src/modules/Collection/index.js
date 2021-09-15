import { Router } from 'express';
import { jwtService } from '../../libs';
import { auth } from '../../middlewares';

import CollectionDao from './collectionDao';
import CollectionRepository from './collectionRepository';
import CollectionService from './collectionService';
import CollectionController from './collectionController';
import CollectionRouter from './collectionRouter';

const router = Router();

const collectionRepository = new CollectionRepository(CollectionDao);
const collectionService = new CollectionService(collectionRepository);
const collectionController = new CollectionController(
	collectionService,
	jwtService
);
const collectionRouter = new CollectionRouter(
	router,
	auth,
	collectionController
);

export { collectionRouter };
