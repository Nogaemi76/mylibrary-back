import BookEntity from './bookEntity';

class BookService {
	constructor(bookRepository) {
		this.bookRepository = bookRepository;
	}

	async getAllBooks() {
		const books = await this.bookRepository.findAllBooks();
		if (!books) {
			console.log('error in book service');
		} else return books.map((book) => new BookEntity(book));
	}

	async addBook(bookData) {
		const bookEntity = new BookEntity(bookData);

		//todo : add validators

		await this.bookRepository.createBook(bookEntity);
		return bookEntity;
	}

	async getBook(bookData) {
		const book = await this.bookRepository.findBook(bookData);
		return book;
	}

	async updateBook(bookParam, bookData) {
		const book = await this.bookRepository.updateBook(bookParam, bookData);
		return book;
	}

	async deleteBook(bookParam) {
		const book = await this.bookRepository.deleteBook(bookParam);
		return book;
	}
}

export default BookService;
