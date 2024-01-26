import { dirname } from "path";
import { fileURLToPath } from "url";

export const {
	PORT = 3000,
	PASSPORT_SECRET_KEY,
	DATABASE_URL = "mongodb://127.0.0.1:27017/members-only",
} = process.env;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
