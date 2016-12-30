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
var hotel_service_1 = require("./hotel.service");
var router_1 = require('@angular/router');
var utilisateur_service_1 = require("../Utilisateur/utilisateur.service");
var ReservationHotelComponent = (function () {
    function ReservationHotelComponent(hotelService, route, loginService) {
        this.hotelService = hotelService;
        this.route = route;
        this.loginService = loginService;
        this.email = "";
        this.reservationHotels = [];
    }
    ReservationHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.loginService._utilisateur.Email;
        this.hotelService.ChercherReservationParEmail(this.email).subscribe(function (p) {
            _this.reservationHotels = p;
        }, function (err) {
            console.log(err);
        });
    };
    ReservationHotelComponent = __decorate([
        core_1.Component({ selector: 'consulter-reservation', templateUrl: "../app/Hotel/ReservationHotel.html" }), 
        __metadata('design:paramtypes', [hotel_service_1.HotelService, router_1.ActivatedRoute, utilisateur_service_1.UtilisateurService])
    ], ReservationHotelComponent);
    return ReservationHotelComponent;
}());
exports.ReservationHotelComponent = ReservationHotelComponent;
//# sourceMappingURL=reservation.hotel.component.js.map