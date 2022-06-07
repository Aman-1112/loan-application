const mongoose = require('mongoose');
const personalSchema=new mongoose.Schema({
        fname:{
            type:String,
            required:[true,'Person must have First Name']
        },
        lname:{
            type:String,
            required:[true,'Person must have Last Name']
        },
        age:{
            type:Number,
            required:[true,'Person must have age']
        },
        phoneNo:{
            type:Number,
            unique:true,
            required:[true,'Person must have any Phone No']
        },
        birthDate:Date,
        email:String,
        streetAddress:{
            type:String,
            required:[true,'Person must have Address']
        },
        city:{
            type:String,
            required:[true,'Person must have city']
        },
        state:{
            type:String,
            required:[true,'Person must have state']
        },
        country:{
            type:String,
            required:[true,'Person must have country']
        },
        zipCode:{
            type:Number,
            required:[true,'Person must have area zipcode']
        },
        loanAmount:{
            type:Number,
            required:[true,'Enter the loan Amount required']
        },
        annualIncome:Number,
        loanReason:String
})

exports.personalModel=mongoose.model("personal-loan",personalSchema);
