var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('advisor');
var id = pow.createObjectId;
fixtures.clearAndLoad({
    Utilisateur: [{
        "Nom": "Keskes",
        "Prenom": "Islem",
        "Email": "keskes.islem16@gmail.com",
        "Password":"123",
      

    }]
}, function (err) {
    if (err) {
        console.log('************** ERREUR : clearAndLoad');
        console.log(err);
        console.log('************** ERREUR : clearAndLoad');
    }
});