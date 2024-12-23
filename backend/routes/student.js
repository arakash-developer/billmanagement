const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const studentModel = require("../models/student");


router.post("/", async (req, res) => {
    let { email, password } = req.body;
    let data = await studentModel.create({ email, password });
    res.status(200).json({
        result: true,
        data,
    })
})
router.get("/", async (req, res) => {
    let data = await studentModel.find();
    res.status(200).json({
        result: true,
        data,
    })
})

module.exports = router