const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConfig");
const cors = require("cors");
// const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

connectDB();

//Requiring Routers
const mainRoutes = require("./routes/main.routes");
const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//add
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
app.use("/api/v1", mainRoutes);
//add

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
