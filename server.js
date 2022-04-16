const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

const UtilisateurRoute=require('./routes/utilisateur')
const AuthentificationRoute=require('./routes/authentification')
const AnnonceRoute=require('./routes/annonce')
const Utilisateur = require('./models/Utilisateur');

//Connecting DataBase
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'karhabti-DB',
  
})
.then(()=> {
  console.log('DATABASE CONNECTED')
})
.catch((err) => {
  console.log(err)
})


app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.use(bodyParser.json({
   limit: '50mb'
}));
app.use(bodyParser.urlencoded({
   limit: '50mb',
   extended: true
}));



app.use('/api/Annonce', AnnonceRoute)
app.use('/api/authentification', AuthentificationRoute)
app.use('/api/utilisateur', UtilisateurRoute)
