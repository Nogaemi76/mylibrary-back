class WishlistRouter {
	constructor(router, wishlistController) {
		this.router = router;
		this.initializeRoutes(wishlistController);
		return this.router;
	}
	initializeRoutes(wishlistController) {
		this.router
			.route('/wishlists')
			.get(wishlistController.getAll)
			.post(wishlistController.add);
	}
}
export default WishlistRouter;
