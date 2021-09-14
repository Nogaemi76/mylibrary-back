class BookController {
	constructor(bookService) {
		this.bookService = bookService;
	}

	getAllBooks = async ({ res, next }) => {
		try {
			let books = await this.bookService.getAllBooks();
			res.status(200).json(books);
		} catch (error) {
			next(error);
		}
	};

	addBook = async (req, res, next) => {
		try {
			const book = await this.bookService.addBook({ ...req.body });
			res.status(201).json(book);
		} catch (error) {
			next(error);
		}
	};

	getBook = async (req, res, next) => {
		try {
			const book = await this.bookService.getBook(req.params.title);
			res.status(200).json(book);
		} catch (error) {
			next(error);
		}
	};

	updateBook = async (req, res, next) => {
		try {
			const book = await this.bookService.updateBook(req.params.title, {
				...req.body,
			});
			res.status(200).json(book);
		} catch (error) {
			next(error);
		}
	};

	deleteBook = async (req, res, next) => {
		try {
			await this.bookService.deleteBook(req.params.title);
			res.status(200).json({ message: 'Livre supprimé' });
		} catch (error) {
			next(error);
		}
	};
}

export default BookController;
