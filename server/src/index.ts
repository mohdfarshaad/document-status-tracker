import { app } from "./app";
import {
  PORT,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "./constants";
import { connectDB } from "./db";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is running on : ", PORT);
    });
  })
  .catch((error) => {
    throw error;
  });
