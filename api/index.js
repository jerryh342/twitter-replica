const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL,
  { useNewURLParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
    console.log(mongoose.connection.readyState);
  }
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("welcome to message");
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
