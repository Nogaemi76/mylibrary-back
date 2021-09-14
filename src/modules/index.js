import { bookRouter } from './Book';
import { collectionRouter } from './Collection';
import { userRouter } from './User';
import { authorRouter } from './Author';
import { wishlistRouter } from './Wishlist';

const routes = [
	bookRouter,
	collectionRouter,
	userRouter,
	authorRouter,
	wishlistRouter,
];

export default routes;
