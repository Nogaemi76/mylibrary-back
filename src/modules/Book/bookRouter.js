class BookRouter {
	constructor(router, bookController) {
		this.router = router;
		this.initializeRoutes(bookController);
		return this.router;
	}
	initializeRoutes(bookController) {
		this.router
			.route('/books')
			.get(bookController.getAll)
			.post(bookController.add);
	}
}
export default BookRouter;
