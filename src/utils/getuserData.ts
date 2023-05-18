import { Types } from "mongoose";
const { MongoClient } = require("mongodb");
export default async (id: Types.ObjectId) => {
  try {
    const url = "mongodb://127.0.0.1:27017/";
    const dbName = "auth";
    const client = new MongoClient(url, { useUnifiedTopology: true });
    client.connect(async (err: any) => {
      if (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
      }
      const db = client.db(dbName);
      return await db.collection("users").findOne({ _id: id });
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
