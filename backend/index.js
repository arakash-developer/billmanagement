const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
let UserModel = require("./models/user");
app.use(cors({
  methods:["POST","GET"],
  credentials:true,
}));


app.get('/', (req, res) => {
  res.send("Helllow")
});


app.post('/create', (req, res) => {
  let { name, password, companyName, phone, address, username, email } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async (err, hash) => {
      // Store hash in your password DB.
      let userCreated = await UserModel.create({
        username,
        email,
        password: hash,
        name,
        companyName,
        address,
        phone,
      })
      let token = jwt.sign({ email }, 'Akash');
      res.cookie("token", token);
      res.json({
        userCreated,
        toke: token,
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
  res.cookie('token','');
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

app.get('/clientdata', async (req, res) => {
  let clientdata = await UserModel.find();
  res.json({
    clientdata
  });
});

app.listen(4000, () => {
  console.log("Server Start");

})