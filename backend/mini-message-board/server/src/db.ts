import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASS, DB_DATABASE = "" } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@message-board-cluster.x9bpizg.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function checkDb() {
	let response: APIResponse<string>;
	try {
		await client.db("admin").command({ ping: 1 });
		response = {
			status: "ok",
			data: "Connected successfully to database",
		};
	} catch (err: any) {
		response = {
			status: "error",
			error: err.message,
		};
	}

	return response;
}

export default client;
