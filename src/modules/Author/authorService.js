import AuthorEntity from './authorEntity';

class AuthorService {
	constructor(authorRepository) {
		this.authorRepository = authorRepository;
	}

	async getAllAuthors() {
		const authors = await this.authorRepository.findAllAuthors();
		return authors.map((author) => new AuthorEntity(author));
	}

	async addAuthor(authorData) {
		const authorEntity = new AuthorEntity(authorData);

		//todo : add validators

		await this.authorRepository.createAuthor(authorEntity);
		return authorEntity;
	}

	async getAuthor(authorData) {
		const author = await this.authorRepository.findAuthor(authorData);
		return author;
	}

	async updateAuthor(authorParam, authorData) {
		const author = await this.authorRepository.updateAuthor(
			authorParam,
			authorData
		);
		return author;
	}

	async deleteAuthor(authorParam) {
		const author = await this.authorRepository.deleteAuthor(authorParam);
		return author;
	}
}

export default AuthorService;
