import { bookRouter } from './Book';
import { collectionRouter } from './Collection';
import { userRouter } from './User';
import { authorRouter } from './Author';
import { serieRouter } from './Serie';
import { wishlistRouter } from './Wishlist';

const routes = [
	bookRouter,
	collectionRouter,
	userRouter,
	authorRouter,
	serieRouter,
	wishlistRouter,
];

export default routes;
