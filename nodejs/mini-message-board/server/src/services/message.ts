import { InsertOneResult, WithId } from "mongodb";
import client from "../db.ts";

export async function getAll() {
	let response: APIResponse<WithId<BoardMessage>[]>;

	try {
		const data = await client
			.db()
			.collection<BoardMessage>("messages")
			.find()
			.toArray();
		response = {
			status: "ok",
			data,
		};
	} catch (err: any) {
		response = {
			status: "error",
			error: err.message,
		};
	}

	return response;
}

export async function create(user: string, message: string) {
	let response: APIResponse<InsertOneResult<BoardMessage>>;
	try {
		const collection = await client.db().collection<BoardMessage>("messages");
		const data = await collection.insertOne({ user, message });
		response = {
			status: "ok",
			data,
		};
	} catch (err: any) {
		response = {
			status: "error",
			error: err.message,
		};
	}
	return response;
}
