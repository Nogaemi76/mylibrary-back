/* eslint-disable prettier/prettier */
import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class AuthorDao extends Model {
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
				author_nickname: {
					type: DataTypes.STRING,
					unique: true,
					validate: {
						len: [3, 50],
					},
				},
				author_lastname: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				author_firstname: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				biography: {
					type: DataTypes.STRING,
					unique: true,
					validate: {
						len: [500, 2000],
					},
				},
				author_type: {
					type: DataTypes.ENUM(
						'Writer',
						'Artist',
						'Colourist',
						'Illustrator',
						'Inker',
						'Penciller',
						'Letterer'
					),
					allowNull: false,
				},
				birth_date: {
					type: DataTypes.DATE,
				},
				death_date: {
					type: DataTypes.DATE,
				},
			},
			{ sequelize, modelName: 'Author' }
		);
	}
	static associate(models) {
		

		return this;
	}
}

AuthorDao.init(db.sequelize);

export default AuthorDao;
