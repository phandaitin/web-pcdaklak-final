const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const {getAllPosts,   createOnePost, updateOnePost, deleteOnePost } = require('../controllers/post')
const router = express.Router()

router.route('/getAllPosts').get(getAllPosts)
router.route('/createOnePost').post(verifyToken , createOnePost)        
router.route('/updateOnePost/:postId').put(verifyToken , updateOnePost)
router.route('/deleteOnePost/:postId').delete(verifyToken ,deleteOnePost)

        

module.exports = router 
