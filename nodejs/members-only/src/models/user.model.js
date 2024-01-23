import { Schema, model } from "mongoose";

const user_schema = new Schema({
	first_name: String,
	last_name: String,
	password: String,
	username: String,
});

export const UserModel = model("User", user_schema);
