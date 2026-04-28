import mongodb from "mongodb";

export async function connectDB() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("Task1_MVC");
  let collection = await database.collection("users");
  return collection;
}
