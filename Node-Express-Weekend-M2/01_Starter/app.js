//! Import express
import express from "express";

//! Initialize Express App
const app = express();

//! Create Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About " });
});

app.get("/users", (req, res) => {
  res.json({
    message: "all users fetched",
    success: true,
    data: [{ name: "John" }, { name: "Aman" }],
  });
});

//! Create a server
app.listen(9000, (err) => {
  if (err) {
    console.log("Server crashed");
  }
  console.log("Server started at port 9000");
});
