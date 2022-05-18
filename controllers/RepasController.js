const Repas = require("../models/Repas");

//Create Repas
const createRepas = async(req,res) => {
  const createrepas = await Repas.create({
    title: req.body.title,
    descreption: req.body.descreption,
    price:req.body.price,
    image:req.body.image,
    type:req.body.type
  });
  try {
    res.json(createrepas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//Get All Repas
const getRepas = async (req,res) => {
  const annonce = await  Repas.find()
  try{
    res.json(annonce);
  } catch (error){
    res.status(400).json({error:error.message});
}
}

//Get Repas by Id
const getRepasbyid = async (req,res) => {
  const id = req.params.id
  const repasid = await Repas.findById(id)
  try{
    res.json(repasid);
  }catch(err){
    res.status(400).json({error:err.message})
  }
}
const orderRepas = (req,res) => {}

const searchForRepas = async(req,res) => {
  try {
    const repasbyname = await Repas.find({ title: req.body.title }).exec();
    if (!repasbyname) res.status(404).json({ message: "not hotel found" });
    res.status(200).json(repasbyname);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getRecommendedRepas = (req,res) => {}

const getCount = (req,res) => {}



//Update Repas
const updateRepas = async (req, res) => {
  const {title,descreption,price,image,type}=req.body
  const upadaterepas = await Repas.findByIdAndUpdate({ _id: req.params.id },{title,descreption,price,image,type} ,{ new: true })
  res.json({upadaterepas});
}


//Delete Repas
const deleteRepas = async (req,res) => {
  try {
    const deleterepas = await Repas.findByIdAndDelete(req.params.idrepas);
  
    if (!deleterepas) {
      res.status(404).json({ message: "No Repas Found" });
    } else {
      res.status(200).json({ message: "Repas Has deleted successfully !!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    createRepas,
    getRepas,
    orderRepas,
    searchForRepas,
    getRecommendedRepas,
    getCount,
    updateRepas,
    deleteRepas,
    getRepasbyid
}
