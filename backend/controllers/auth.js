const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
exports.register = async (req,res,next)=>{
    try {//const user = await userModel.create(req.body)                
        const user = await new userModel(req.body)  
        user.save()          
        const token = jwt.sign( { userId: user._id}, process.env.APP_SECRET)        
        return res.status(200).json({
            status : "success",
            data  :{token, userName: user.name}
        })        
    } catch (error) {
        res.json(error)
    }
}    


exports.login = async (req,res,next) =>{
    try {        
        const user = await userModel.findOne({email: req.body.email})
        if(!user){
           // Email: Email is not correct  
        }
        if(bcrypt.compareSync( req.body.password , user.password)){
            const token = jwt.sign( { userId: user._id}, process.env.APP_SECRET)                    
            res.status(200).json({
                status : "success",
                data  :{token, userName: user.name}
            })        
        }else {
            // Error: Password is not correct  
        }

    } catch (error) {
        res.json(error)
    }
}

exports.abc = (req,res,next) =>{
    res.json('abc')
}

// module.exports ={
//     abc
// }
 

 
