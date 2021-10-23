const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const {getAllPosts, getOnePost,  createOnePost, updateOnePost, deleteOnePost } = require('../controllers/post')
const router = express.Router()

router.route('/').get(getAllPosts)
                 .post(verifyToken , createOnePost)        
//router.route('/getOnePost/:postId').get(getOnePost)
router.route('/:postId').get(getOnePost)
                        .put(verifyToken , updateOnePost)
                        .delete(verifyToken ,deleteOnePost)

        

module.exports = router 
