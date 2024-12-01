const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

let profilesettingSchema = mongoose.Schema({
    // username: String,
    email: String,
    // password: String,
    // name: String,
    // companyName: String,
    // address: String,
    // phone: String,
    profileimage:{
        type: String,
        default: "default.jpg"
    }
})
module.exports = mongoose.model('profilesetting', profilesettingSchema)