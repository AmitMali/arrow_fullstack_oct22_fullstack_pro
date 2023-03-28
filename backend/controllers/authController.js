const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginUser = async (req, res) => {
  const { userMail, userPassword } = req.body;
  console.log(req.body);
  const user = await userModel.find({ userMail: userMail });
  if (user) {
    if (await bcrypt.compare(userPassword, user[0].userPassword)) {
      const token = jwt.sign(
        { user_id: user[0]._id },
        process.env.JWT_SECRETE_KEY
      );
      res.status(200).json({ success: true, token: token });
    } else {
      res.json({ success: false, token: "dkakdjakjlk" });
    }
  } else {
    res.status(404).json({ success: false, token: "dkakdjakjlk" });
  }
};

module.exports = { loginUser };
