class CollectionRouter {
	constructor(router, collectionController) {
		this.router = router;
		this.initializeRoutes(collectionController);
		return this.router;
	}
	initializeRoutes(collectionController) {
		this.router
			.route('/collections')
			.get(collectionController.getAll)
			.post(collectionController.add);
	}
}
export default CollectionRouter;
