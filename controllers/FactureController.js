
const nodemailer = require("nodemailer");
const User = require("../models/Users")
const Command = require ("../models/Command_global")
const CommandRepas = require("../models/Repas_cmd")
const Repas = require('../models/Repas')
const Facture = require('../models/Facture')



// const createInvoice = async (req, res) => {
//   const commandeId = req.params._id;

//   const commande = await Command.findOne(
//     { raw: true },
//     { where: { _id: commandeId } }
//   );
 
//   const user = await User.findOne({ where: { "role.name": "client" } });
//   const commandeRepas = await CommandRepas.findOne(
//     { raw: true },
//     { where: { _id: commandeId } }
//   );

//   const repas = await Repas.findOne(
//     { raw: true },
//     { where: { repas_id: commandeRepas.repas_id } }
//   );

//   if (!commande.status == "delivered") {
//     res.status(400).json({
//       message: "order status its not delivered you cant create facture",
//     });
//   }
//   try {
//     const factur = await Facture.create({
//         command_id: req.body.command_id,
//       //   CommandeId: commandeId,
//     });

   

//     let transporter = nodemailer.createTransport({
//       host: "smtpout.secureserver.net",
//       secure: false,
//       secureConnection: false, // TLS requires secureConnection to be false
//       tls: {
//         ciphers: "SSLv3",
//       },
//       requireTLS: true,
//       port: 465,
//       service: "hotmail",
//       debug: true,
//       auth: {
//         user: "mikatotaki55@gmail.com",
//         pass: "anaha199308",
//       },
//     });

//     let info = await transporter.sendMail({
//       from: '"mohammed" mikatotaki55@gmail.com',
//       to: "hammimsamira@gmail.com",
//       subject: "facture de l'ordre",
//       text: "test",
//     });

//     console.log("here");
//     res.status(200).json({
//       message: "facture created successfully",
//       factur,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

const createInvoice = async (req, res) => {
  try {
      const price =  req.body.totalPrice
      const facture = await Facture.create({
          totalPrice : price
      })
  
      res.status(200).send(facture)

  } catch (error) {
      res.status(400).send(error)
  }

  
}

exports.edit = async(req, res) => {
  try {
      const facture = await Facture.findById(req.params.id);
      Object.assign(facture, req.body)

      facture.save();
      res.send({data: facture})
  } catch (error) {
      res.send(error)
  }
}

exports.getFactures = async(req, res) => {
  try {
      const facture = await Facture.find().populate('order')
      res.send( facture)
  } catch (error) {
      res.send(error)
  }
}

exports.getSingleFacture = async(req, res) => {
  try {
      const facture = Facture.findById(req.params.id).populate('order')
      res.status(200).send(facture)
  } catch (error) {

      res.status(404).send("not found !")
      
  }
}

module.exports = {
    createInvoice,
    // sendInvoice,
    // getInvoices,
    // getInvoiceById,
    // deleteInvoice
}