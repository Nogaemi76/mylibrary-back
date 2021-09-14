import bcrypt from 'bcrypt';

class UserRepository {
	constructor(userDao) {
		this.userDao = userDao;
	}

	async findAllUsers() {
		return await this.userDao.findAll({});
	}
	async createUser(userEntity) {
		const salt = bcrypt.genSaltSync(10);
		userEntity.password = bcrypt.hashSync(userEntity.password, salt);
		return await this.userDao.create(userEntity);
	}

	async findUserByEmail(userEntity) {
		return await this.userDao.findOne({ where: { email: userEntity.email } });
	}

	compareHash = async (password, hash) =>
		await bcrypt.compareSync(password, hash);

	async updateUser(email, userEntity) {
		const userToUpdate = await this.userDao.findOne({
			where: { email },
		});
		const userUpdated = await userToUpdate.update(userEntity);
		return userUpdated;
	}

	async deleteUser(email) {
		await this.userDao.destroy({
			where: { email },
		});
	}
}
export default UserRepository;
