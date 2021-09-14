import CollectionEntity from './collectionEntity';

class CollectionService {
	constructor(collectionRepository) {
		this.collectionRepository = collectionRepository;
	}

	async getAllCollections() {
		const collections = await this.collectionRepository.findAllCollections();
		return collections.map((collection) => new CollectionEntity(collection));
	}

	async addCollection(collectionData) {
		const collectionEntity = new CollectionEntity(collectionData);

		//todo : add validators

		await this.collectionRepository.createCollection(collectionEntity);
		return collectionEntity;
	}

	async getCollection(collectionData) {
		const collection = await this.collectionRepository.findCollection(
			collectionData
		);
		return collection;
	}

	async updateCollection(collectionParam, collectionData) {
		const collection = await this.collectionRepository.updateCollection(
			collectionParam,
			collectionData
		);
		return collection;
	}

	async deleteCollection(collectionParam) {
		const collection = await this.collectionRepository.deleteCollection(
			collectionParam
		);
		return collection;
	}
}

export default CollectionService;
