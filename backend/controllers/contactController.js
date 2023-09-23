const Contact = require('../models/contactModal')


//CREATE
exports.addContact = async(req,res) => {
 
    try{
       const newContact = new Contact({
        name:req.body.name,
        number:req.body.number,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
                
       })
       await newContact.save()
       res.status(200).send("Contact Successfully.")
    }catch(err){
        res.status(500).send("failed to contact.")
    }
}