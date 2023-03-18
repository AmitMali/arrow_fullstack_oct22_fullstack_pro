const express = require("express");
const app = express();
const cors = require("cors");
const port = 8023;
const mongoose = require("mongoose");
const mongodbURL = "mongodb://127.0.0.1:27017/arrow_fullstack_oct22";
try {
  mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

const studentRouter = require("./routes/students");
app.get("/", (req, res) => {
  res.json(data);
});
app.use("/students", studentRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
