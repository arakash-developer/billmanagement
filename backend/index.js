const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 999999999999999, limit: '5000mb' }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
let UserModel = require("./models/user");
const ProfileModel = require("./models/profilesetting");
const CashModel = require("./models/cash");
const multer = require('./utils/multer');
const cloudinary = require('cloudinary').v2;
const multerCloudinary = require('./utils/multerCloudinary');
let fs = require('fs');

app.use(cors({
  origin: ['https://billmanagements.vercel.app', 'http://localhost:3000', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));


app.get('/', (req, res) => {
  res.send("Helllow200")
});


app.post('/create', (req, res) => {
  let { name, password, companyName, phone, firstName, lastName, address, zipcode, country, username, email } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async (err, hash) => {
      // Store hash in your password DB.
      let token = jwt.sign({ email }, 'Akash');
      let userCreated = await UserModel.create({
        username,
        email,
        password: hash,
        name,
        companyName,
        address,
        phone,
        country,
        zipcode,
        firstName,
        lastName,
      })
      res.json({
        result: true,
        token: token,
      });
    });
  });
});

app.post('/login', async (req, res) => {
  let { password, email } = req.body;
  let user = await UserModel.findOne({ email: email })
  if (!user) return res.json("Something Is Wrong")
  bcrypt.compare(password, user.password, function (err, result) {
    // result == true
    if (result) {
      let token = jwt.sign({ email }, 'Akash');
      res.cookie('token', token);
      return res.json({
        result,
        token: token,
      });
    } else {
      return res.json({ result: false });
    }
  });

})

app.get('/logout', (req, res) => {
  // res.clearCookie("token");
  res.cookie('token', '');
  return res.json({ status: "success", token: "" });
})

let isLoggedIn = (req, res, next) => {
  if (req.cookies.token === "") {
    res.json({
      result: false,
      content: "You Must Be Loged In First",
    })
  } else {
    let data = jwt.verify(req.cookies.token, 'Akash')
    req.userdata = data;
  }
  // console.log(req.cookies);
  next();
}

app.get('/profile', isLoggedIn, (req, res) => {
  res.json({
    result: true,
    content: "Yes You Can See",
    data: req.userdata,
  })
})



let isLoggedInP = (req, res, next) => {
  let token = req.headers.token
  if (token) {
    if (token === '') {
      res.json({
        result: false,
        messege: "You Must Be Loged In First...Token Is Empty"
      })
    } else {
      let data = jwt.verify(token, 'Akash')
      req.userdata = data;
      next()
    }
  } else {
    res.json({
      result: false,
      messege: "You Must Be Loged In First...Token Not Found"
    })
  }
}


app.get('/clientdata', isLoggedInP, async (req, res) => {
  let clientdata = await UserModel.find();
  // console.log(req.headers.token);
  // res.setHeader('token',"AKASH")
  res.json({
    clientdata
  });
});

app.get('/singleclient', isLoggedInP, async (req, res) => {
  let singleemail = req.userdata.email
  let clientdata = await UserModel.findOne({ email: singleemail })
  console.log(singleemail);
  res.json({
    clientdata
  });
});

// app.post('/profilesetting', isLoggedInP, async (req, res) => {
//   let singleemail = req.userdata.email
//   let singleclient = await ProfileModel.findOne({ email: singleemail })
//   // console.log(singleclient);
//   let profile = await ProfileModel.create({
//     email: singleemail,
//     profileimage: req.body.profileimage
//   })
//   res.json(profile)
// });

// app.post('/profilesettingupdate', isLoggedInP, async (req, res) => {
//   let singleemail = req.userdata.email
//   let singleclient = await ProfileModel.findOneAndUpdate({ email: singleemail }, {
//     profileimage: req.body.profileimage
//   }, { new: true })
//   res.json(
//     {
//       profileset: singleclient
//     })
// });

app.get('/profilesetting', isLoggedInP, async (req, res) => {
  let singleemail = req.userdata.email
  let profileset = await UserModel.findOne({ email: singleemail })
  let { email, profileimage } = profileset
  res.json({
    profileset: {
      email,
      profileimage: "https://billmanagement-server.vercel.app/images/" + profileimage
    }
  })
});



app.post('/profileSetting', isLoggedInP, async (req, res) => {
  let { name, phone, address, firstName, lastName, country, zipcode, profileimage } = req.body
  let loginemail = req.userdata.email
  let user = await UserModel.findOneAndUpdate({ email: loginemail }, {
    name,
    phone,
    address,
    firstName,
    lastName,
    country,
    zipcode,
    profileimage,
  }, { new: true });
  res.json({
    loginemail,
    result: true,
    user,
  })
});


app.get('/profileSettingUpdate', isLoggedInP, async (req, res) => {
  let loginemail = req.userdata.email
  let user = await UserModel.findOne({ email: loginemail });
  res.json({
    result: true,
    user,
  })
});


function toBase64(filePath) {
  const img = fs.readFileSync(filePath);
  return Buffer.from(img).toString('base64');
}

app.post('/profileuploadupdate', isLoggedInP, multer.single('file'), async (req, res) => {

  
  const base64String = toBase64(req.file.path);
  // console.log(base64String);
  const withPrefix = 'data:image/png;base64,' + base64String;
  console.log(withPrefix);
  
  let { name, phone, address, firstName, lastName, country, zipcode } = req.body
  let loginemail = req.userdata.email
  let user = await UserModel.findOneAndUpdate({ email: loginemail }, {
    profileimage: withPrefix,
    name,
    phone,
    address,
    firstName,
    lastName,
    country,
    zipcode
  }, { new: true });
  res.json({
    loginemail,
    result: true,
    user,
  })
});


// app.post("/upload",multerCloudinary.single("file"),(req,res) => {
//     cloudinary.uploader.upload(req.file.path,(err,result) => {
//       if(err){
//         res.json({
//           result:false,
//           content:"Something Is Wrong"
//         })
//       }else{
//         res.json({
//           result:true,
//           content:result
//         })
//       }
//     })
// })


app.post("/cash",isLoggedInP, async (req,res) => {
  let { name, address, phone, totalPrice } = req.body
  let userCreate = await CashModel.create({
    name,
    address,
    phone,
    totalPrice
  })
  res.status(200).json({
    result: true,
    userCreate,
  })  
})


app.listen(4000, () => {
  console.log("Server Start");

})