import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../utils/appError";

/**
 * A middleware to check if a user is authenticated or not
 * @function
 * @param {Request} req - The express request object
 * @param {Response} res - The express response object
 * @param {NextFunction} next - The express next function
 * @throws {UnauthorizedException} - If the user is not authenticated
 */
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || !req.user._id) {
    throw new UnauthorizedException("Unauthorized. Please log in.");
  }
  next();
};

export default isAuthenticated;
