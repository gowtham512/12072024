const express = require("express")
const app = express();
const db =require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person =require('./models/Person');

const port =3000


app.get("/",(req,res)=>{
    res.send('Welcome to my hotel')
})

app.post('/person',async(req,res)=>{
    try{
        const data = req.body
        //Create a new Person document using the Mongoose model
        const newPerson = new Person(data);
        const response=await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({
            error: "internal server error"
        })
    }

})

app.get('/person',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }
    catch{
        console.log(err);
        res.status(500).json({
            error: "internal server error"
        })
    }
    })
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})