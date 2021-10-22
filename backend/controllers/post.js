
const postModel = require('../models/post')

// get All Posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const post =  await postModel.find({}).populate('author')
        res.status(200).json({
            status:'success',
            result:post.length, 
            data: { post }
        })
    } catch (error) {
        res.json(error)        
    }
}

// create One Post 
exports.createOnePost =  async (req,res,next) =>{    //const data =  postModel.create()
    try {
        const {userId} = req.user         
        const post =  await new postModel({...req.body, author: userId} )        
        //const post =  await new postModel(req.body )        
        post.save()
        res.status(201).json({
            status:'success',            
            data: { post }
        })
    } catch (error) {
        res.json(error)        
    }
}

 

// update One Post
exports.updateOnePost = async (req,res,next) =>{
    try {
        const {postId} = req.params        
        const post =  await postModel.findByIdAndUpdate(postId, {...req.body},{new:true, runValidators:true }  )
        res.status(201).json({
            status:'success',            
            data: { post }
        })
    } catch (error) {
        res.json(error)        
    }
}

// delet One Post
exports.deleteOnePost = async (req,res,next) =>{
    try {
        const {postId} = req.params        
        await postModel.findByIdAndDelete(postId)        
        res.status(200).json({
            status:'success',            
            message:'Post has been delete...'
        })
    } catch (error) {
        res.json(error)        
    }
}
 
 
 