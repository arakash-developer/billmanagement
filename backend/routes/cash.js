const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const CashModel = require("../models/cash");
const fs = require('fs');
const path = require('path');
const { log } = require("console");

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
    res.status(200).json({
        cashData,
        result: true
    });
});

router.post("/", isLoggedIn, async (req, res) => {
    let { name, address, phone, totalPrice , image } = req.body
    let loginemail = req.userdata.email
    let userCreate = await CashModel.create({
        email: loginemail,
        name,
        address,
        phone,
        totalPrice,
        image,
    })
    res.status(200).json({
        result: true,
        userCreate,
    })
})

// kadir

// router.post("/", isLoggedIn, async (req, res) => {
//     let { name, address, phone, totalPrice, image } = req.body;

//     if (!image) {
//         return res.status(400).json({
//             result: false,
//             message: "Image is required",
//         });
//     }

//     let loginemail = req.userdata.email;

//     try {
     
//         const base64Data = image.replace(/^data:image\/png;base64,/, '');


//         const fileName = `${Date.now()}-cash-memo.png`;
//         const filePath = path.join(__dirname, '../uploads', fileName);

//         fs.writeFileSync(filePath, base64Data, 'base64');

//         let userCreate = await CashModel.create({
//             email: loginemail,
//             name,
//             address,
//             phone,
//             totalPrice,
//             imagePath: `/uploads/${fileName}`, 
        
//         });
        

//         res.status(200).json({
//             result: true,
//             userCreate,
//         });
//     } catch (error) {
//         console.error('Error saving image:', error);
//         res.status(500).json({
//             result: false,
//             message: "Failed to save data",
//         });
//     }
    
// });


module.exports = router