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
			const req_body = req.body;
			req_body.user_id = req.currentUserId;
			const collection = await this.collectionService.addCollection({
				...req_body,
			});
			console.log('req.currentUserId', req.currentUserId);
			console.log('req.body', req.body);
			res.status(201).json(collection);
			console.log('collection', collection);
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
	getCollectionByUserId = async (req, res, next) => {
		try {
			// console.log('req.params.user_id', req.params.user_id);
			// console.log('req.params', req.params);
			const collection = await this.collectionService.getCollectionByUserId(
				req.params.user_id
			);
			// console.log('collection', collection);

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
			await this.collectionService.deleteCollection(
				req.params.collection_title
			);
			res.status(200).json({ message: 'Collection supprimée' });
		} catch (error) {
			next(error);
		}
	};
}

export default CollectionController;
