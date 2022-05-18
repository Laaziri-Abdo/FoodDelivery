const mongoose = require("mongoose");

const FactureSchema = new mongoose.Schema({
  command_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Command_global"
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Users"
  }
})

module.exports = mongoose.model("Facture", FactureSchema);