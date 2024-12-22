const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CashModel = require("../models/cash");

let isLoggedIn = (req, res, next) => {
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
            messege: "You Must Be Loged In First"
        })
    }
}

router.post("/", isLoggedIn, async (req, res) => {
    res.status(200).json({
        result: true,
        messege: "You Are Loged In",
    })
})

module.exports = router