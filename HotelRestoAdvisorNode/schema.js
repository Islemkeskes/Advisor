var mongoose = require('./db.js').mongoose;

exports.schemaUtilisateur = new mongoose.Schema({

    Nom: {type: String, uppercase: true},
    Prenom: String,
    Email: {type: String, index: true, unique: true, required: true},
    Password: {type: String, required: true},
    Tel:String,
    Role:String
});

exports.schemaHotel = new mongoose.Schema({

    Id: {type: Number, index: true,unique:true},
    Nom: {type: String, required: true},
    Tel :String,
    Email:  String,
    SiteWeb: String ,
    Description: String,
    Adresse :String ,
    CategorieHotel: String,
    Ville :String ,
    Image: String,
    Classification: String ,
    Tarif:  String,
    DateCreation: Date

});

exports.schemaRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true,unique:true},
    Nom: {type: String, required: true},
    Tel :String,
    Email:  String,
    SiteWeb: String ,
    Description: String,
    Adresse :String ,
    CategorieRestaurant: String,
    Ville :String ,
    Image: String,
    Classification: String ,
   
});

exports.schemaImageHotel = new mongoose.Schema({
    Id: {type: Number},
    UrlImage: {type: String},
    Description: {type: String}


});

exports.schemaImageRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true, unique: true, required: true},
    UrlImage: {type: String},
    Description: {type: String},
});

exports.schemaCategorieHotel = new mongoose.Schema({
    Id: {type: Number, index: true, unique: true, required: true},
    Libelle: {type: String},
});

exports.schemaCategorieRestaurant = new mongoose.Schema({
    Id: {type: Number, index: true, unique: true, required: true},
    Libelle: {type: String},
});

exports.schemaVille = new mongoose.Schema({
    Id: {type: Number, index: true, unique: true, required: true},
    Libelle: {type: String},
});


exports.schemaReservationHotel = new mongoose.Schema({
    IdUtilisateur:String,
    IdHotel:String,
    NbrePersonne:Number,
    NbreChambre:Number,
    DateArrive:Date,
    DateDepart:Date,
    DateCreation:Date,
    TotalTarif:String
});