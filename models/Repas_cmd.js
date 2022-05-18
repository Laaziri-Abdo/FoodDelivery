const mongoose = require("mongoose");

const Repas_cmdShema = new mongoose.Schema({

  price:{
    type: Number
  },
  quantity:{
    type: Number
  },
  repas_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Repas"
  },
  command_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Command_global"
  }

})

module.exports = mongoose.model("Repas_cmd", Repas_cmdShema);

