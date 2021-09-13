import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class WishlistDao extends Model {
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
				wishlist_name: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				number_of_items: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{ sequelize, modelName: 'Wishlist' }
		);
	}
	static associate(models) {

		return this;
	}
}

WishlistDao.init(db.sequelize);

export default WishlistDao;
