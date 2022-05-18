const Repacmd = require("../models/Repas_cmd")

//create repas command 
const createRepascmd = async(req,res) => {
  const create =  await Repacmd.create({
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try{
    res.json(create);

  }catch(err){
    res.status(400).json({error:err.message});

  }
}

//Get All Repas Command
const getAllRepascmd = async (req,res) => {
  const get = await Repacmd.find().populate("repas_id");
  try{
    res.json(get);
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

//Get Repas Command By Id 
const getRepasByid = async (req,res) =>{
  const getrapasbyid = await Repacmd.findById({_id: req.params.id})
  try{
    res.json(getrapasbyid);
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

//Update Repsa Command
const updateRepascmd = async (req, res) => {
  const {price,quantity}=req.body
  const update = await Repacmd.findByIdAndUpdate({ _id: req.params.id },{price,quantity} ,{ new: true })
  res.json({update});
}

//Delete Repas Command
const deleteRepascmd = async (req,res) => {
  const deletereapscmd =  await Repacmd.findByIdAndDelete({ _id: req.params.id})
  try{
    res.json({message: "Repas Command Deleted !!"})
  }catch(err){
    res.status(400).json({error:err.message})
  }

}

module.exports = {
  createRepascmd,
  updateRepascmd,
  getAllRepascmd,
  deleteRepascmd,
  getRepasByid
}