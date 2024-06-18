import mongoose  from "mongoose";

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI , )
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error Connecting to MongoDB" , error.message)
  }
}



export default connectToMongodb;