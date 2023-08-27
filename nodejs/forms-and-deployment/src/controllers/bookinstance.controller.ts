import { body, validationResult } from "express-validator";
import BookInstance from "../models/BookInstance";
import Book from "../models/Book";

// Display list of all BookInstances.
const list: RouterHandler = async function (req, res, next) {
	// Display list of all BookInstances.
	const allBookInstances = await BookInstance.find().populate("book").exec();

	res.render("bookinstance/list", {
		title: "Book Instance List",
		bookinstance_list: allBookInstances,
	});
};

// Display detail page for a specific BookInstance.
const detail: RouterHandler<":id"> = async function (req, res, next) {
	const bookInstance = await BookInstance.findById(req.params.id)
		.populate("book")
		.exec();

	if (bookInstance === null) {
		// No results.
		const err: any = new Error("Book copy not found");
		err.status = 404;
		return next(err);
	}

	res.render("bookinstance/detail", {
		title: "Book:",
		bookinstance: bookInstance,
	});
};

// Display BookInstance create form on GET.
const create_get: RouterHandler = async function (req, res, next) {
	const allBooks = await Book.find({}, "title").exec();

	res.render("bookinstance/form", {
		title: "Create BookInstance",
		book_list: allBooks,
	});
};

// Handle BookInstance create on POST.
const create_post: RouterHandler[] = [
	// Validate and sanitize fields.
	body("book", "Book must be specified").trim().isLength({ min: 1 }).escape(),
	body("imprint", "Imprint must be specified")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("status").escape(),
	body("due_back", "Invalid date")
		.optional({ values: "falsy" })
		.isISO8601()
		.toDate(),

	// Process request after validation and sanitization.
	async function (req, res, next) {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		// Create a BookInstance object with escaped and trimmed data.
		const bookInstance = new BookInstance({
			book: req.body.book,
			imprint: req.body.imprint,
			status: req.body.status,
			due_back: req.body.due_back,
		});

		if (!errors.isEmpty()) {
			// There are errors.
			// Render form again with sanitized values and error messages.
			const allBooks = await Book.find({}, "title").exec();

			res.render("bookinstance_form", {
				title: "Create BookInstance",
				book_list: allBooks,
				selected_book: bookInstance.book._id,
				errors: errors.array(),
				bookinstance: bookInstance,
			});
			return;
		} else {
			// Data from form is valid
			await bookInstance.save();
			res.redirect(bookInstance.url);
		}
	},
];

// Display BookInstance delete form on GET.
const delete_get: RouterHandler<":id"> = async function (req, res, next) {
	// Get details of author and all their books (in parallel)
	const bookinstance = await BookInstance.findById(req.params.id).exec();

	if (bookinstance === null) {
		// No results.
		res.redirect("/catalog/bookinstances");
	}

	res.render("bookinstance/delete", {
		title: "Delete Book Instance",
		bookinstance,
	});
};

// Handle BookInstance delete on POST.
const delete_post: RouterHandler<":id"> = async function (req, res, next) {
	await BookInstance.findByIdAndRemove(req.body.bookinstanceid);
	res.redirect("/catalog/bookinstances");
};

// Display BookInstance update form on GET.
const update_get: RouterHandler<":id"> = async function (req, res, next) {
	const [bookinstance, book_list] = await Promise.all([
		BookInstance.findById(req.params.id).exec(),
		Book.find({}, "title").exec(),
	]);

	res.render("bookinstance/form", {
		title: "Update Book Instance",
		book_list,
		bookinstance,
	});
};

// Handle bookinstance update on POST.
const update_post: RouterHandler<":id">[] = [
	// Validate and sanitize fields.
	body("imprint", "Imprint must not be empty.")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("status", "Status must not be empty.")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("status", "Status must not be empty.")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("due_back", "Due date must be a valid date")
		.optional({ nullable: true, checkFalsy: true })
		.isISO8601()
		.toDate(),

	// Process request after validation and sanitization.
	async function (req, res, next) {
		// Extract the validation errors from a request.
		const errors = validationResult(req);

		const book_list = await Book.find({}, "title").exec();
		const bookinstance = new BookInstance({
			imprint: req.body.imprint,
			status: req.body.status,
			due_back: req.body.due_back ? new Date(req.body.due_back) : undefined,
			_id: req.params.id,
		});

		if (!errors.isEmpty()) {
			res.render("bookinstance/form", {
				title: "Update Book Instance",
				bookinstance,
				book_list,
				errors: errors.array(),
			});
		} else {
			// Data from form is valid. Update the record.
			const updatedInstance = await BookInstance.findByIdAndUpdate(
				req.params.id,
				bookinstance,
				{}
			);
			// Redirect to book detail page.
			res.redirect(updatedInstance!.url);
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
