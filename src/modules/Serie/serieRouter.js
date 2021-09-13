class SerieRouter {
	constructor(router, serieController) {
		this.router = router;
		this.initializeRoutes(serieController);
		return this.router;
	}
	initializeRoutes(serieController) {
		this.router
			.route('/series')
			.get(serieController.getAll)
			.post(serieController.add);
	}
}
export default SerieRouter;
