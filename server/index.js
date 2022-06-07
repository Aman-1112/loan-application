const dotenv = require('dotenv');
dotenv.config({path:'./configuration.env'})
const express = require('express');

const mongoose = require('mongoose');
const app=express();

const DB=process.env.DB_CONNECTION_STRING.replace('<password>',process.env.PASSWORD)
mongoose.connect(DB,{useNewUrlParser:true})
.then(()=>console.log('Connected To Database'))
.catch((err)=>console.error(err))

const {personalModel} = require('./personalModel/index');
const {businessModel} = require('./businessModel/index');
app.use(express.json())

app.post('/personalDetail',async(req,res)=>{
    console.log(req.body);
    try {
        await personalModel.create(req.body);
        res.status(200).send()
    } catch (error) {
        console.error(error);
        res.status(400).send();
    }
})

app.post('/businessDetail',async(req,res)=>{
    console.log(req.body);
    try {
        await businessModel.create(req.body);
        res.status(200).send()
    } catch (error) {
        console.error(error);
        res.status(400).send();
    }
})


const port =process.env.PORT||5000
app.listen(port,(err)=>{
    if(err) console.error(err);
    console.log(`My Server running at ${port}....`);
})
