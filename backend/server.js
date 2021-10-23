//dotenv
require('dotenv').config()

const express = require('express')
const app = express()

//mongoose
const mongoose = require('mongoose')

//cors
const cors = require('cors')
app.use(cors())

// body parser
app.use(express.json())

// define router
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

// define errorHandler
const {errorHandler}  = require('./middlewares/errorHandler') 

// DB connect
// cach 2 truc tiep
//mongoose.connect('mongodb://localhost:27017/db_webpcdaklak',{ useNewUrlParser: true   });
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true   });

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lgrhg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// cach 1
//const {connect} = require('./config/db')
//connect()  ;




//Mount route
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/post', postRoute)

// unhandled route

app.all('*' , (req,res,next)=>{
    const err = new Error('The route can not be found...')
    err.statusCode = 404
    next(err)
})

// errorHandler 
app.use(errorHandler)

// listen port
const port = process.env.APP_PORT 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
