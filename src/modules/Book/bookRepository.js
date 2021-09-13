class BookRepository {
	constructor(bookDao) {
		this.bookDao = bookDao;
	}

	async findAll() {
		return await this.bookDao.findAll();
	}
	async create(bookEntity) {
		return await this.bookDao.create(bookEntity);
	}
}
export default BookRepository;
