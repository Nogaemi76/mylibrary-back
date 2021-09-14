import UserEntity from './userEntity';

class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	async getAllUsers() {
		const users = await this.userRepository.findAllUsers();
		return users.map((user) => new UserEntity(user));
	}

	async register(userData) {
		const userEntity = new UserEntity(userData);

		if (!userEntity.validate()) {
			console.log("Le mot de passe et/ou l'email sont manquants.");
		}

		const newUser = await this.userRepository.createUser(userEntity);
		return new UserEntity(newUser);
	}

	async login(userData) {
		const userEntity = new UserEntity(userData);

		if (!userEntity.validate()) {
			console.log("Le mot de passe et/ou l'email sont manquants.");
		}

		const user = await this.userRepository.findUserByEmail(userEntity);
		if (!user) {
			console.log("Cet utilisateur n'existe pas.");
		}
		const passwordMatch = await this.userRepository.compareHash(
			userEntity.password,
			user.password
		);
		if (!passwordMatch) {
			console.log('Le mot de passe est faux');
		}
		return new UserEntity(user);
	}

	async updateUser(userParam, userData) {
		const user = await this.userRepository.updateUser(userParam, userData);
		return user;
	}

	async deleteUser(userParam) {
		const user = await this.userRepository.deleteUser(userParam);
		return user;
	}
}

export default UserService;
