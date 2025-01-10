import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const MONGO_DB_URI = process.env.MONGO_DB_URI;
export const DB_NAME = "document-status-tracker";

export const CLOUDINARY_CLOUD_NAME = process.env.ClOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.ClOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.ClOUDINARY_API_SECRET;
