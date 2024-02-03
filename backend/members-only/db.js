import mongoose from "mongoose";
import { DATABASE_URL } from "./constants";

/** Used to connect the server to MongoDB Instance */
export async function connect_db() {
	await mongoose.connect(DATABASE_URL);
}
