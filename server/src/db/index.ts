import mongoose from "mongoose";
import { MONGO_DB_URI, DB_NAME } from "../constants";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_DB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected");
    console.log("Connection Host", connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
    throw new Error("DB not connected");
  }
};
