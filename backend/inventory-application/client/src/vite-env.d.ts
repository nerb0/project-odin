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
	(err: Error, result: null): void;
	(err: null, result: { data: T; message: string }): void;
}
