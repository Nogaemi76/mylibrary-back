class CollectionEntity {
	constructor({ id, collection_name, number_of_items }) {
		this.id = id;
		this.collection_name = collection_name;
		this.number_of_items = number_of_items;
	}

	validate() {
		return !this.collection_name ? false : true;
	}
}

export default CollectionEntity;
