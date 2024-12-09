const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

let cashSchema = mongoose.Schema ({
    email:String,
    name:String,
    address:{
        type: String,
        default: "Address",
    },
    phone:String,
    totalPrice:Number,
})
module.exports = mongoose.model('cash',cashSchema)