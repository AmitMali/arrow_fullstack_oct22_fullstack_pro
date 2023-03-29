const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAthorized = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "unauthorized access " });
  }
  const token = req.headers.authorization.split(",")[0];
  const secret = process.env.JWT_SECRETE_KEY;
  //   console.log(jwt.verify(token, secret));
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      res.status(403).json({ error: "invalid user" });
    }
    req.body = { ...req.body, user_id: decode.user_id };
    next();
  });
};

module.exports = { isAthorized };
