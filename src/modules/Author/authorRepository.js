class AuthorRepository {
	constructor(authorDao) {
		this.authorDao = authorDao;
	}

	async findAllAuthors() {
		return await this.authorDao.findAll();
	}
	async createAuthor(authorEntity) {
		return await this.authorDao.create(authorEntity);
	}

	async findAuthor(author_nickname) {
		const author = await this.authorDao.findOne({
			where: { author_nickname },
		});
		return author;
	}

	async updateAuthor(author_nickname, authorEntity) {
		const authorToUpdate = await this.authorDao.findOne({
			where: { author_nickname },
		});

		const authorUpdated = await authorToUpdate.update(authorEntity);
		return authorUpdated;
	}

	async deleteAuthor(author_nickname) {
		// const authorToDelete = await this.authorDao.findOne({
		// 	where: { author_nickname },
		// });
		// if (!authorToDelete) {
		// 	console.log("Cet auteur n'existe pas dans la base de données.");
		// }
		await this.authorDao.destroy({
			where: { author_nickname },
		});
	}
}
export default AuthorRepository;
