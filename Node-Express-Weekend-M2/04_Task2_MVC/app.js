import express from "express";

import routes from "./routes/route.js";

const app = express();
const PORT = 9000;

//! middlewares
app.use(express.urlencoded({ extended: true })); // pasre html data

//! parses json data
app.use(express.json());

//! routes
app.use("/v1/api", routes);
// http://localhost:9000/v1/api/
// http://localhost:9000/v1/api/submit
// http://localhost:9000/v1/api/all

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server started at ", PORT);
});
