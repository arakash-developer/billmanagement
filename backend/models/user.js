const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

let userSchema = mongoose.Schema ({
    email:String,
    name:String,
    password:String,
    firstName:String,
    lastName:String,
    companyName:{
        type: String,
        default: "Company Name",
    },
    address:String,
    country:String,
    zipcode:{
        type: String,
        default: "00000",
    },
    phone:String,
    profileimage:{
        type: String,
        default: "default.jpg"
    },
})
module.exports = mongoose.model('user',userSchema)