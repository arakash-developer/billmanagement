const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
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
            messege: "You Must Be Loged In First...Token Not Found"
        })
    }
}



router.get('/', isLoggedIn, async (req, res) => {
    let loginemail = req.userdata.email
    let cashData = await CashModel.find({ email: loginemail });
    res.cookie('token', 'Akash')
    res.status(200).json({
        cashData,
        result: true
    });
});

router.post("/", isLoggedIn, async (req, res) => {
    let { name, address, phone, totalPrice } = req.body
    let loginemail = req.userdata.email
    let userCreate = await CashModel.create({
        email: loginemail,
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

module.exports = router