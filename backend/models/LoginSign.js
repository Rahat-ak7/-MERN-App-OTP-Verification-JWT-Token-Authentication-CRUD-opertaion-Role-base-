const mongoose = require('mongoose')


const RegesSchema = new mongoose.Schema({
name: String,
email: String,
password : String,
role  :{
    type: String,
    default:'visitor'
}


})

const   RegesModal = mongoose.model("registers",RegesSchema)  //1ST IS COLLECTION AND 2ND IS SCHEMA
module.exports =    RegesModal
