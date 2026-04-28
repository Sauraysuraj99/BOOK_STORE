import fs from "node:fs";
import path from "node:path";
import { connectDB } from "../config/database.js";

export async function getHTMLFile(req, res) {
  let filepath = path.join(import.meta.dirname, "..", "pages", "index.html");
  try {
    let src = fs.createReadStream(filepath, "utf-8");
    src.pipe(res);
  } catch (error) {
    console.log(error);
  }
}

export async function handleSubmitForm(req, res) {
  let { username, email, password } = req.body;
  let collection = await connectDB();
  collection.insertOne({ username, email, password });
  res.status(201).json({
    success: true,
    message: "user created",
  });
}

export async function getAllUsers(req, res) {
  let collection = await connectDB();
  let users = await collection.find({}).toArray();
  res.status(200).json({
    success: true,
    message: "fetched all users",
    data: users,
  });
}
