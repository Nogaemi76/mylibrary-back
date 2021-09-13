class WishlistRepository {
	constructor(wishlistDao) {
		this.wishlistDao = wishlistDao;
	}

	async findAll() {
		return await this.wishlistDao.findAll();
	}
	async create(wishlistEntity) {
		return await this.wishlistDao.create(wishlistEntity);
	}
}
export default WishlistRepository;
