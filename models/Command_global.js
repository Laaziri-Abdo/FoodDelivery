
const { string, required } = require("joi");
const mongoose = require("mongoose");

const global_commandsSchema = new mongoose.Schema({
  total_price:{
    type:Number
  },
  total_quantity:{
    type:Number
  },
  taken:{
    type: Boolean
  },
  status:{
    type:String,
    enum: ["delivering","delivered","ready"],
    default: "ready",
    required: true
  }
})

module.exports = mongoose.model("Command_global", global_commandsSchema);