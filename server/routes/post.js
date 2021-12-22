const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

router.use(
  fileUpload({
    createParentPath: true,
  })
);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(morgan("dev"));

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, res, callback) => {
//     callback(null, file.name);
//   },
// });
// const upload = multer({ storage: storage });

router.get("/allpost", requireLogin, (req, res) => {
  Post.find()
    .populate("postedBy", " _id")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {});
});

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("PostedBy", "_id name")
    .then((posts) => {
      console.log(posts);
      return res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requireLogin, (req, res) => {
  const { title, authorname, phouse, pdate, bstatus, pyear, genre, photo } =
    req.body;
  if (!title) {
    return res.status(402).json({ error: "please pass all fields" });
  }

  //    req.user.password=undefined
  const post = new Post({
    title,
    authorname,
    phouse,
    pdate,
    bstatus,
    pyear,
    genre,
    photo,
    // prefix,
    // firstName,
    // middleName,
    // lastName,
    // suffix,
    // dob,
    // gender,
    //  email,
    // country,
    // phonenum,
    // ptype,
    // address,
    // unit,
    // atype,
    // image,

    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
//

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await Post.findByIdAndRemove(id).exec();
  res.send("deleted");
});

router.put(
  "/update/:id",

  async (req, res) => {
    const id = req.params.id;
    console.log(id);
    //  console.log(req.body)
    const {
      // title,
      // authorname,
      // phouse,
      // pdate,
      bstatus,
      // pyear,
      // genre,
      // photo = req.files,
    } = req.body;
    // if (!title) {
    //   return res.status(402).json({ error: "please pass all fields" });
    // }
    try {
      await Post.findById(id, (error, postUpdate) => {
        // postUpdate.title = req.body.title;
        // postUpdate.authorname = req.body.authorname;
        // postUpdate.phouse = req.body.phouse;
        // postUpdate.pdate = req.body.pdate;
        postUpdate.bstatus = req.body.bstatus;
        // postUpdate.pyear = req.body.pyear;
        // postUpdate.genre = req.body.genre;
        // postUpdate.photo = req.file.originalname;

        // postUpdate.photo = req.file.originalname;

        postUpdate.save();
      });
    } catch (err) {
      console.log(err, "ddddd");
    }

    res.send("updated");
  }
  //    req.user.password=undefined
);

module.exports = router;
