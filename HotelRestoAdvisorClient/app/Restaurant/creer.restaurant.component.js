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
var restaurant_service_1 = require("./restaurant.service");
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var restaurant_1 = require("./restaurant");
var CreerRestaurantComponent = (function () {
    function CreerRestaurantComponent(fb, restaurantService, router) {
        this.restaurantService = restaurantService;
        this.router = router;
        this.hotel = new restaurant_1.Restaurant();
        this.formRestaurant = fb.group({
            "Id": 2,
            "Nom": ["", forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "CategorieRestaurant": ["", forms_1.Validators.required],
            "Email": ["", forms_1.Validators.compose([forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Tel": ["", forms_1.Validators.compose([forms_1.Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Description": [""],
            "Site": [""],
            "Adresse": [""],
            "Ville": [""]
        });
    }
    CreerRestaurantComponent.prototype.save = function (model, isValid) {
        if (isValid) {
            this.restaurantService.CreerNouveauRestaurant(model);
            this.router.navigate(['/Accueil']);
        }
    };
    CreerRestaurantComponent = __decorate([
        core_1.Component({ selector: 'creer-restaurant', templateUrl: "../app/Restaurant/CreerRestaurant.html", providers: [restaurant_1.Restaurant] }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, restaurant_service_1.RestaurantService, router_1.Router])
    ], CreerRestaurantComponent);
    return CreerRestaurantComponent;
}());
exports.CreerRestaurantComponent = CreerRestaurantComponent;
//# sourceMappingURL=creer.restaurant.component.js.map