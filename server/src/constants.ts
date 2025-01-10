import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_DB_URI = process.env.MONGO_DB_URI;
export const DB_NAME = "document-status-tracker";
