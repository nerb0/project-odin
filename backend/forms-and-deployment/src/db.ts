import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const { DB_USER, DB_PASS, DB_CLUSTER, DB_ID, DB_DATABASE } = process.env;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.${DB_ID}.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`;

export default async function connectDB() {
	mongoose.set("strictQuery", false);
	await mongoose.connect(dbURL);
}
