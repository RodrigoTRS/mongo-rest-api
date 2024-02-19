import mongoose from "mongoose";

export async function dbConnect() {
    mongoose.connect(process.env.DB_CONNECTION_MONGO_STRING)
    return mongoose.connection;
}

