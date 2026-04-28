import express from "express";

const app = express();
const PORT = 9000;

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Byeee");
  next();
});

app.get("/", (req, res) => {
  console.log("Hiiii");
  res.send("Hiiii");
});

app.listen(PORT, (err) => {
  if (err) console.log("unable to start server at PORT", PORT);
  console.log("Server started at PORT", PORT);
});

//! WHAT IS MIDDLEWARE ?
// middleware are functions which has access to req, res and next().
// next() is used to call next middleware
// using middleware we can modify req and res

//! TYPES OF MIDDLEWARE
// 1) Built-in --> already present
// 2) Error --> used for error handling
// 3) app level or global --> which works on all requests
// 4) router --> works for specific routes
// 5) custom --> defined by developers
