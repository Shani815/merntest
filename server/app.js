const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// require('./modules/service')

app.use(cors());

const mongoUri =
  "mongodb://abc:abcd1234@cluster0-shard-00-00.zalmt.mongodb.net:27017,cluster0-shard-00-01.zalmt.mongodb.net:27017,cluster0-shard-00-02.zalmt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ihzodf-shard-0&authSource=admin&retryWrites=true&w=majority";

app.listen(5000, () => {
  console.log("server side");
});
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected");
});
mongoose.connection.on("error", (err) => {
  console.log("koe masla aa");
});
require("./models/user");
require("./models/post");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

// require('./modules/employee')

// const employee =mongoose.model('employee')
// app.get('/',(req,res)=>{
//     res.send('welcome here')
// })

// const mongoUri='mongodb+srv://abc:abcd1234@cluster0.zalmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// app.listen(5000,()=>{
//     console.log('server side')
// })
// mongoose.connect(mongoUri,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })
// mongoose.connection.on('connected',()=>{
//     console.log('connected')
// })
// mongoose.connection.on('error',(err)=>{
//     console.log('koe masla aa')
// })
// app.post('/send-data',(req,res)=>{
//     console.log("sssss",req)
//  const Employee= new employee( {
//    title:req.body.title,
//    discounttype:req.body.discounttype,
//    image:req.body.image

//  })
//  Employee.save()
//  .then(data=>{
//      console.log(data)
//      res.send('Add successfully')
//  })
//   .catch(err=>{
//       console.log(err)
//   })
// })

// app.post('./delete',(req,res)=>{
//    employee.findByIdAndRemove(req.body.id)
//    .then(data=>{
//        console.log(data)
//        res.send('deleted')
//    }).catch(err=>{
//        console.log(err)
//    })

// })

// app.post('/update',(req,res)=>{
//    employee.findByIdAndUpdate(req.body.id,{
//        title:req.body.title,
//        discounttype:req.body.discounttype,
//        image:req.body.image
//    })
//    .then(data=>{
//        console.log(data)
//        res.send('updated successfully')
//    })
//     .catch(err=>{
//         console.log(err)
//     })

// })
// app.get('./get',(req,res)=>{
//      employee.find({})

//      .then(data=>{
//          console.log(data)
//          res.send(data)
//      })
//      .catch(err=>{
//          console.log(err)
//      })

// })
