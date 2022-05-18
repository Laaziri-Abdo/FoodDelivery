const mongoose = require("mongoose");

// create Repas Schema

const RepasSchema = new mongoose.Schema({
  
  title : {
    type: String,
    required: true,
    min: 3,
    max:30
},
  descreption: {
    type: String,
    required: true
  },
  price:{
    type: Number
  },
  
  image:[{
    type:String
  }],

 type:{
   type:String,
   enum:["entrer","principal","dessert"]
 }
});

// creating the model Repas
module.exports = mongoose.model('Repas', RepasSchema);