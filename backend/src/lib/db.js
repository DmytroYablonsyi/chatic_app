import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected")

    } catch (error) {
        console.log("Mongo error:"+ error )
    }
}