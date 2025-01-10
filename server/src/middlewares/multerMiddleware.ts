import multer, { StorageEngine, Multer } from "multer";
import { Request } from "express";

type DestinationCallBack = (error: Error | null, destination: string) => void;

type FileNameCallback = (error: Error | null, filename: string) => void;

const storage: StorageEngine = multer.diskStorage({
  destination: function (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallBack
  ): void {
    cb(null, "./public/temp");
  },
  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: FileNameCallback
  ): void {
    cb(null, file.originalname);
  },
});

export const upload: Multer = multer({ storage: storage });
