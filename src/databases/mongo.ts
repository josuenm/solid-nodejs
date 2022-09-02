import mongoose from "mongoose";

const connectToMongoDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/solid")
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Error trying to connect to MongoDB"));
};

export { connectToMongoDB };
