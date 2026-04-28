import express from "express";
import mongodb from "mongodb";
import fs from "node:fs";

async function connectDB() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = await client.db("Task1");
  let collection = await database.createCollection("users");
  return collection;
}

const app = express();
const PORT = 9000;

// middleware
// express.urlencoded({ extended: true }) used to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8");
  src.pipe(res);
});

app.post("/submit", async (req, res) => {
  console.log("Form Submitted");
  try {
    let { username, email, password } = req.body;
    let collection = await connectDB();
    collection.insertOne({ username, email, password });

    res.status(201).json({
      success: true,
      message: "User Registered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while register",
    });
  }
});

app.get("/all", async (req, res) => {
  try {
    let collection = await connectDB();
    let users = await collection.find({}).toArray();
    res.status(200).json({
      success: true,
      message: "all users fetched successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching all users",
    });
  }
});

app.listen(PORT, (err) => {
  if (err) console.log("unable to start serve");
  console.log("Server started at PORT", PORT);
});
