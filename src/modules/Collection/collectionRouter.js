class CollectionRouter {
	constructor(router, auth, collectionController) {
		this.router = router;
		this.initializeRoutes(auth, collectionController);
		return this.router;
	}
	initializeRoutes(auth, collectionController) {
		this.router
			.route('/collections')
			.get(auth.authenticate, collectionController.getAllCollections)
			.post(auth.authenticate, collectionController.addCollection);

		this.router
			.route('/collections/:collection_title')
			.get(auth.authenticate, collectionController.getCollection)
			.put(auth.authenticate, collectionController.updateCollection)
			.delete(auth.authenticate, collectionController.deleteCollection);
	}
}
export default CollectionRouter;
