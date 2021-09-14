class BookRepository {
	constructor(bookDao) {
		this.bookDao = bookDao;
	}

	async findAllBooks() {
		const books = await this.bookDao.findAll();
		console.log('all books', books);
		if (!books) {
			console.log('error in book repo');
		} else return books;
	}

	async findBook(title) {
		const book = await this.bookDao.findOne({
			where: { title },
		});
		return book;
	}

	async createBook(bookEntity) {
		return await this.bookDao.create(bookEntity);
	}

	async updateBook(title, bookEntity) {
		const bookToUpdate = await this.bookDao.findOne({
			where: { title },
		});

		const bookUpdated = await bookToUpdate.update(bookEntity);
		return bookUpdated;
	}

	async deleteBook(title) {
		// const bookToDelete = await this.bookDao.findOne({
		// 	where: { title },
		// });
		// if (!bookToDelete) {
		// 	console.log("Ce livre n'existe pas dans la base de données.");
		// }
		await this.bookDao.destroy({
			where: { title },
		});
	}
}
export default BookRepository;
