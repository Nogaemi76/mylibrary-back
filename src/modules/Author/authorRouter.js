class AuthorRouter {
	constructor(router, authorController) {
		this.router = router;
		this.initializeRoutes(authorController);
		return this.router;
	}
	initializeRoutes(authorController) {
		this.router
			.route('/authors')
			.get(authorController.getAllAuthors)
			.post(authorController.addAuthor);

		this.router
			.route('/authors/:author_nickname')
			.get(authorController.getAuthor)
			.put(authorController.updateAuthor)
			.delete(authorController.deleteAuthor);
	}
}
export default AuthorRouter;
