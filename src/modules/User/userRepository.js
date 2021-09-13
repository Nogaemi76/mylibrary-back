class UserRepository {
	constructor(userDao) {
		this.userDao = userDao;
	}

	async findAll() {
		return await this.userDao.findAll();
	}
	async create(userEntity) {
		return await this.userDao.create(userEntity);
	}
}
export default UserRepository;
