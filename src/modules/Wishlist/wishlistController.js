class WishlistController {
	constructor(wishlistService) {
		this.wishlistService = wishlistService;
	}

	getAllWishlists = async ({ res, next }) => {
		try {
			let wishlists = await this.wishlistService.getAllWishlists();
			res.status(200).json(wishlists);
		} catch (error) {
			next(error);
		}
	};

	addWishlist = async (req, res, next) => {
		try {
			const wishlist = await this.wishlistService.addWishlist({ ...req.body });
			res.status(201).json(wishlist);
		} catch (error) {
			next(error);
		}
	};

	getWishlist = async (req, res, next) => {
		try {
			const wishlist = await this.wishlistService.getWishlist(
				req.params.wishlist_title
			);
			res.status(200).json(wishlist);
		} catch (error) {
			next(error);
		}
	};

	updateWishlist = async (req, res, next) => {
		try {
			const wishlist = await this.wishlistService.updateWishlist(
				req.params.wishlist_title,
				{ ...req.body }
			);
			res.status(200).json(wishlist);
		} catch (error) {
			next(error);
		}
	};

	deleteWishlist = async (req, res, next) => {
		try {
			await this.wishlistService.deleteWishlist(req.params.wishlist_title);
			res.status(200).json({ message: 'Wishlist supprimée' });
		} catch (error) {
			next(error);
		}
	};
}

export default WishlistController;
