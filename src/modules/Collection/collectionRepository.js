class CollectionRepository {
	constructor(collectionDao) {
		this.collectionDao = collectionDao;
	}

	async findAllCollections() {
		return await this.collectionDao.findAll();
	}
	async createCollection(collectionEntity) {
		return await this.collectionDao.create(collectionEntity);
	}

	async findCollection(collection_name) {
		const collection = await this.collectionDao.findOne({
			where: { collection_name },
		});
		return collection;
	}

	async updateCollection(collection_name, collectionEntity) {
		const collectionToUpdate = await this.collectionDao.findOne({
			where: { collection_name },
		});

		const collectionUpdated = await collectionToUpdate.update(collectionEntity);
		return collectionUpdated;
	}

	async deleteCollection(collection_name) {
		// const collectionToDelete = await this.collectionDao.findOne({
		// 	where: { collection_name },
		// });
		// if (!collectionToDelete) {
		// 	console.log("Cette collection n'existe pas dans la base de données.");
		// }
		await this.collectionDao.destroy({
			where: { collection_name },
		});
	}
}
export default CollectionRepository;
