import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class SerieDao extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					type: DataTypes.UUID,
					allowNull: false,
					primaryKey: true,
					defaultValue: DataTypes.UUIDV4,
					validate: {
						notNull: true,
						isUUID: 4,
					},
				},
				serie_name: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				total_vol_number: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{ sequelize, modelName: 'Serie' }
		);
	}
	static associate(models) {

		return this;
	}
}

SerieDao.init(db.sequelize);

export default SerieDao;
