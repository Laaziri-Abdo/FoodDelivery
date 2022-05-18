const Annonce = require("../models/Annonces")


//Create Annonce
const createAnnouncement = async (req,res) => {
  const createannoce = await Annonce.create({
    title: req.body.title,
    descreption: req.body.descreption,
    price:req.body.price
  });
  try {
    res.json(createannoce);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


//Get Annonce by Id 
const getAnnouncementsbyid = async (req,res) => {
  const idAnnonce = req.params.idAnnonce
  const annonceId = await Annonce.findById(idAnnonce)
  try{
    res.json(annonceId);
  }catch(err){
    res.status(400).json({error:err.message})
  }
}


//Get All Annonce
const getAnnouncements = async (req,res) => {
  const annonce = await  Annonce.find()

  try{
    res.json(annonce);
  } catch (error){
    res.status(400).json({error:error.message});
  }
}

// Update Annonce
const updateAnnouncement = async (req, res) => {
  const {title,descreption,price}=req.body
  const updateannonce = await Annonce.findByIdAndUpdate({ _id: req.params.idAnnonce },{title,descreption,price} ,{ new: true })
  res.json({updateannonce});
}

//Delete Annoonce
const deleteAnnouncement = async (req,res) => {
  try {
    const deleteannonce = await Annonce.findByIdAndDelete(req.params.idAnnonce);
  
    if (!deleteannonce) {
      res.status(404).json({ message: "No Annonce Found" });
    } else {
      res.status(200).json({ message: "Annonce Has deleted successfully !!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
    createAnnouncement,
    getAnnouncements,
    updateAnnouncement,
    deleteAnnouncement,
    getAnnouncementsbyid
}