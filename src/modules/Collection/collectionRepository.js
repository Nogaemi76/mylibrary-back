class CollectionRepository {
	constructor(collectionDao) {
		this.collectionDao = collectionDao;
	}

	async findAll() {
		return await this.collectionDao.findAll();
	}
	async create(collectionEntity) {
		return await this.collectionDao.create(collectionEntity);
	}
}
export default CollectionRepository;
