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
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var Hotel_1 = require("./Hotel");
var ng2_file_upload_1 = require('ng2-file-upload');
var CreerHotelComponent = (function () {
    function CreerHotelComponent(fb, hotelService, router) {
        this.hotelService = hotelService;
        this.router = router;
        this.hotel = new Hotel_1.Hotel();
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:8080/upload' });
        this.formHotel = fb.group({
            "Id": 4,
            "Nom": ["", forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "CategorieHotel": ["", forms_1.Validators.required],
            "Email": ["", forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Tel": ["", forms_1.Validators.compose([forms_1.Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Description": [""],
            "Site": [""],
            "Adresse": [""],
            "Tarif": [""],
            "Ville": [""],
            "DateCreation": [new Date().toISOString()]
        });
    }
    CreerHotelComponent.prototype.save = function (model, isValid) {
        if (isValid) {
            this.hotelService.CreerNouveauHotel(model);
        }
    };
    CreerHotelComponent.prototype.ngOnInit = function () {
        /*   this.hotelService.ChercherParId("1") .subscribe(p => {
               this.hotel = p,
                   this.test=this.hotel.Id;
   
               console.log(this.test);
           }, err => {
               console.log(err);
           });*/
        // check if the property exists for a given ID
    };
    CreerHotelComponent = __decorate([
        core_1.Component({ selector: 'creer-hotel', templateUrl: "../app/Hotel/CreerHotel.html", providers: [Hotel_1.Hotel],
            styleUrls: ["../../Content/assets/css/style.css"] }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, hotel_service_1.HotelService, router_1.Router])
    ], CreerHotelComponent);
    return CreerHotelComponent;
}());
exports.CreerHotelComponent = CreerHotelComponent;
//# sourceMappingURL=creer.hotel.component.js.map