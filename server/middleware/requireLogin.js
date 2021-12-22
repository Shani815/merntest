const jwt = require("jsonwebtoken");
const Jwt_secret = "dssgdfhqeyynjnhds";
const mongoose = require("mongoose");
const User = mongoose.model("User");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "you must log in first" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, Jwt_secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must log in first'" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
