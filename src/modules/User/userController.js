class UserController {
	constructor({ userService }) {
		this.userService = userService;
	}

	getAll = async ({ res, next }) => {
		try {
			let users = await this.userService.getAll();
			res.status(200).json(users);
		} catch (error) {
			next(error);
		}
	};

	add = async (req, res, next) => {
		try {
			const user = await this.userService.add({ ...req.body });
			res.status(201).json(user);
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
