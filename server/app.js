const express = require("express");
const connectDB = require("./db/database");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
// Handeling UnCaught Errors
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server for handling uncaught exceptions!");
});

//Config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

//Connection
connectDB();

//Middleware
app.use(express.json());
// app.use(cookieParser);
app.use(cors());
app.use("./", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//Import Routes
const user = require("./controller/user");

app.get("/", (req, res) => {
  res.send("Welcome to the Home Route");
});
app.use("/api/v2/user", user);

//It's Error handling
app.use(ErrorHandler);

//Create Server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});

//Unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server  for ${err.message}`);
  console.log(`shutting down the server for unHandle Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
