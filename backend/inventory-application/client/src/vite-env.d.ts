/// <reference types="vite/client" />
interface ImportMetaEnv {
	VITE_SERVER_API_URL: string;
}

type BlogPost = {
	id: string;
	content: string;
	title: string;
	author: string;
	created_at: Date;
	updated_at: Date;
};

interface FetchCallbackHandler<T> {
	(err: Error, post: null): void;
	(err: null, post: T): void;
}
