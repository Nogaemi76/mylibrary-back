import { Router } from 'express';

import WishlistDao from './wishlistDao';
import WishlistRepository from './wishlistRepository';
import WishlistService from './wishlistService';
import WishlistController from './wishlistController';
import WishlistRouter from './wishlistRouter';

const router = Router();

const wishlistRepository = new WishlistRepository(WishlistDao);
const wishlistService = new WishlistService(wishlistRepository);
const wishlistController = new WishlistController(wishlistService);
const wishlistRouter = new WishlistRouter(router, wishlistController);

export { wishlistRouter };
