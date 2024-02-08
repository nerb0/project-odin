/** @typedef {InstanceType<typeof import("~/models/Post").Post>} Post*/
import { cn } from "~/helpers/util";
import { app_wrapper_id, post_list_id } from "../Dashboard";
import { SpinLoader } from "./Loader";
import { app_container_id } from "./Layout";

/** @type {JSXComponent<{ posts: Post[], user: DBUser }}>*/
export const PostList = function PostList({ posts, user }) {
	const post_animation_duration = 0.3;
	const post_animation_duration_increment = 0.1;

	return posts.map((post, index) => (
		<PostDashboardView
			user={user}
			style={{
				animationDuration: `${post_animation_duration + post_animation_duration_increment * index}s`,
			}}
			post={post}
		/>
	));
};

/** @type {JSXComponent<{ post: Post, user: DBUser }>}*/
export const PostDashboardView = function PostDashboardView({
	post,
	user,
	class: className,
	...props
}) {
	return (
		<div
			id={`post_${post._id}`}
			hx-get={`/app/post/${post._id}`}
			class={cn(
				"relative flex animate-slide-in flex-col gap-2 rounded-md p-2 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md",
				className,
			)}
			{...props}
		>
			<PostLegend {...{ post, user }} />
			<div class="text-xl font-bold" safe>
				{post.title}
			</div>
			<div safe>{post.content}</div>
			{user && user.is_admin && (
				<PostDeleteButton post={post}></PostDeleteButton>
			)}
		</div>
	);
};

export const PostDeleteButton = function PostDeleteButton({ post }) {
	return (
		<button
			hx-delete={`/api/post/${post._id}`}
			hx-confirm="Are you sure you want to delete this post?"
			class={`group absolute right-2 top-2 flex select-none items-center rounded-md bg-red-500 px-3 py-1 font-bold text-white transition-all
				hover:scale-105 hover:bg-red-700 [&.htmx-request]:pointer-events-none [&.htmx-request]:bg-neutral-500`}
		>
			<span>Delete</span>
			<SpinLoader class="group-[.htmx-request]:ml-2 group-[.htmx-request]:max-h-2 group-[.htmx-request]:max-w-2 group-[.htmx-request]:border" />
		</button>
	);
};

/** @type {JSXComponent}*/
export const PostLegendSeparator = function PostLegendSeparator({
	class: className,
	...props
}) {
	return (
		<div
			class={cn("h-1 w-1 rounded-full bg-gray-500", className)}
			{...props}
		></div>
	);
};

/** @type {JSXComponent<{ post: Post, user: DBUser }>}*/
export const PostLegend = function PostLegend({ post, user }) {
	return (
		<div class="flex items-center gap-2 text-sm text-gray-600">
			<div class="font-bold text-black" safe>
				{user && user.is_permitted ? post.author.full_name : "Anonymous"}
			</div>
			<PostLegendSeparator />
			{user ? (
				user.is_permitted ? (
					<>
						<div safe>
							{post.createdAt.toLocaleDateString(undefined, {
								month: "long",
								day: "2-digit",
								year: "numeric",
							})}
						</div>
						<div class="h-[2px] w-2 bg-gray-600"></div>
						<div safe>
							{post.createdAt.toLocaleTimeString(undefined, {
								hourCycle: "h11",
							})}
						</div>
					</>
				) : (
					<a
						class="hover:underline"
						href="/app/join"
						hx-swap="outerHTML"
						hx-target={`#${app_container_id}`}
						hx-boost="true"
						onclick="event.stopPropagation()"
					>
						Join to view more info
					</a>
				)
			) : (
				<a
					class="hover:underline"
					href="/login"
					hx-swap="outerHTML"
					hx-target={`#${app_wrapper_id}`}
					hx-boost="true"
					onclick="event.stopPropagation()"
				>
					Login to view more info.
				</a>
			)}
		</div>
	);
};

export const post_create_input_form_id = "post_create_input";
/** @type {JSXComponent}*/
export const PostCreateInput = function PostCreateInput({
	class: className,
	children,
	...props
}) {
	return (
		<form
			id={post_create_input_form_id}
			hx-post="/api/post"
			hx-swap="afterbegin"
			hx-target={`#${post_list_id}`}
			class="group relative"
			{...props}
		>
			<div class="overflow-clip rounded-md border-2 border-gray-400 bg-amber-100 group-focus-within:border-amber-700">
				<input
					name="title"
					class="w-full border-b-2 border-gray-400 bg-transparent px-2 py-1 outline-none transition-all
						focus:bg-amber-200 focus:placeholder:text-amber-700 group-focus-within:border-amber-700 group-[.htmx-request]:pointer-events-none"
					placeholder="Title..."
				/>
				<textarea
					name="message"
					class="min-h-[100px] w-full resize-y bg-transparent p-2 outline-none transition-colors focus:bg-amber-200 focus:placeholder:text-amber-700 group-[.htmx-request]:pointer-events-none"
					placeholder="Message"
				>
					{children}
				</textarea>
				<button
					type="submit"
					class="group absolute bottom-2 right-2 flex select-none items-center rounded-md bg-gray-400 px-3 py-1 font-bold text-white
						transition-all hover:scale-105 hover:bg-amber-700 group-focus-within:bg-amber-700
						group-[.htmx-request]:pointer-events-none group-[.htmx-request]:bg-neutral-500 group-[.htmx-request]:group-focus-within:bg-neutral-500"
				>
					<span>Submit</span>
					<SpinLoader class="group-[.htmx-request]:ml-2 group-[.htmx-request]:max-h-2 group-[.htmx-request]:max-w-2 group-[.htmx-request]:border" />
				</button>
			</div>
		</form>
	);
};

/** @type {JSXComponent<{ page?: number }>}*/
export const PostListFetcher = function PostListFetcher({
	page = 1,
	...props
}) {
	return (
		<div
			class="animate-pulse"
			hx-get={`/api/posts?page=${page}`}
			hx-swap="outerHTML"
			hx-target="this"
			hx-trigger="revealed"
			{...props}
		>
			Loading...
		</div>
	);
};
