import { Schema, model, Types } from "mongoose";

const post_schema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: Types.ObjectId,
			reference: "User",
		},
	},
	{
		timestamps: true,
	},
);

export const Post = model("Post", post_schema);
