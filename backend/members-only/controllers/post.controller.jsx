import { body, validationResult } from "express-validator";
import { handle_response_error } from "./session.controller";
import { Post } from "~/models/Post";
import {
	PostCreateInput,
	PostDashboardView,
	PostList,
	PostListFetcher,
} from "~/views/components/Post";
import { SuccessMessage } from "~/views/components/Message";
import { get_request_field } from "~/helpers/util";

/** @type {import("express").RequestHandler[]}*/
export const handle_create_post = [
	body("title").notEmpty().withMessage("Title is required."),
	body("message").notEmpty().withMessage("Message is required."),
	async function handle_create_message(req, res) {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const errors = validationResult(req);
		if (!errors.isEmpty())
			return handle_response_error(res, {
				messages: errors.array().map((error) => error.msg),
			});

		if (!req.user.is_permitted)
			return handle_response_error(res, {
				message: "Unable to create post. User is not a member.",
			});

		const { title, message: content } = req.body;

		try {
			const post = await Post.create({
				content,
				title,
				author: req.user._id,
			});
			await post.populate({ path: "author", model: "User" });
			return res.send(
				<>
					<SuccessMessage message="Post have been created." />
					<PostDashboardView post={post} user={req.user} />
					<PostCreateInput hx-swap-oob="true" />
				</>,
			);
		} catch (error) {
			// __AUTO_GENERATED_PRINT_VAR_START__
			console.error(error); // __AUTO_GENERATED_PRINT_VAR_END__
			let message =
				"An error occured while creating a message. Please try again later.";
			return handle_response_error(res, { message });
		}
	},
];

/** @type {import("express").RequestHandler<any, any, { page?: number }>}*/
export const get_posts = async function get_posts(req, res) {
	try {
		const { page = "1" } = req.query;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const posts = await Post.find()
			.sort({
				createdAt: -1,
			})
			.skip(POSTS_PER_REQUEST * (parseInt(page) - 1))
			.limit(POSTS_PER_REQUEST)
			.populate({
				path: "author",
				model: "User",
			});
		return res.send(
			<>
				<PostList posts={posts} user={req.user} />
				{posts.length > 0 ? (
					<PostListFetcher page={parseInt(page) + 1}></PostListFetcher>
				) : (
					<div class="text-center text-gray-600">No more posts found.</div>
				)}
			</>,
		);
	} catch (error) {
		// __AUTO_GENERATED_PRINT_VAR_START__
		console.error(error); // __AUTO_GENERATED_PRINT_VAR_END__
		let message = "Unable to fetch posts. Please try again later.";
		return handle_response_error(res, {
			message,
			children: <div hx-swap-oob="delete:[hx-get='/api/posts']"></div>,
		});
	}
};

/** @type {import("express").RequestHandler<{ id?: string }, any, { id?: string }>}*/
export const delete_post = async function delete_post(req, res) {
	try {
		const id = get_request_field(req, "id");
		const post = await Post.findOneAndDelete({ _id: id });
		if (!post)
			return handle_response_error(res, {
				message: `Unable to find post with id ${id}`,
			});
		return res.send(<div hx-swap-oob={`delete:#post_${post._id}`}></div>);
	} catch (error) {
		// __AUTO_GENERATED_PRINT_VAR_START__
		console.error(error); // __AUTO_GENERATED_PRINT_VAR_END__
		let message = "Unable to delete post. Please try again later.";
		return handle_response_error(res, {
			message,
		});
	}
};

export const POSTS_PER_REQUEST = 10;
