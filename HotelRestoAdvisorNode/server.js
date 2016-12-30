var express = require('express');
var app = express();
var models = require('./model.js');
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var cors = require('cors');
app.use(cors({
    origin: true,
    credentials: true
}));
require('./fixtures');
//Route de Test
app.get('/', function (res, req) {
    console.log("Bonjour NodeJS");
    req.send("Bonjour NodeJS");
})


var contoller = require('./controller');
app.post('/Utilisateur/Creer', contoller.CreerUtilisateur);
app.post('/Login', contoller.Login);
app.post('/Hotel/Creer', contoller.CreerHotel);
app.get('/Hotels',contoller.RecupererHotel);
app.get('/Hotel/:Id', contoller.RecupererHotelParId);

app.post('/Restaurant/Creer', contoller.CreerRestaurant);
app.get('/Restaurants',contoller.RecupererRestaurant);
app.get('/Restaurant/:Id', contoller.RecupererRestaurantParId);


app.post('/ReservationHotel/Creer', contoller.CreerReservationHotel);
app.post('/ReservationHotel/Consulter/:Email', contoller.RecupererReservationHotelParEmail);

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

/** API path that will upload the files */
app.post('/upload', function(req, res) {
    upload(req,res,function(err){
        console.log(req.file);
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    });
});



app.listen(8080)

