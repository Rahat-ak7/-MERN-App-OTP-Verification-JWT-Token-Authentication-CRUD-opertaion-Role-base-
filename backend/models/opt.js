const mongoose = require('mongoose')


const otpSchema = new mongoose.Schema({
email: String,
otp: String
})

const   RegesModal = mongoose.model("otp",otpSchema)  //1ST IS COLLECTION AND 2ND IS SCHEMA
module.exports =    RegesModal
