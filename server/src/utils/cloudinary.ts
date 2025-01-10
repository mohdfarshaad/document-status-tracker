import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const uploadOnCloudinary = async (uploadFilePath: string) => {
  try {
    if (!uploadFilePath) return "Local file path is not found";

    const response = await cloudinary.uploader.upload(uploadFilePath, {
      resource_type: "auto",
    });

    if (!response) return null;

    fs.unlinkSync(uploadFilePath);

    return response;
  } catch (error) {
    console.log("Upload on cloudinary failed");
  }
};
