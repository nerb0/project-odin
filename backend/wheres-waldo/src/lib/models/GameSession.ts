import { InferSchemaType, Model, Schema, Types, model, models } from "mongoose";
import { BoardSchema } from "./Board";

export const GameSessionSchema = new Schema(
	{
		name: String,
		board: {
			type: BoardSchema,
			required: true,
		},
		time_finished: Date,
	},
	{ timestamps: true },
);

export default (models?.GameSessions as Model<
	InferSchemaType<typeof GameSessionSchema>
>) || model("GameSessions", GameSessionSchema);
