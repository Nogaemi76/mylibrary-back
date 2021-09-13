import SerieEntity from './serieEntity';

class SerieService {
	constructor(serieRepository) {
		this.serieRepository = serieRepository;
	}

	async getAll() {
		const series = await this.serieRepository.findAll();
		return series.map((serie) => new SerieEntity(serie));
	}

	async add(serieData) {
		const serieEntity = new SerieEntity(serieData);

		//todo : add validators

		await this.serieRepository.create(serieEntity);
		return serieEntity;
	}
}

export default SerieService;
