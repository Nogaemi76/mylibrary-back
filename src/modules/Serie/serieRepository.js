class SerieRepository {
	constructor(serieDao) {
		this.serieDao = serieDao;
	}

	async findAll() {
		return await this.serieDao.findAll();
	}
	async create(serieEntity) {
		return await this.serieDao.create(serieEntity);
	}
}
export default SerieRepository;
