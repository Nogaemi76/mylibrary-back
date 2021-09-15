import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class CollectionDao extends Model {
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
				collection_title: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				total_books: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				user_id: {
					type: DataTypes.UUID,
					references: {
						model: 'Users',
						key: 'id',
					},
				},
			},
			{ sequelize, modelName: 'Collection' }
		);
	}
	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
		return this;
	}
}

CollectionDao.init(db.sequelize);

export default CollectionDao;
