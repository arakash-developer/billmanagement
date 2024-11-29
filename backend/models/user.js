const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/techstoreDb")

let userSchema = mongoose.Schema ({
    username:String,
    email:String,
    password:String,
    name:String,
    companyName:String,
    address:String,
    phone:String,
})
module.exports = mongoose.model('user',userSchema)