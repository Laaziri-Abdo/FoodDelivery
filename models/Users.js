const mongoose  = require("mongoose");


//create Role schema
const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["admin", "client", "livreur"],
    default: "livreur"
  }
})

// create Users schema
const userschema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  fullname:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  email:{
    type: String,
    required: true,
    min: 6,
    max:255
  },
  password: {
    type: String,
    required: true,
    max:1024,
    min:6
  },
  phone:{
    type:Number,
    required:true,
  },
  image:{
    type:Buffer
  },
  adress:{
    type:String,
    required: false
  },
  date:{
    type:Date,
    default:Date.now
  },
  role: RoleSchema,
});

module.exports = mongoose.model('Users',
userschema);

