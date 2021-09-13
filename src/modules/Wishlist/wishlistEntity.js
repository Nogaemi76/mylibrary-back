class WishlistEntity {
	constructor({ id, wishlist_name, number_of_items }) {
		this.id = id;
		this.wishlist_name = wishlist_name;
		this.number_of_items = number_of_items;
	}

	validate() {
		return !this.wishlist_name ? false : true;
	}
}

export default WishlistEntity;
