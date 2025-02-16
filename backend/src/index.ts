import session from "cookie-session";
import cors from "cors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import { config } from "./config/app.config";
import connectDatabase from "./config/database.config";
import { ErrorCodeEnum } from "./enums/error-code.enum";
import { asyncHandler } from "./middleware/asyncHandler.middleware";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { BadRequestException } from "./utils/appError";

import passport from "passport";
import "./config/passport.config";
import isAuthenticated from "./middleware/isAuthenticated.middleware";
import authRoutes from "./routes/auth.route";

import userRoutes from "./routes/user.route";


const app = express();
const BASE_PATH = config.BASE_PATH;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "session",
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get(
  `/`,
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    throw new BadRequestException(
      "This is a bad request",
      ErrorCodeEnum.AUTH_INVALID_TOKEN
    );
  })
);

app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, isAuthenticated, userRoutes);


app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
