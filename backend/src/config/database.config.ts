import mongoose from "mongoose";
import { config } from "./app.config";



const connectDatabase= async () => {
    try {
        await mongoose.connect(config.MONGO_DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDatabase;