/// <reference types="vite/client" />
interface ImportMetaEnv {
	SERVER_API_URL: string;
}
type BlogPost = {
	content: string;
	title: string;
	author: string;
	created_at: Date;
	updated_at: Date;
};
