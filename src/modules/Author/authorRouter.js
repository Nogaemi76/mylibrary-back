class AuthorRouter {
	constructor(router, authorController) {
		this.router = router;
		this.initializeRoutes(authorController);
		return this.router;
	}
	initializeRoutes(authorController) {
		this.router
			.route('/authors')
			.get(authorController.getAll)
			.post(authorController.add);
	}
}
export default AuthorRouter;
