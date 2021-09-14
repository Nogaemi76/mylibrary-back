import WishlistEntity from './wishlistEntity';

class WishlistService {
	constructor(wishlistRepository) {
		this.wishlistRepository = wishlistRepository;
	}

	async getAllWishlists() {
		const wishlists = await this.wishlistRepository.findAllWishlists();
		return wishlists.map((wishlist) => new WishlistEntity(wishlist));
	}

	async addWishlist(wishlistData) {
		const wishlistEntity = new WishlistEntity(wishlistData);

		//todo : add validators

		await this.wishlistRepository.createWishlist(wishlistEntity);
		return wishlistEntity;
	}

	async getWishlist(wishlistData) {
		const wishlist = await this.wishlistRepository.findWishlist(wishlistData);
		return wishlist;
	}

	async updateWishlist(wishlistParam, wishlistData) {
		const wishlist = await this.wishlistRepository.updateWishlist(
			wishlistParam,
			wishlistData
		);
		return wishlist;
	}

	async deleteWishlist(wishlistParam) {
		const wishlist = await this.wishlistRepository.deleteWishlist(
			wishlistParam
		);
		return wishlist;
	}
}

export default WishlistService;
