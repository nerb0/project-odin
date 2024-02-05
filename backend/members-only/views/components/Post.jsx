/** @typedef {InstanceType<typeof import("~/models/Post").Post>} Post*/
import { cn } from "~/helpers/util";

/** @type {JSXComponent<{ posts: Post[], user: DBUser }}>*/
export const PostListWrapper = function PostListWrapper({
	posts,
	user,
	class: className,
	...props
}) {
	const post_animation_duration = 0.3;
	const post_animation_duration_increment = 0.1;
	return (
		<div
			id={post_list_id}
			class={cn("flex flex-col gap-4", className)}
			{...props}
		>
			{posts.map((post, index) => (
				<PostDashboardView
					user={user}
					style={{
						animationDuration: `${post_animation_duration + post_animation_duration_increment * index}s`,
					}}
					post={post}
				/>
			))}
		</div>
	);
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
			class={cn(
				"flex animate-slide-in flex-col gap-2 rounded-md p-2 shadow-sm",
				className,
			)}
			{...props}
		>
			<PostLegend {...{ post, user }} />
			<div class="text-xl font-bold" safe>
				{post.title}
			</div>
			<div safe>{post.content}</div>
		</div>
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
			<div class="font-bold text-black">
				{user && user.is_a_member ? post.author.full_name : "Anonymous"}
			</div>
			<PostLegendSeparator />
			<div>
				{post.createdAt.toLocaleDateString(undefined, {
					hour: "2-digit",
					minute: "2-digit",
					hourCycle: "h11",
					month: "long",
					day: "2-digit",
					year: "numeric",
				})}
			</div>
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
					class="group absolute bottom-2 right-2 flex select-none items-center gap-2 rounded-md bg-gray-400 px-3 py-1 font-bold text-white
						transition-all hover:scale-105 hover:bg-amber-700 group-focus-within:bg-amber-700
						group-[.htmx-request]:pointer-events-none group-[.htmx-request]:bg-neutral-500 group-[.htmx-request]:group-focus-within:bg-neutral-500"
				>
					<span>Submit</span>
					<span class="hidden h-2 w-2 animate-spin border border-dashed border-gray-300 group-[.htmx-request]:block"></span>
				</button>
			</div>
		</form>
	);
};

/** @type {JSXComponent}*/
export const PostListFetcher = function PostListFetcher({ ...props }) {
	return (
		<div
			class="animate-pulse"
			hx-get="/api/posts"
			hx-swap="outerHTML"
			hx-target="this"
			hx-trigger="revealed"
			{...props}
		>
			Loading...
		</div>
	);
};

export const post_list_id = "post_list";
