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
	async findWishlist(wishlist_title) {
		const wishlist = await this.wishlistDao.findOne({
			where: { wishlist_title },
		});
		return wishlist;
	}

	async updateWishlist(wishlist_title, wishlistEntity) {
		const wishlistToUpdate = await this.wishlistDao.findOne({
			where: { wishlist_title },
		});

		const wishlistUpdated = await wishlistToUpdate.update(wishlistEntity);
		return wishlistUpdated;
	}

	async deleteWishlist(wishlist_title) {
		// const wishlistToDelete = await this.wishlistDao.findOne({
		// 	where: { wishlist_title },
		// });
		// if (!wishlistToDelete) {
		// 	console.log("Cette wishlist n'existe pas dans la base de données.");
		// }
		await this.wishlistDao.destroy({
			where: { wishlist_title },
		});
	}
}
export default WishlistRepository;
