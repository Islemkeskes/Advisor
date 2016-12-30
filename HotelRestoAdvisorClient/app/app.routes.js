"use strict";
var router_1 = require('@angular/router');
var accueil_component_1 = require('./Accueil/accueil.component');
var Login_component_1 = require('./Login/Login.component');
var creer_utilisateur_component_1 = require("./Utilisateur/creer.utilisateur.component");
var creer_hotel_component_1 = require("./Hotel/creer.hotel.component");
var consulter_hotel_component_1 = require("./Hotel/consulter.hotel.component");
var detail_hotel_component_1 = require("./Hotel/detail.hotel.component");
var creer_restaurant_component_1 = require("./Restaurant/creer.restaurant.component");
var consulter_restaurant_component_1 = require("./Restaurant/consulter.restaurant.component");
var detail_restaurant_component_1 = require("./Restaurant/detail.restaurant.component");
var reservation_hotel_component_1 = require("./Hotel/reservation.hotel.component");
var appRoutes = [{ path: '', component: accueil_component_1.AccueilComponent }, {
        path: 'Accueil',
        component: accueil_component_1.AccueilComponent
    }, {
        path: 'CreerUtilisateur',
        component: creer_utilisateur_component_1.CreerUtilisateurComponent
    }, {
        path: 'CreerHotel',
        component: creer_hotel_component_1.CreerHotelComponent
    },
    {
        path: 'Hotels',
        component: consulter_hotel_component_1.ConsulterHotelComponent
    }, {
        path: 'DetailHotel/:Id', component: detail_hotel_component_1.DetailHotelComponent
    },
    {
        path: 'CreerRestaurant',
        component: creer_restaurant_component_1.CreerRestaurantComponent
    }, {
        path: 'Restaurants',
        component: consulter_restaurant_component_1.ConsulterRestaurantComponent
    },
    { path: 'DetailRestaurant/:Id', component: detail_restaurant_component_1.DetailRestaurantComponent },
    { path: 'DetailRestaurant/:Id', component: detail_restaurant_component_1.DetailRestaurantComponent },
    { path: 'DetailReservation', component: reservation_hotel_component_1.ReservationHotelComponent },
    { path: 'Login', component: Login_component_1.LoginComponent }];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map