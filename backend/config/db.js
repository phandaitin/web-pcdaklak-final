const mongoose = require('mongoose')
//require('dotenv').config()
const connect = async ()=>{
    try {
       await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true                 
        });
        console.log('DB Connected !!!');
    } catch (error) {
         console.log('Error Connect: ' + error.message);
         process.exit(1);        
    }
    finally{
        mongoose.connection.close();
    }
}
  module.exports = { connect }