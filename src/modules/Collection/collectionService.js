import CollectionEntity from './collectionEntity';

class CollectionService {
	constructor(collectionRepository) {
		this.collectionRepository = collectionRepository;
	}

	async getAll() {
		const collections = await this.collectionRepository.findAll();
		return collections.map((collection) => new CollectionEntity(collection));
	}

	async add(collectionData) {
		const collectionEntity = new CollectionEntity(collectionData);

		//todo : add validators

		await this.collectionRepository.create(collectionEntity);
		return collectionEntity;
	}
}

export default CollectionService;
