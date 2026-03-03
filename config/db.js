import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
