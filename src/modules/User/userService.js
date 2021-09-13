import UserEntity from './userEntity';

class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	async getAll() {
		const users = await this.userRepository.findAll();
		return users.map((user) => new UserEntity(user));
	}

	async add(userData) {
		const userEntity = new UserEntity(userData);

		//todo : add validators

		await this.userRepository.create(userEntity);
		return userEntity;
	}
}

export default UserService;
