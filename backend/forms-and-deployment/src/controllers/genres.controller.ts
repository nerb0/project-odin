import { body, validationResult } from "express-validator";
import Book from "../models/Book";
import Genre from "../models/Genre";

// Display list of all Genre.
const list: RouterHandler = async (req, res, next) => {
	const allGenres = await Genre.find().sort({ name: 1 }).exec();
	res.render("genre/list", {
		title: "Genre List",
		genre_list: allGenres,
	});
};

// Display detail page for a specific Genre.
const detail: RouterHandler<":id"> = async (req, res, next) => {
	// Get details of genre and all associated books (in parallel)
	const [genre, booksInGenre] = await Promise.all([
		Genre.findById(req.params.id).exec(),
		Book.find({ genre: req.params.id }, "title summary").exec(),
	]);

	if (genre === null) {
		// No results.
		const err: any = new Error("Genre not found");
		err.status = 404;
		return next(err);
	}

	res.render("genre/detail", {
		title: "Genre Detail",
		genre: genre,
		genre_books: booksInGenre,
	});
};

// Display Genre create form on GET.
const create_get: RouterHandler = async (req, res, next) => {
	res.render("genre/form", { title: "Create Genre" });
};

// Handle Genre create on POST.
const create_post: RouterHandler[] = [
	body("name", "Genre name must contain at least 3 characters")
		.trim()
		.isLength({ min: 3 })
		.escape(),
	async (req, res, next) => {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		// Create a genre object with escaped and trimmed data.
		const genre = new Genre({ name: req.body.name });

		if (!errors.isEmpty()) {
			// There are errors. Render the form again with sanitized values/error messages.
			res.render("genre/form", {
				title: "Create Genre",
				genre: genre,
				errors: errors.array(),
			});
			return;
		} else {
			// Data from form is valid.
			// Check if Genre with same name already exists.
			const genreExists = await Genre.findOne({ name: req.body.name })
				.collation({ locale: "en", strength: 2 })
				.exec();
			if (genreExists) {
				// Genre exists, redirect to its detail page.
				res.redirect(genreExists.url);
			} else {
				await genre.save();
				// New genre saved. Redirect to genre detail page.
				res.redirect(genre.url);
			}
		}
	},
];

// Display Genre delete form on GET.
const delete_get: RouterHandler<":id"> = async (req, res, next) => {
	// Get details of author and all their books (in parallel)
	const [genre, genre_books] = await Promise.all([
		Genre.findById(req.params.id).exec(),
		Book.find({ genre: req.params.id }, "title summary").exec(),
	]);

	if (genre === null) {
		// No results.
		res.redirect("/catalog/genres");
	}

	res.render("genre/delete", {
		title: "Delete Genre",
		genre,
		genre_books,
	});
};

// Handle Genre delete on POST.
const delete_post: RouterHandler<":id"> = async (req, res, next) => {
	// Get details of author and all their books (in parallel)
	const [genre, genre_books] = await Promise.all([
		Genre.findById(req.params.id).exec(),
		Book.find({ author: req.params.id }, "title summary").exec(),
	]);

	if (genre_books.length > 0) {
		// Author has books. Render in same way as for GET route.
		res.render("genre/delete", {
			title: "Delete Genre",
			genre,
			genre_books,
		});
		return;
	} else {
		// Author has no books. Delete object and redirect to the list of authors.
		await Genre.findByIdAndRemove(req.body.authorid);
		res.redirect("/catalog/genres");
	}
};

// Display Genre update form on GET.
const update_get: RouterHandler<":id"> = async (req, res, next) => {
	const genre = await Genre.findById(req.params.id).exec();

	if (genre === null) {
		// No results.
		const err: any = new Error("Genre not found");
		err.status = 404;
		return next(err);
	}
	res.render("genre/form", { title: "Update Genre", genre });
};

// Handle Genre update on POST.
const update_post: RouterHandler<":id">[] = [
	// Validate and sanitize fields.
	body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
	// Process request after validation and sanitization.
	async function (req, res, next) {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		const genre = new Genre({
			name: req.body.name,
			_id: req.params.id,
		});

		if (!errors.isEmpty()) {
			res.render("genre/form", { title: "Update Genre", genre });
		} else {
			// Data from form is valid. Update the record.
			const updatedGenre = await Genre.findByIdAndUpdate(
				req.params.id,
				genre,
				{}
			);
			// Redirect to book detail page.
			res.redirect(updatedGenre!.url);
		}
	},
];

export default {
	list,
	detail,
	create_get,
	create_post,
	delete_get,
	delete_post,
	update_get,
	update_post,
};
