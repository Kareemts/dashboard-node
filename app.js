const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');
require("dotenv").config();
const { connection } = require("./src/config/db.config");
const app = express();

// databsase connection
connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// testing router
// app.get("/", async (req, res, next) => {
//   res.send({ message: "Server working properly" });
// });

app.use("/api/admin", require("./src/routes/adminRouter"));

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: false || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
