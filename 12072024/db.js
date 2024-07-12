const mongoose=require("mongoose");

// define the mongoDb Connection url
const mongoURL = `mongodb://localhost:27017/hotels`;


//setup Mongdb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//get the default connection 
//mongoose maintains a default connection object representing the mongodb connection
const db =mongoose.connection;


//defining Event listener for databse connection
db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('disconnected',()=>{
    console.log("Disconnected to server")
})

db.on('error',()=>{
    console.log("error occured")
})

module.exports= db;