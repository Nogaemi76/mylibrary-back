class WishlistRouter {
	constructor(router, wishlistController) {
		this.router = router;
		this.initializeRoutes(wishlistController);
		return this.router;
	}
	initializeRoutes(wishlistController) {
		this.router
			.route('/wishlists')
			.get(wishlistController.getAllWishlists)
			.post(wishlistController.addWishlist);

		this.router
			.route('/wishlists/:wishlist_title')
			.get(wishlistController.getWishlist)
			.put(wishlistController.updateWishlist)
			.delete(wishlistController.deleteWishlist);
	}
}
export default WishlistRouter;
