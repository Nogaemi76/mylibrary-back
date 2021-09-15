class WishlistEntity {
	constructor({ id, wishlist_title, total_books }) {
		this.id = id;
		this.wishlist_title = wishlist_title;
		this.total_books = total_books;
	}

	validate() {
		return !this.wishlist_title ? false : true;
	}
}

export default WishlistEntity;
