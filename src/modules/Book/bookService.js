import BookEntity from './bookEntity';

class BookService {
	constructor(bookRepository) {
		this.bookRepository = bookRepository;
	}

	async getAll() {
		const books = await this.bookRepository.findAll();
		return books.map((book) => new BookEntity(book));
	}

	async add(bookData) {
		const bookEntity = new BookEntity(bookData);

		//todo : add validators

		await this.bookRepository.create(bookEntity);
		return bookEntity;
	}
}

export default BookService;
