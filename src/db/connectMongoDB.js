import mongoose from "mongoose";

const connection = {};

const connectMongoDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("using an existing connection.");
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("failed to connect", error);
  }
};

export default connectMongoDB;
