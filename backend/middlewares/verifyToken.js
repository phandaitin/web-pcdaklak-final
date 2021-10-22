const jwt = require('jsonwebtoken')

exports.verifyToken =(req,res,next)=>{
    const Authorization = req.header('authorization')

    if(!Authorization){
        // error: chuwnsg thuwcj
    }
    // get tokens
    const token = Authorization.replace('Bearer ', '')
    //verify token
    const {userId}  = jwt.verify(token, process.env.APP_SECRET)
    // Gan cho req
    
    req.user = {userId}
    next()
}
