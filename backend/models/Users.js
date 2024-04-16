const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
resturantname: String,
ownername: String,
contactno : Number,
address : String


})

const  UserModal = mongoose.model("users",UserSchema)  //1ST IS COLLECTION AND 2ND IS SCHEMA
module.exports =    UserModal
