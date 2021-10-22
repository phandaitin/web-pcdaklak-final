const express = require('express')
const router = express.Router()

const {register , login , abc }= require('../controllers/auth')


router.route('/register').post(register)
router.route('/login').post(login) 
router.route('/').get(abc) 


module.exports = router

