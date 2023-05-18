import { Types } from "mongoose";
const { MongoClient } = require("mongodb");

const fetchUserById = async (id: Types.ObjectId) => {
  try {
    const url = "mongodb://127.0.0.1:27017/";
    const dbName = "auth";
    const client = new MongoClient(url, { useUnifiedTopology: true });
    
    // Connect to MongoDB
    await client.connect();
    
    const db = client.db(dbName);
    const user = await db.collection("users").findOne({ _id: id });

    // Close the MongoDB connection
    client.close();

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export default fetchUserById;