const mongoose = require("mongoose");

const AnnoncerepasSchma = new mongoose.Schema({
  annonce_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Annonces"
  },

  repas:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Repas"
  }
  
})

module.exports = mongoose.model('Annonce_repas', AnnoncerepasSchma);