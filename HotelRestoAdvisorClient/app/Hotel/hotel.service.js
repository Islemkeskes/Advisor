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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_2 = require('@angular/http');
var HotelService = (function () {
    function HotelService(http) {
        this.UrlWebApi = 'http://localhost:8080';
        this.hotels = [];
        this.http = http;
    }
    HotelService.prototype.CreerNouveauHotel = function (hotel) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post(this.UrlWebApi + '/Hotel/Creer', hotel, options).map(function (res) {
            res.json();
            console.log('res', res);
        }).subscribe(function (p) {
            console.log('hotel a été enregistré');
        }, function (err) {
            console.log('Erreur de sauvegarde', err);
        });
    };
    HotelService.prototype.CreerNouveauReservationHotel = function (reservationHotel) {
        console.log("aa");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        this.http.post(this.UrlWebApi + '/ReservationHotel/Creer', reservationHotel, options).map(function (res) {
            res.json();
            console.log('res', res);
        }).subscribe(function (p) {
            console.log('reservation a été enregistré');
        }, function (err) {
            console.log('Erreur de sauvegarde', err);
        });
    };
    HotelService.prototype.RecupererHotels = function () {
        var hotels = this.http.get((this.UrlWebApi + '/Hotels'), { headers: this.getHeaders() }).map(function (response) { return response.json(); });
        return hotels;
    };
    HotelService.prototype.ChercherParId = function (id) {
        return this.http.get((this.UrlWebApi + '/Hotel/' + id), { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    HotelService.prototype.ChercherReservationParEmail = function (email) {
        return this.http.get((this.UrlWebApi + '/ReservationHotel/Consulter/' + email), { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    HotelService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    HotelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HotelService);
    return HotelService;
}());
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map