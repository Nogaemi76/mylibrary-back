import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class BookDao extends Model {
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
				isbn: DataTypes.STRING,
				title: {
					type: DataTypes.STRING,
					allowNull: false,
					unique: true,
					validate: {
						notNull: true,
						len: [3, 50],
					},
				},
				book_type: DataTypes.ENUM(
					'European',
					'Comic',
					'Manga',
					'Manhua',
					'Manhwa'
				),
				book_genre: DataTypes.ENUM(
					'History',
					'Western',
					'Fantasy',
					'Sci-Fi',
					'Action & Adventure',
					'Mystery & Thriller',
					'Horror',
					'Slice of life',
					'War',
					'Humor',
					'Non-fiction',
					'Drama',
					'Comedy',
					'Adaptation',
					'Alternative',
					'Politics'
				),
				is_series: DataTypes.BOOLEAN,
				series_title: DataTypes.STRING,
				volume_number: DataTypes.INTEGER,
				summary: DataTypes.STRING,
				number_of_pages: DataTypes.INTEGER,
				publisher: DataTypes.STRING,
				publication_date: DataTypes.DATE,
				is_published: DataTypes.BOOLEAN,
				original_title: DataTypes.STRING,
				is_original_version: DataTypes.BOOLEAN,
				is_first_edition: DataTypes.BOOLEAN,
			},
			{ sequelize, modelName: 'Book' }
		);
	}
	static associate(models) {
		return this;
	}
}

BookDao.init(db.sequelize);

export default BookDao;
