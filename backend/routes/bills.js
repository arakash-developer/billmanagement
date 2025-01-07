const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const CashModel = require("../models/cash");

let isLoggedIn = (req, res, next) => {
  try {
    let token = req.cookies.token;
    console.log(`token: ${token}`);
    console.log("Okk");
    
    if (token) {
      if (token === "") {
        res.json({
          result: false,
          messege: "You Must Be Loged In First...Token Is Empty",
        });
      } else {
        try {
          let data = jwt.verify(token, "Akash");
          req.userdata = data;
          next();
        } catch (err) {
          res.json({
            result: false,
            messege: "You Must Be Loged in ,, Token Is Invalid",
          });
        }
      }
    } else {
      res.json({
        result: false,
        messege: "You Must Be Loged In First",
      });
    }
  } catch (error) {
    res.json({
      result: false,
      messege: error.message,
    });
  }
};

router.get("/", isLoggedIn,async (req, res) => {
  res.cookie('userSession', 'abcd1234'); // Cookie name and value
  let cok = req.cookies;
  console.log(cok);
  res.status(200).json({
    result: true,
    messege: "You Are Loged In",
    data:"AKASH IS HERE,,,Your Data"
  });
});

module.exports = router;
