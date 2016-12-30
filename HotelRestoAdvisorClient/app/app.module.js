"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var accueil_component_1 = require('./Accueil/accueil.component');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var creer_utilisateur_component_1 = require('./Utilisateur/creer.utilisateur.component');
var utilisateur_service_1 = require("./Utilisateur/utilisateur.service");
var hotel_service_1 = require('./Hotel/hotel.service');
var creer_hotel_component_1 = require('./Hotel/creer.hotel.component');
var Login_component_1 = require('./Login/Login.component');
var consulter_hotel_component_1 = require("./Hotel/consulter.hotel.component");
var detail_hotel_component_1 = require("./Hotel/detail.hotel.component");
var creer_restaurant_component_1 = require("./Restaurant/creer.restaurant.component");
var restaurant_service_1 = require("./Restaurant/restaurant.service");
var consulter_restaurant_component_1 = require("./Restaurant/consulter.restaurant.component");
var detail_restaurant_component_1 = require("./Restaurant/detail.restaurant.component");
var logged_guard_1 = require('./Login/logged.guard');
var index_1 = require("ng2-file-upload/index");
var reservation_hotel_component_1 = require("./Hotel/reservation.hotel.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, ng2_datetime_picker_1.Ng2DatetimePickerModule],
            declarations: [creer_utilisateur_component_1.CreerUtilisateurComponent, creer_hotel_component_1.CreerHotelComponent, consulter_hotel_component_1.ConsulterHotelComponent, consulter_restaurant_component_1.ConsulterRestaurantComponent, detail_restaurant_component_1.DetailRestaurantComponent, detail_hotel_component_1.DetailHotelComponent, creer_restaurant_component_1.CreerRestaurantComponent, index_1.FileSelectDirective,
                app_component_1.AppComponent, accueil_component_1.AccueilComponent, Login_component_1.LoginComponent, reservation_hotel_component_1.ReservationHotelComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [utilisateur_service_1.UtilisateurService, hotel_service_1.HotelService, restaurant_service_1.RestaurantService,
                logged_guard_1.LoggedInGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map