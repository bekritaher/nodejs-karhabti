const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const annonceSchema = new Schema({
    titre: {
        type: String,
    },
    marque: {
        type: String,
    },
    prix: {
        type: String,
    },
    date: {
        type: String,
    },
    gouvernorat: {
        type: String,
    },
    delegation: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
}, { timestamps: true});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce