const mongoose = require("mongoose");

// create Annonce Schema

const AnnonceSchema = new mongoose.Schema({
  
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
    type:Number,
  },
  
  date:{
    type:Date,
    default:Date.now
  }

});

// creating the model booking
module.exports = mongoose.model('Annonce', AnnonceSchema);