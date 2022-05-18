const express = require("express");
const router = express.Router();
const verify = require ('../verifyToken/verifyToken');

const Repas = require("../controllers/RepasController");


router
    .route("/search")
    .post(Repas.searchForRepas);

router
    .route("/")
    .get(Repas.getRepas)
    .post(Repas.createRepas);

router
    .route("/:idMeal/order")
    .post(Repas.orderRepas);

router
    .route("/count")
    .get(Repas.getCount);

router
    .route("/recommended")
    .get(Repas.getRecommendedRepas);

router 
    .route("/:id")
    .get(Repas.getRepasbyid)
    .put(Repas.updateRepas)
    .delete(Repas.deleteRepas);

module.exports = router;