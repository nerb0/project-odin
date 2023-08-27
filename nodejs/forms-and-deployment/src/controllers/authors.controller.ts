import { body, validationResult } from "express-validator";
import Author from "../models/Author";
import Book from "../models/Book";

const authorFormValidationRules = [
	body("first_name")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("First name must be specified.")
		.isAlphanumeric()
		.withMessage("First name has non-alphanumeric characters."),
	body("family_name")
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage("Family name must be specified.")
		.isAlphanumeric()
		.withMessage("Family name has non-alphanumeric characters."),
	body("date_of_birth", "Invalid date of birth")
		.optional({ values: "falsy" })
		.isISO8601()
		.toDate(),
	body("date_of_death", "Invalid date of death")
		.optional({ values: "falsy" })
		.isISO8601()
		.toDate(),
];

// Display list of all Authors.
const list: RouterHandler = async function (req, res, next) {
	const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
	res.render("author/list", {
		title: "Author List",
		author_list: allAuthors,
	});
};

// Display detail page for a specific Author.
const detail: RouterHandler<":id"> = async function (req, res, next) {
	// Get details of author and all their books (in parallel)
	const [author, allBooksByAuthor] = await Promise.all([
		Author.findById(req.params.id).exec(),
		Book.find({ author: req.params.id }, "title summary").exec(),
	]);

	if (author === null) {
		// No results.
		const err: any = new Error("Author not found");
		err.status = 404;
		return next(err);
	}

	res.render("author/detail", {
		title: "Author Detail",
		author: author,
		author_books: allBooksByAuthor,
	});
};

// Display Author create form on GET.
const create_get: RouterHandler = async function (req, res, next) {
	res.render("author/form", { title: "Create Author" });
};

// Handle Author create on POST.
const create_post: RouterHandler[] = [
	...authorFormValidationRules,
	async (req, res, next) => {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		// Create Author object with escaped and trimmed data
		const author = new Author({
			first_name: req.body.first_name,
			family_name: req.body.family_name,
			date_of_birth: req.body.date_of_birth,
			date_of_death: req.body.date_of_death,
		});

		if (!errors.isEmpty()) {
			// There are errors. Render form again with sanitized values/errors messages.
			res.render("author/form", {
				title: "Create Author",
				author: author,
				errors: errors.array(),
			});
			return;
		} else {
			// Data from form is valid.

			// Save author.
			await author.save();
			// Redirect to new author record.
			res.redirect(author.url);
		}
	},
];

// Display Author delete form on GET.
const delete_get: RouterHandler<":id"> = async function (req, res, next) {
	// Get details of author and all their books (in parallel)
	const [author, allBooksByAuthor] = await Promise.all([
		Author.findById(req.params.id).exec(),
		Book.find({ author: req.params.id }, "title summary").exec(),
	]);

	if (author === null) {
		// No results.
		res.redirect("/catalog/authors");
	}

	res.render("author/delete", {
		title: "Delete Author",
		author: author,
		author_books: allBooksByAuthor,
	});
};

// Handle Author delete on POST.
const delete_post: RouterHandler<":id"> = async function (req, res, next) {
	// Get details of author and all their books (in parallel)
	const [author, allBooksByAuthor] = await Promise.all([
		Author.findById(req.params.id).exec(),
		Book.find({ author: req.params.id }, "title summary").exec(),
	]);

	if (allBooksByAuthor.length > 0) {
		// Author has books. Render in same way as for GET route.
		res.render("author/delete", {
			title: "Delete Author",
			author: author,
			author_books: allBooksByAuthor,
		});
		return;
	} else {
		// Author has no books. Delete object and redirect to the list of authors.
		await Author.findByIdAndRemove(req.body.authorid);
		res.redirect("/catalog/authors");
	}
};

// Display Author update form on GET.
const update_get: RouterHandler<":id"> = async function (req, res, next) {
	const author = await Author.findById(req.params.id).exec();
	res.render("author/form", { title: "Update Author", author });
};

// Handle Author update on POST.
const update_post: RouterHandler<":id">[] = [
	// Validate and sanitize fields.
	...authorFormValidationRules,

	// Process request after validation and sanitization.
	async function (req, res, next) {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		const author = new Author({
			first_name: req.body.first_name,
			family_name: req.body.family_name,
			date_of_birth: req.body.date_of_birth,
			_id: req.params.id,
		});

		if (!errors.isEmpty()) {
			res.render("author/form", { title: "Update Author", author });
		} else {
			// Data from form is valid. Update the record.
			const updatedAuthor = await Author.findByIdAndUpdate(
				req.params.id,
				author,
				{}
			);
			// Redirect to book detail page.
			res.redirect(updatedAuthor!.url);
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
