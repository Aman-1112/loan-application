const mongoose = require('mongoose');

const businessSchema=new mongoose.Schema({
    bname:{
            type:String,
            unique:true,
            required:[true,'Business must have name']
        },
    bdescription:{
            type:String,
            required:[true,'Person must have Some Services']
        },
    gst:{
            type:Number,
            required:[true,'Must have Gst Number']
        },
    contactNo:{
            type:Number,
            unique:true,
            required:[true,'Must have contact number']
        },
    estDate:Date,
    email:String,
    streetAddress:{
            type:String,
            required:[true,"office address having some Address"]
        },
    city:{
            type:String,
            required:[true,' must have city']
        },
    state:{
            type:String,
            required:[true,' must have state']
        },
    zipCode:{
            type:Number,
            required:[true,' must have zipCode']
        },
    country:{
            type:String,
            required:[true,'must have country']
        },
    loanAmount:{
            type:Number,
            required:[true,'Enter the loan Amount required']
        },
    annualRevenue:{
            type:Number,
            required:[true,'Person must have First Name']
        }
})

exports.businessModel=mongoose.model("business-loan",businessSchema);