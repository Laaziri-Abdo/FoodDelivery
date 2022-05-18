const express = require('express');
const router = express.Router();

const Repacmd = require("../controllers/RepacmdController");

// router
//     .route("/search")
//     .post(Repacmd.searchForRepacmd);

router
    .route("/")
    .get(Repacmd.getAllRepascmd)
    .post(Repacmd.createRepascmd);

// router
//     .route("/:idMeal/order")
//     .post(Repacmd.orderRepacmd);

// router
//     .route("/count")
//     .get(Repacmd.getCount);

// router
//     .route("/recommended")
//     .get(Repacmd.getRecommendedRepacmd);

router 
    .route("/:id")
    .get(Repacmd.getRepasByid)
    .put(Repacmd.updateRepascmd)
    .delete(Repacmd.deleteRepascmd);

module.exports = router;