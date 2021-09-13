class CollectionController {
	constructor({ collectionService }) {
		this.collectionService = collectionService;
	}

	getAll = async ({ res, next }) => {
		try {
			let collections = await this.collectionService.getAll();
			res.status(200).json(collections);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const collection = await this.collectionService.add({ ...req.body });
			res.status(201).json(collection);
		} catch (error) {
			next(error);
		}
	};
}

export default CollectionController;
