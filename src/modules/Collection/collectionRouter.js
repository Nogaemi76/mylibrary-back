class CollectionRouter {
	constructor(router, collectionController) {
		this.router = router;
		this.initializeRoutes(collectionController);
		return this.router;
	}
	initializeRoutes(collectionController) {
		this.router
			.route('/collections')
			.get(collectionController.getAllCollections)
			.post(collectionController.addCollection);

		this.router
			.route('/collections/:collection_title')
			.get(collectionController.getCollection)
			.put(collectionController.updateCollection)
			.delete(collectionController.deleteCollection);
	}
}
export default CollectionRouter;
