const express = require('express')
let cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const cors = require('cors')
let app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
let UserModel = require("./models/user")


app.get('/', (req, res) => {
  res.send("Helllow")
});


app.post('/create', (req, res) => {
  let { name, password, username, email } = req.body;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async (err, hash) => {
      // Store hash in your password DB.
      let userCreated = await UserModel.create({
        username,
        name,
        email,
        password: hash,
      })
      let token = jwt.sign({ email }, 'Akash');
      res.cookie("token", token);
      res.json(userCreated);
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
      res.cookie("token", token);
      res.json({ result });
    } else {
      res.json({ result: false });
    }
  });

})

app.get('/logout', (req, res) => {
  res.cookie("token", "");
  res.json("Log out")
})

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.json({
      result:false,
      content:"You Must Be Loged In First",
    })
  } else {
    let data = jwt.verify(req.cookies.token , 'Akash')
    req.userdata = data;
  }
  // console.log(req.cookies);
  next();
}

app.get('/profile', isLoggedIn, (req, res) => {
  res.json({
    result:true,
    content:"Yes You Can See",
    data: req.userdata,
  })
})

app.listen(4000, () => {
  console.log("Server Start");

})