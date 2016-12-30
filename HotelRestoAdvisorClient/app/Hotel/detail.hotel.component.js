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
var router_1 = require('@angular/router');
var hotel_service_1 = require('./hotel.service');
var hotel_1 = require("./hotel");
var utilisateur_service_1 = require("../Utilisateur/utilisateur.service");
var forms_1 = require("@angular/forms");
var DetailHotelComponent = (function () {
    function DetailHotelComponent(fb, router, route, hotelsService, loginService) {
        this.router = router;
        this.route = route;
        this.hotelsService = hotelsService;
        this.loginService = loginService;
        this.Id = "";
        this.hotel = new hotel_1.Hotel();
        this.formReservation = fb.group({
            "IdUtilisateur": loginService._utilisateur.Email,
            "IdHotel": this.route.snapshot.params['Id'],
            "NbrePersonne": [""],
            "NbreChambre": [""],
            "DateArrive": [""],
            "DateDepart": [""],
            "TotalTarif": [""],
            "DateCreation": [new Date().toISOString()]
        });
    }
    DetailHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.route.snapshot.params['Id'];
        this.hotelsService.ChercherParId(this.Id).subscribe(function (p) {
            _this.hotel = p;
        }, function (err) {
            console.log(err);
        });
    };
    DetailHotelComponent.prototype.onSubmit = function () {
        if (!this.loginService.isLoggedIn) {
        }
        else {
        }
    };
    DetailHotelComponent.prototype.save = function (Rmodel, isValid) {
        if (isValid) {
            this.hotelsService.CreerNouveauReservationHotel(Rmodel);
        }
    };
    DetailHotelComponent.prototype.CalculerPrixTotal = function (prix) {
        var numbre = 0;
        numbre = numbre + (+this.str * +prix);
        return numbre;
    };
    DetailHotelComponent = __decorate([
        core_1.Component({ selector: 'detail-hotel', templateUrl: "../app/Hotel/DetailHotel.html" }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, hotel_service_1.HotelService, utilisateur_service_1.UtilisateurService])
    ], DetailHotelComponent);
    return DetailHotelComponent;
}());
exports.DetailHotelComponent = DetailHotelComponent;
//# sourceMappingURL=detail.hotel.component.js.map