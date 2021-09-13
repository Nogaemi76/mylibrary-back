class WishlistController {
	constructor({ wishlistService }) {
		this.wishlistService = wishlistService;
	}

	getAll = async ({ res, next }) => {
		try {
			let wishlists = await this.wishlistService.getAll();
			res.status(200).json(wishlists);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const wishlist = await this.wishlistService.add({ ...req.body });
			res.status(201).json(wishlist);
		} catch (error) {
			next(error);
		}
	};
}

export default WishlistController;
