const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arakashdeveloper:LlmmKsEH1MNpF2R8@akash.f7phc.mongodb.net/billmanagement")

let studentSchema = mongoose.Schema({
    email: String,
    password: String,
})
module.exports = mongoose.model('student', studentSchema)