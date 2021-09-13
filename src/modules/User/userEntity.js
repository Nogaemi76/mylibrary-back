class UserEntity {
	constructor({
		id,
		user_nickname,
		user_lastname,
		user_firstname,
		email,
		password,
	}) {
		this.id = id;
		this.user_nickname = user_nickname;
		this.user_lastname = user_lastname;
		this.user_firstname = user_firstname;
		this.email = email;
		this.password = password;
	}
}

export default UserEntity;
