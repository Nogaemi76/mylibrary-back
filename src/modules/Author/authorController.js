class AuthorController {
	constructor(authorService) {
		this.authorService = authorService;
	}

	getAllAuthors = async ({ res, next }) => {
		try {
			let authors = await this.authorService.getAllAuthors();
			res.status(200).json(authors);
		} catch (error) {
			next(error);
		}
	};

	addAuthor = async (req, res, next) => {
		try {
			const author = await this.authorService.addAuthor({ ...req.body });
			res.status(201).json(author);
		} catch (error) {
			next(error);
		}
	};

	getAuthor = async (req, res, next) => {
		try {
			const author = await this.authorService.getAuthor(
				req.params.author_nickname
			);
			res.status(200).json(author);
		} catch (error) {
			next(error);
		}
	};

	updateAuthor = async (req, res, next) => {
		try {
			const author = await this.authorService.updateAuthor(
				req.params.author_nickname,
				{ ...req.body }
			);
			res.status(200).json(author);
		} catch (error) {
			next(error);
		}
	};

	deleteAuthor = async (req, res, next) => {
		try {
			await this.authorService.deleteAuthor(req.params.author_nickname);
			res.status(200).json({ message: 'Auteur supprimé' });
		} catch (error) {
			next(error);
		}
	};
}

export default AuthorController;
