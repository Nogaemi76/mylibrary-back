class CollectionEntity {
	constructor({ id, collection_title, total_books, user_id }) {
		this.id = id;
		this.collection_title = collection_title;
		this.total_books = total_books;
		this.user_id = user_id;
	}

	validate() {
		return !this.collection_title ? false : true;
	}
}

export default CollectionEntity;
