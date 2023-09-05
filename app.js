const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/api");
const mongoose = require("mongoose");
const path = require("path");

let URL =
  "mongodb+srv://<username>:<password>@cluster0.7dgocwt.mongodb.net/ImageStore?retryWrites=true&w=majority";
let option = { user: "rasel11", pass: "rasel11", autoIndex: true };

mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.log(err);
  });
//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limiter: "50mb" }));
app.use(express.json());
app.use(router);
app.use(express.static("client/dist"));
app.get("*", function (res, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});
app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
