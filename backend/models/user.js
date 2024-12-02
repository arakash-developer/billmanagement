const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

let userSchema = mongoose.Schema ({
    username:String,
    email:String,
    password:String,
    name:String,
    companyName:String,
    address:String,
    firstName:String,
    lastName:String,
    country:String,
    zipcode:String,
    phone:String,
    profileimage:{
        type: String,
        default: "default.jpg"
    },
})
module.exports = mongoose.model('user',userSchema)