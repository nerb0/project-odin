import mongoose, { Schema, model } from "mongoose";

const post_schema = new Schema({
	title: String,
	author: {
		type: mongoose.mongo.ObjectId,
		ref: "User",
	},
});

export const UserModel = model("User", post_schema);
