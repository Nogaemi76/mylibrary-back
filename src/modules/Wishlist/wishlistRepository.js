class WishlistRepository {
	constructor(wishlistDao) {
		this.wishlistDao = wishlistDao;
	}

	async findAllWishlists() {
		return await this.wishlistDao.findAll();
	}
	async createWishlist(wishlistEntity) {
		return await this.wishlistDao.create(wishlistEntity);
	}
	async findWishlist(wishlist_name) {
		const wishlist = await this.wishlistDao.findOne({
			where: { wishlist_name },
		});
		return wishlist;
	}

	async updateWishlist(wishlist_name, wishlistEntity) {
		const wishlistToUpdate = await this.wishlistDao.findOne({
			where: { wishlist_name },
		});

		const wishlistUpdated = await wishlistToUpdate.update(wishlistEntity);
		return wishlistUpdated;
	}

	async deleteWishlist(wishlist_name) {
		// const wishlistToDelete = await this.wishlistDao.findOne({
		// 	where: { wishlist_name },
		// });
		// if (!wishlistToDelete) {
		// 	console.log("Cette wishlist n'existe pas dans la base de données.");
		// }
		await this.wishlistDao.destroy({
			where: { wishlist_name },
		});
	}
}
export default WishlistRepository;
