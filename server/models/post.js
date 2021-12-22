const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  phouse: {
    type: String,
    default: "no pic",
  },
  pdate: {
    type: String,
    required: true,
  },
  bstatus: {
    type: Number,
    default: 1,
  },
  pyear: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },

  photo: {
    type: Array,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },

  // prefix:{
  //        type:String,
  //        required:true
  //     },
  //     firstName:{
  //       type:String,
  //       required:true
  //    },
  //    middleName:{
  //       type:String,
  //       required:true
  //    },
  //    lastName:{
  //       type:String,
  //       required:true
  //    },
  //    suffix:{
  //       type:String,
  //       required:true
  //    },
  //    dob:{
  //       type:String,
  //       required:true
  //    },
  //    gender:{
  //       type:String,
  //       required:true
  //    },
  //    email:{
  //       type:String,
  //       required:true
  //    },
  //    country:{
  //       type:String,
  //       required:true
  //    },
  //    phonenum:{
  //       type:Number,
  //       required:true
  //    },
  //    ptype:{
  //       type:String,
  //       required:true
  //    },
  //    address:{
  //       type:String,
  //       required:true
  //    },
  //    unit:{
  //       type:String,
  //       required:true
  //    },
  //    atype:{
  //       type:String,
  //       required:true
  //    },
  //    image:{
  //       type:String,
  //       defualt:'no pic'
  //    },
});
mongoose.model("Post", bookSchema);
