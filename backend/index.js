const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const bodyParser = require("body-parser")
require('dotenv').config()

const port = process.env.PORT

const db = require('./Database/connection')

const contact = require('./routes/contact.js')
const blog = require('./routes/blog.js')


const app = express()


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.use('/contact',contact)
app.use('/blog',blog)

app.get('/erik',(req,res)=>{
    res.send("Erik Ten hag")
})

//to start port

app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})