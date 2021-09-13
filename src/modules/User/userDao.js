/* eslint-disable prettier/prettier */
import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class UserDao extends Model {
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
				user_nickname: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				user_lastname: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				user_firstname: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				password: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
			},
			{ sequelize, modelName: 'User' }
		);
	}
	static associate(models) {
		

		return this;
	}
}

UserDao.init(db.sequelize);

export default UserDao;
