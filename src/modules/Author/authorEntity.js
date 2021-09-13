class AuthorEntity {
	constructor({
		author_nickname,
		author_lastname,
		author_firstname,
		biography,
		author_type,
		birth_date,
		death_date,
	}) {
		this.author_nickname = author_nickname;
		this.author_lastname = author_lastname;
		this.author_firstname = author_firstname;
		this.biography = biography;
		this.author_type = author_type;
		this.birth_date = birth_date;
		this.death_date = death_date;
	}
}

export default AuthorEntity;
