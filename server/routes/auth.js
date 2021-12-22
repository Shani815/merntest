const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Jwt_secret = "dssgdfhqeyynjnhds";
const requireLogin = require("../middleware/requireLogin");

router.get("/protected", requireLogin, (req, res) => {
  res.send("this is after middleware ");
});

router.get("/", (req, res) => {
  console.log("hy its me get");
  res.send("hello");
});
router.post("/signup", (req, res) => {
  console.log(req.body.name);
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "please enter all flieds" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exist " });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfuly" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/alluser", (req, res) => {
  User.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {});
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please enter email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((domatch) => {
        if (domatch) {
          const token = jwt.sign({ _id: savedUser.id }, Jwt_secret);
          res.json({ token });
        } else {
          return res.status(422).json({ error: "invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.put(
  "/updateuser/:id",
  async (req, res) => {
    const id = req.params.id;
    console.log(id);
    //  console.log(req.body)
    const { name } = req.body;
    if (!name) {
      return res.status(402).json({ error: "please pass all fields" });
    }
    try {
      await User.findById(id, (error, userUpdate) => {
        userUpdate.name = req.body.name;

        userUpdate.save();
        console.log("updated", userUpdate);
        // return res.json("hurrah updated");
      });
    } catch (err) {
      console.log(err, "ddddd");
    }

    res.send("updated");
  }
  //    req.user.password=undefined
);

module.exports = router;
