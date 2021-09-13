class BookEntity {
	constructor({
		id,
		isbn,
		title,
		book_type,
		book_genre,
		is_series,
		series_title,
		volume_number,
		summary,
		number_of_pages,
		publisher,
		publication_date,
		is_published,
		original_title,
		is_original_version,
		is_first_edition,
	}) {
		this.id = id;
		this.isbn = isbn;
		this.title = title;
		this.book_type = book_type;
		this.book_genre = book_genre;
		this.is_series = is_series;
		this.series_title = series_title;
		this.volume_number = volume_number;
		this.summary = summary;
		this.number_of_pages = number_of_pages;
		this.publisher = publisher;
		this.publication_date = publication_date;
		this.is_published = is_published;
		this.original_title = original_title;
		this.is_original_version = is_original_version;
		this.is_first_edition = is_first_edition;
	}

	validate() {
		return !this.title ? false : true;
	}
}

export default BookEntity;
