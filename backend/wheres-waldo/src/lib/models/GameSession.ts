import { InferSchemaType, Model, Schema, model, models } from "mongoose";
import { BoardSchema } from "./Board";
import { DocType } from "../db";

export const GameSessionTimestampSchema = new Schema(
	{
		time_start: Date,
		time_paused: Date,
	},
	{ _id: false },
);

export const GameSessionSchema = new Schema(
	{
		name: String,
		board: {
			type: BoardSchema,
			required: true,
		},
		timestamps: [GameSessionTimestampSchema],
		time_finished: Number,
	},
	{ timestamps: true },
);

export default (models?.GameSessions as Model<
	InferSchemaType<typeof GameSessionSchema>
>) || model("GameSessions", GameSessionSchema);

export type GameSessionModel = DocType<typeof GameSessionSchema> & {
	_id: string;
};
export type GameSessionTimestampsModel = DocType<
	typeof GameSessionTimestampSchema
>;
