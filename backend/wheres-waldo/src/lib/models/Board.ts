import { InferSchemaType, Model, Schema, model, models } from "mongoose";
import { DocType } from "../db";

export const CoordinatesSchema = new Schema(
	{
		x: {
			type: Number,
			required: true,
		},
		y: {
			type: Number,
			required: true,
		},
	},
	{ id: false, _id: false },
);

export type Coordinates = InferSchemaType<typeof CoordinatesSchema>;

export const BoardItemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	coordinates: {
		type: CoordinatesSchema,
		required: true,
	},
	distance: {
		type: Number,
		default: 0,
	},
	image: {
		type: String,
		required: true,
	},
	pinpoint: CoordinatesSchema,
	found: Boolean,
});

export const BoardSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		height: {
			type: Number,
			required: true,
		},
		width: {
			type: Number,
			required: true,
		},
		items: [BoardItemSchema],
	},
	{
		virtuals: {},
		timestamps: true,
	},
);

export default (models?.Boards as Model<InferSchemaType<typeof BoardSchema>>) ||
	model("Boards", BoardSchema);

export type BoardModel = DocType<typeof BoardSchema> & { _id: string };
export type BoardItemModel = BoardModel["items"][0];
