class AuthorController {
	constructor({ authorService }) {
		this.authorService = authorService;
	}

	getAll = async ({ res, next }) => {
		try {
			let authors = await this.authorService.getAll();
			res.status(200).json(authors);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const author = await this.authorService.add({ ...req.body });
			res.status(201).json(author);
		} catch (error) {
			next(error);
		}
	};
}

export default AuthorController;
