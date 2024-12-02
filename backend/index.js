const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
let UserModel = require("./models/user");
const ProfileModel = require("./models/profilesetting");
const multer = require('./utils/multer');

app.use(cors({
  origin: ['https://billmanagements.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));


app.get('/', (req, res) => {
  res.send("Helllow500")
});


app.post('/create', (req, res) => {
  let { name, password, companyName, phone,firstName,lastName, address,zipcode, country,username, email } = req.body;
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
      })
    } else {
      let data = jwt.verify(token, 'Akash')
      req.userdata = data;
      next()
    }
  } else {
    res.json({
      result: false,
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

app.post('/profilesetting', isLoggedInP, async (req, res) => {
  let singleemail = req.userdata.email
  let singleclient = await ProfileModel.findOne({ email: singleemail })
  // console.log(singleclient);
  let profile = await ProfileModel.create({
    email: singleemail,
    profileimage: req.body.profileimage
  })
  res.json(profile)
});

app.post('/profilesettingupdate', isLoggedInP, async (req, res) => {
  let singleemail = req.userdata.email
  let singleclient = await ProfileModel.findOneAndUpdate({ email: singleemail }, {
    profileimage: req.body.profileimage
  }, { new: true })
  res.json(
    {
      profileset: singleclient
    })
});

app.get('/profilesetting', isLoggedInP, async (req, res) => {
  let singleemail = req.userdata.email
  let profileset = await ProfileModel.findOne({ email: singleemail })
  let { email, profileimage } = profileset
  res.json({
    profileset: {
      email,
      profileimage: "https://billmanagement-server.vercel.app/images/" + profileimage
    }
  })
});



app.post('/profileuploadupdate', isLoggedInP, multer.single('file'), async (req, res) => {
  let loginemail = req.userdata.email
  let user = await UserModel.findOne({ email: loginemail });
  let { name, email, phone, address, firstName, lastName, country, zipcode } = req.body
  user.profileimage = req.file.filename
  user.name = name
  user.email = email
  user.phone = phone
  user.address = address
  user.firstName = firstName
  user.lastName = lastName
  user.country = country
  user.zipcode = zipcode
  await user.save()
  res.json({
    file: req.file.filename,
    result: true,
    name,
    user,
  })
});



app.listen(4000, () => {
  console.log("Server Start");

})