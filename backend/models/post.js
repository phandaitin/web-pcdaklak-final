const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content :   {type: String ,  trim :true ,  required:[true,'Post must have content'] },
    author  : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'user'
    },    
},{ timestamps: true} 
);    
 
const post = mongoose.model('post', schema );   //post i a colectiton in db mongo
module.exports = post ;

 