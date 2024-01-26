import mongoose from "mongoose";
import { DATABASE_URL } from "./constants";

export async function connect_db() {
	await mongoose.connect(DATABASE_URL);
}
