class AuthMiddleware {
	constructor(jwtService) {
		this.jwt = jwtService;
	}

	authenticate = async (req, res, next) => {
		try {
			const token = req.cookies['auth-cookie'];

			if (!token) {
				return res.status(401).json('Accès refusé. Votre session a expiré.');
			}
			const decodedToken = await this.jwt.decodeToken(token);

			req.currentUserId = decodedToken.id;
			next();
		} catch (error) {
			return res.status(401).json("L'authentification a échoué : " + error);
		}
	};
}
export default AuthMiddleware;
