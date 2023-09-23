const express = require('express')

const Contact = require('../models/contactModal');
const { addContact } = require('../controllers/contactController');

const router = express.Router();

router.post("/",addContact)

module.exports = router