import RedisStore from "connect-redis";
import { dirname } from "path";
import { createClient } from "redis";
import { fileURLToPath } from "url";

export const {
	PORT = 3000,
	SESSION_SECRET_KEY,
	DATABASE_URL = "mongodb://127.0.0.1:27017/members-only",
	NODE_ENV = "development",
	REDIS_CLIENT_URL = "redis://localhost:6379",
	SECRET_MEMBERSHIP_CODE,
} = process.env;

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const redis_client = createClient({
	url: REDIS_CLIENT_URL,
});
export const redis_store = new RedisStore({
	client: redis_client,
	prefix: "members-only:",
});
