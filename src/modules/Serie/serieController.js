class SerieController {
	constructor({ serieService }) {
		this.serieService = serieService;
	}

	getAll = async ({ res, next }) => {
		try {
			let serie = await this.serieService.getAll();
			res.status(200).json(serie);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const serie = await this.serieService.add({ ...req.body });
			res.status(201).json(serie);
		} catch (error) {
			next(error);
		}
	};
}

export default SerieController;
