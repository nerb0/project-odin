import { Schema, model, Types } from "mongoose";

const post_schema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: {
			type: Types.ObjectId,
			reference: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const Post = model("Post", post_schema);
