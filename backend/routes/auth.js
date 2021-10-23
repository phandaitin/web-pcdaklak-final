const express = require('express')
const router = express.Router()

const {checkCurrentUser}= require('../middlewares/checkCurrentUser')
const {register , login , getCurrentUser }= require('../controllers/auth')


router.route('/register').post(register)
router.route('/login').post(login) 
router.route('/').get( checkCurrentUser , getCurrentUser)

 


module.exports = router

