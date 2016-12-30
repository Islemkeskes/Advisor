var models = require('./model');

/********************************/ /********** Utilisteur **************/ /********************************/
exports.CreerUtilisateur = function (req, res) {
    console.log('Creer User', req.body);
    models.Utilisateur(req.body).save();
    res.json(req.body);
};
exports.Login = function (req, res) {
    console.log('Login', req.body);
    var options = {Email: req.body.Email, Password: req.body.Password};
    models.Utilisateur.findOne(options, function (err, utilisateur) {
        if (err) {
            return console.error(err);
        }
        console.error('user', utilisateur);
        res.json(utilisateur);
    });
};


/********************************/ /**********  Categorie Hotel **************/ /********************************/

exports.CreerCategorieHotel = function (req, res) {
    console.log('CreerCategorieHotel', req.body);
    models.CategorieHotel(req.body).save();
    res.json(req.body);
};

exports.RecupererCategorieHotel = function (req, res) {
    console.log('RecupererCategorieHotel');
    models.CategorieHotel.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categorieHotel);
    });
};


/********************************/ /**********  Hotel **************/ /********************************/


exports.CreerHotel = function (req, res) {
    console.log('CreerHotel', req.body);
    models.Hotel(req.body).save();
    res.json(req.body);
};

/*
exports.FindNext = function (req, res) {
    var options = {Nom: req.params.Nom};
    models.Hotel.findAndModify(
        {
            query:{Nom: options},
            update:{$inc : {Id:1}},
            new :true
        }
    )
};
exports.CreerHotelInc = function (req, res) {

    models.Hotel.insert(
        {
            Id:FindNext()
        }

    )
    res.json(req.body);
};
*/
exports.RecupererHotel = function (req, res) {
    console.log('RecupererHotel');
    models.Hotel.find(function (err, hotels) {
        if (err) {
            return console.error(err);
        }
        res.json(hotels);
    });
};


exports.RecupererMaxId = function (req, res) {
    console.log('RecupererHotel');
    models.Hotel.findOne(sort.find(sort=[("Id", -1)]));
};
//db.things.find_one(sort=[("uid", -1)])

exports.RecupererHotelParId = function (req, res) {
    console.log('RecupererHotelParId');
    var options = {Id: req.params.Id};
    models.Hotel.findOne(options, function (err, hotel) {
        if (err) {
            return console.error(err);
        }
        res.json(hotel);
    });
};



exports.RecupererHotelParCategorie = function (req, res) {
    console.log('RecupererHotelParCategorie');
    var options = {CategorieHotel: req.params.categorie};
    models.CategorieHotel.find(options, function (err, hotels) {
        if (err) {
            return console.error(err);
        }
        res.json(hotels);
    });
};


/********************************/ /**********  Categorie Restaurant **************/ /********************************/

exports.CreerCategorieRestaurant = function (req, res) {
    console.log('CreerCategorieRestaurant', req.body);
    models.CategorieRestaurant(req.body).save();
    res.json(req.body);
};

exports.RecupererCategorieRestaurant = function (req, res) {
    console.log('RecupererCategoriesRestaurant');
    models.CategorieRestaurant.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categorieRestaurant);
    });
};


/********************************/ /**********  Restaurant **************/ /********************************/


exports.CreerRestaurant = function (req, res) {
    console.log('CreerRestaurant', req.body);
    models.Restaurant(req.body).save();
    res.json(req.body);
};

exports.RecupererRestaurant = function (req, res) {
    console.log('RecupererRestaurant');
    models.Restaurant.find(function (err, Restaurants) {
        if (err) {
            return console.error(err);
        }
        res.json(Restaurants);
    });
};
exports.RecupererRestaurantParId = function (req, res) {
    console.log('RecupererRestaurantParId');
    var options = {Id: req.params.Id};
    models.Restaurant.findOne(options, function (err, Restaurant) {
        if (err) {
            return console.error(err);
        }
        res.json(Restaurant);
    });
};
exports.RecupererRestaurantParCategorie = function (req, res) {
    console.log('RecupererRestaurantParCategorie');
    var options = {CategorieRestaurant: req.params.categorie};
    models.CategorieRestaurant.find(options, function (err, Restaurants) {
        if (err) {
            return console.error(err);
        }
        res.json(Restaurants);
    });
};
 
/********************************/ /**********  ImageHotel **************/ /********************************/

exports.CreerImageHotel = function (req, res) {
    console.log('CreerImageHotel', req.body);
    models.ImageHotel(req.body).save();
    res.json(req.body);
};



exports.CreerRestaurant = function (req, res) {
    console.log('CreerRestaurant', req.body);
    models.Restaurant(req.body).save();
    res.json(req.body);
};


exports.CreerReservationHotel = function (req, res) {
    console.log('ReservationHotel', req.body);
    models.ReservationHotel(req.body).save();
    res.json(req.body);
};

exports.RecupererReservationHotelParEmail = function (req, res) {
    console.log('RecupererRestaurantParEmail');
    var options = {email: req.params.email};
    models.ReservationHotel.findOne(options, function (err, Restaurant) {
        if (err) {
            return console.error(err);
        }
        res.json(ReservationHotel);
    });
};