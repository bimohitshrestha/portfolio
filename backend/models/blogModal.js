const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('blog',blogSchema)