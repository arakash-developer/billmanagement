const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

// let cashSchema = mongoose.Schema ({
//     email:String,
//     name:String,
//     address:{
//         type: String,
//         default: "Address",
//     },
//     phone:String,
//     totalPrice:Number,
// })
// module.exports = mongoose.model('cash',cashSchema)

//===================Abdul Kadir====================

const CashSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    imagePath: { type: String }, 
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cash', CashSchema);
