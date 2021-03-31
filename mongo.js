import { default as mongodb } from "mongodb";

let MongoClient = mongodb.MongoClient;
const client = new MongoClient(process.env.CONNECTION_URL);
await client.connect();
const db = client.db();
const collection = db.collection("messages");

collection.insertOne({ messages: "Hello" }, (err, res) => {
  if (err) throw err;
});
