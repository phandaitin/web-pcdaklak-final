
const postModel = require('../models/post')

// get All Posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const post =  await postModel.find({})
                                     .select('content updatedAt')   
                                     .populate('author','name')
        res.status(200).json({
            status:'success',
            result:post.length, 
            data: { post }
        })
    } catch (error) {
        next(error)        
    }
}

// get One Post
exports.getOnePost = async (req, res, next) => {
    try {
        const {postId} = req.params
        
        const post =  await postModel.findById({_id: postId})
                                     .select('content updatedAt')   
                                     .populate('author','name')
        console.log(post);
        res.status(200).json({
            status:'success',            
            data: { post }
        })
    } catch (error) {
        next(error)        
    }
}
// create One Post 
exports.createOnePost =  async (req,res,next) =>{    //const data =  postModel.create()
    try {
        const {userId} = req.user         
        const post =  await postModel.create({...req.body, author: userId} )         
        //const post =  await new postModel({...req.body, author: userId} ) post.save()
        res.status(201).json({
            status:'success',            
            data: { post }
        })
    } catch (error) {
        //console.log(error);
         next(error)   
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
        next(error)
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
        next(error)      
    }
}
 
 
 