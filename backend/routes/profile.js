const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");

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

router.post('/', isLoggedIn, async (req, res) => {
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

// router.get('/', isLoggedIn, async (req, res) => {
//     let loginemail = req.userdata.email
//     let user = await UserModel.findOne({ email: loginemail });
//     res.json({
//       result: true,
//       user,
//     })
//   });

module.exports = router