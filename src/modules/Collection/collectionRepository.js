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

	async findCollection(collection_title) {
		const collection = await this.collectionDao.findOne({
			where: { collection_title },
		});
		return collection;
	}

	async findCollectionByUserId(user_id) {
		const collection = await this.collectionDao.findAll({
			where: { user_id },
		});
		return collection;
	}

	async updateCollection(collection_title, collectionEntity) {
		const collectionToUpdate = await this.collectionDao.findOne({
			where: { collection_title },
		});

		const collectionUpdated = await collectionToUpdate.update(collectionEntity);
		return collectionUpdated;
	}

	async deleteCollection(collection_title) {
		// const collectionToDelete = await this.collectionDao.findOne({
		// 	where: { collection_title },
		// });
		// if (!collectionToDelete) {
		// 	console.log("Cette collection n'existe pas dans la base de données.");
		// }
		await this.collectionDao.destroy({
			where: { collection_title },
		});
	}
}
export default CollectionRepository;
