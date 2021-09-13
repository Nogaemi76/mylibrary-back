class SerieEntity {
	constructor({ id, serie_name, total_vol_number }) {
		this.id = id;
		this.serie_name = serie_name;
		this.total_vol_number = total_vol_number;
	}

	validate() {
		return !this.serie_name ? false : true;
	}
}

export default SerieEntity;
