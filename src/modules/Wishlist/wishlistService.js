import WishlistEntity from './wishlistEntity';

class WishlistService {
	constructor(wishlistRepository) {
		this.wishlistRepository = wishlistRepository;
	}

	async getAll() {
		const wishlists = await this.wishlistRepository.findAll();
		return wishlists.map((wishlist) => new WishlistEntity(wishlist));
	}

	async add(wishlistData) {
		const wishlistEntity = new WishlistEntity(wishlistData);

		//todo : add validators

		await this.wishlistRepository.create(wishlistEntity);
		return wishlistEntity;
	}
}

export default WishlistService;
