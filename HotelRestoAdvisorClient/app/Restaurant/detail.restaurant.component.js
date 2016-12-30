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
var restaurant_1 = require("./restaurant");
var restaurant_service_1 = require("./restaurant.service");
var DetailRestaurantComponent = (function () {
    function DetailRestaurantComponent(route, restaurantService) {
        this.route = route;
        this.restaurantService = restaurantService;
        this.Id = "";
        this.restaurant = new restaurant_1.Restaurant();
    }
    DetailRestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this.route.snapshot.params['Id'];
        this.restaurantService.ChercherParId(this.Id).subscribe(function (p) {
            _this.restaurant = p;
        }, function (err) {
            console.log(err);
        });
    };
    DetailRestaurantComponent = __decorate([
        core_1.Component({ selector: 'detail-restaurant', templateUrl: "../app/Restaurant/DetailRestaurant.html" }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, restaurant_service_1.RestaurantService])
    ], DetailRestaurantComponent);
    return DetailRestaurantComponent;
}());
exports.DetailRestaurantComponent = DetailRestaurantComponent;
//# sourceMappingURL=detail.restaurant.component.js.map