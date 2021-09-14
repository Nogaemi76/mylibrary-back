class UserController {
	constructor(userService, jwtService) {
		this.userService = userService;
		this.jwtService = jwtService;
	}

	getAllUsers = async ({ res, next }) => {
		try {
			let users = await this.userService.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	register = async (req, res, next) => {
		try {
			const user = await this.userService.register({ ...req.body });
			res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	};

	login = async (req, res, next) => {
		try {
			const user = await this.userService.login({ ...req.body });
			const token = await this.jwtService.generateToken({ id: user.id });
			res.cookie('auth-cookie', token, { expire: 3600 });
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};

	updateUser = async (req, res, next) => {
		try {
			const user = await this.userService.updateUser(req.params.email, {
				...req.body,
			});
			res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	};
	deleteUser = async (req, res, next) => {
		try {
			await this.userService.deleteUser(req.params.email);
			res.status(200).json({ message: 'Utilisateur supprimé' });
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
