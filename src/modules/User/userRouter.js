class UserRouter {
	constructor(router, auth, userController) {
		this.router = router;
		this.initializeRoutes(auth, userController);
		return this.router;
	}
	initializeRoutes(auth, userController) {
		this.router
			.route('/users')
			.get(auth.authenticate, userController.getAllUsers)
			.post(userController.register);

		this.router.route('/users/authenticate').post(userController.login);

		this.router
			.route('/users/:email')
			.put(auth.authenticate, userController.updateUser)
			.delete(auth.authenticate, userController.deleteUser);
	}
}
export default UserRouter;
