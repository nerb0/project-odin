import mongoose, {
	FlattenMaps,
	GetLeanResultType,
	HydratedDocument,
	InferSchemaType,
	Model,
	ObtainSchemaGeneric,
	QueryWithHelpers,
	Require_id,
	Schema,
} from "mongoose";

export type GetModel<TSchema extends Schema> = Model<
	InferSchemaType<TSchema>,
	ObtainSchemaGeneric<TSchema, "TQueryHelpers">,
	ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
	ObtainSchemaGeneric<TSchema, "TVirtuals">,
	HydratedDocument<
		InferSchemaType<TSchema>,
		ObtainSchemaGeneric<TSchema, "TVirtuals"> &
			ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
		ObtainSchemaGeneric<TSchema, "TQueryHelpers">
	>,
	TSchema
> &
	ObtainSchemaGeneric<TSchema, "TStaticMethods">;

export type DocType<TSchema> = FlattenMaps<InferSchemaType<TSchema>>;

export default async function dbConnect() {
	const MONGODB_URL = process.env.MONGODB_URL;
	if (!MONGODB_URL) {
		throw new Error("Missing MONGODB_URL env variable");
	}
	const conn = await mongoose.connect(process.env.MONGODB_URL);
	conn.connection.once("connected", () =>
		console.log(`connect to database success`),
	);
	conn.connection.once("close", () =>
		console.log(`closed connection to database`),
	);
}
