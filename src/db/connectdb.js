    import dotenv from "dotenv";    
    import mongoose from "mongoose";
    import { DB_Name } from "../constants.js";


    dotenv.config({
    path: ".env"
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    )
    console.log("\n MongoDB connected Successfully !! DB HOST: ${connectionInstance.connection.host}");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;