import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./db";
import router from "./routes";

dotenv.config();
connectDB().catch((err) => console.error(err));

const { PORT = 3000 } = process.env;
const server = express();

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));

server.use(express.static(path.join(__dirname, "public")));
server.use(cookieParser());
server.use("/", router);
server.use(cors());
server.use("/api/json", express.json());
server.use("/api/form", express.urlencoded({ extended: true }));

server.listen(PORT, () => {
	console.log("Server is live at PORT", PORT);
});
