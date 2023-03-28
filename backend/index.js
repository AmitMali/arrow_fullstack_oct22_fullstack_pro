const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = 8023;
const mongoose = require("mongoose");
const mongodbURL = process.env.Mongo_DB_URL;
const studentRouter = require("./routes/students");
const authRouter = require("./routes/authRoutes");
try {
  mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    dbName: "arrow_fullstack_oct22",
  });
} catch (error) {
  console.log(error);
}
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const data = {
  title: "welcome to react full stack example",
  meta: {
    description: "some description",
  },
  pageHeading: "Welcome To React FullStack",
};

app.get("/", (req, res) => {
  res.json(data);
});
app.use("/students", studentRouter);
app.use("/auth/", authRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
