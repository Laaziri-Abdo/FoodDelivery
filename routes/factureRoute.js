const express = require("express");
const Router = express.Router();

const Facture = require("../controllers/FactureController");


Router
  .route("/")
  .post(Facture.createInvoice)


  module.exports = Router;
