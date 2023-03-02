const express = require("express");
const app = express();
const cors = require("cors");
const port = 8023;
app.use(cors());
const data = {
  title: "welcome to react full stack example",
  meta: {
    description: "some description",
  },
  pageHeading: "Welcome To React FullStack",
};

//create root endpoint to handle get request
app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:/${port}`);
});
