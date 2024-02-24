/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_SERVER_API_URL: string;
}

type BlogPost = {
	_id: string;
	content: string;
	title: string;
	author: string;
	created_at: Date;
	updated_at: Date;
	is_published: boolean;
};

type BlogComment = {
	_id: string;
	post_id: string;
	message: string;
	author?: string;
	created_at: Date;
	updated_at: Date;
};

interface FetchCallbackHandler<T> {
	(err: Error, result: null): void;
	(err: null, result: { data: T; message: string }): void;
}
