import { Schema, model } from "mongoose";

const user_schema = new Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		is_a_member: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		},
	},
	{
		timestamps: true,
		virtuals: {
			full_name: {
				get() {
					return `${this.first_name} ${this.last_name}`;
				},
			},
		},
	},
);

export const User = model("User", user_schema);
