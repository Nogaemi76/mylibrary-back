class BookRouter {
	constructor(router, bookController) {
		this.router = router;
		this.initializeRoutes(bookController);
		return this.router;
	}
	initializeRoutes(bookController) {
		this.router
			.route('/books')
			.get(bookController.getAllBooks)
			.post(bookController.addBook);

		this.router
			.route('/books/:title')
			.get(bookController.getBook)
			.put(bookController.updateBook)
			.delete(bookController.deleteBook);
	}
}
export default BookRouter;
