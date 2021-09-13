import AuthorEntity from './authorEntity';

class AuthorService {
	constructor(authorRepository) {
		this.authorRepository = authorRepository;
	}

	async getAll() {
		const authors = await this.authorRepository.findAll();
		return authors.map((author) => new AuthorEntity(author));
	}

	async add(authorData) {
		const authorEntity = new AuthorEntity(authorData);

		//todo : add validators

		await this.authorRepository.create(authorEntity);
		return authorEntity;
	}
}

export default AuthorService;
