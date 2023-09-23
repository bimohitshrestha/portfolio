const express = require('express');
const { addBlog, deleteBlog } = require('../controllers/blogController');


const router = express.Router();

//create 
router.post("/",addBlog)
router.delete("/:id",deleteBlog)

module.exports = router