const Blog = require('../models/blogModal')

//CREATE
exports.addBlog = async (req,res)=>{
    const newBlog = new Blog(req.body)
    try{
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    }catch(err){
        res.status(500).json(err)
    }
}


//DELETE
exports.deleteBlog = async (req,res) =>{
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json("blog has been deleted.")
    } catch (error) {
        res.status(500).json(err)
        
    }
}