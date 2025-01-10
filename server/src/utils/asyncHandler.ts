import { Request, Response, NextFunction } from "express";

type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | any;

export const asyncHandler = (fn: RequestHandler) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await Promise.resolve(fn(req, res, next));
    } catch (error) {
      next(error);
    }
  };
};
