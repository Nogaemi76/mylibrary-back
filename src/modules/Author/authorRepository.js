class AuthorRepository {
	constructor(authorDao) {
		this.authorDao = authorDao;
	}

	async findAll() {
		return await this.authorDao.findAll();
	}
	async create(authorEntity) {
		return await this.authorDao.create(authorEntity);
	}
}
export default AuthorRepository;
