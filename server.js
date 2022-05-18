require("dotenv").config()
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const app = express();


//Send Mail on gmail
require("./nodemailer/sendMail")

//requiring mongoose
require("./config/mongoose")

//Import Routes
const authRoute = require('./routes/authRoute')
const annonceRoute = require('./routes/annonceRoute');
const repasRoute = require('./routes/repasRoute');
const repascmdRoute = require('./routes/repascmdRoute');
const factureRoute  = require("./routes/factureRoute");
const commnadglob = require("./routes/cmdglobalRoute");


//Middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Route Middlewares
app.use('/api/auth', authRoute);
app.use('/api/annonce',annonceRoute);
app.use('/api/repas', repasRoute);
app.use('/api/repascmd', repascmdRoute);
app.use('/api/facture',factureRoute);
app.use('/api/commandglobal',commnadglob)


//Home Page
app.get("/", (req, res) => {
  res.json({
    message: "Wellcome !!",
  });
})



app.listen(PORT, () =>
  console.log(`server is running at : http://localhost:${PORT}`)
);