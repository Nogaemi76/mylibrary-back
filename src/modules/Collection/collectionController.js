class CollectionController {
	constructor(collectionService) {
		this.collectionService = collectionService;
	}

	getAllCollections = async ({ res, next }) => {
		try {
			let collections = await this.collectionService.getAllCollections();
			res.status(200).json(collections);
		} catch (error) {
			next(error);
		}
	};

	addCollection = async (req, res, next) => {
		try {
			const collection = await this.collectionService.addCollection({
				...req.body,
			});
			res.status(201).json(collection);
		} catch (error) {
			next(error);
		}
	};

	getCollection = async (req, res, next) => {
		try {
			const collection = await this.collectionService.getCollection(
				req.params.collection_title
			);
			res.status(200).json(collection);
		} catch (error) {
			next(error);
		}
	};

	updateCollection = async (req, res, next) => {
		try {
			const collection = await this.collectionService.updateCollection(
				req.params.collection_title,
				{ ...req.body }
			);
			res.status(200).json(collection);
		} catch (error) {
			next(error);
		}
	};

	deleteCollection = async (req, res, next) => {
		try {
			await this.collectionService.deleteCollection(req.params.collection_title);
			res.status(200).json({ message: 'Collection supprimée' });
		} catch (error) {
			next(error);
		}
	};
}

export default CollectionController;
