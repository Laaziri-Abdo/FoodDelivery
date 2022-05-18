const express = require("express");
const router = express.Router();
const verify = require ('../verifyToken/verifyToken')

const Annonce = require("../controllers/AnnonceController")

router
    .route("/")
    .get(Annonce.getAnnouncements)
    .post(Annonce.createAnnouncement);

    router 
    .route("/:idAnnonce")
    .get(Annonce.getAnnouncementsbyid)
    .put(Annonce.updateAnnouncement)
    .delete(Annonce.deleteAnnouncement)


module.exports = router;