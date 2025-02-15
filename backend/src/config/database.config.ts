import mongoose from "mongoose";
import { config } from "./app.config";

/**
 * Connects to the MongoDB database using the connection string in the
 * config. If the connection is successful, logs a success message to the
 * console. If the connection fails, logs an error message to the console and
 * exits the process with a status code of 1.
 *
 * @function connectDatabase
 * @async
 * @returns {Promise<void>}
 */
const connectDatabase= async (): Promise<void> => {
    try {
        await mongoose.connect(config.MONGO_DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(1);
    }
}

export default connectDatabase;