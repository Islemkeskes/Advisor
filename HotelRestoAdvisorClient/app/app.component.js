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
var utilisateur_service_1 = require("./Utilisateur/utilisateur.service");
var AppComponent = (function () {
    function AppComponent(utilisateurService) {
        var _this = this;
        this.utilisateurService = utilisateurService;
        this.loggedIn = false;
        this.Role = "";
        this.utilisateurService.loggedIn.subscribe(function (p) { return _this.loggedIn = p; });
        this.utilisateurService.Utilisateur.subscribe(function (p) { return _this.utilisateur = p; });
        this.Role = this.utilisateur.Role;
        //console.log( this.loggedIn );
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'advisor',
            templateUrl: "../app/index.html",
            styleUrls: ["../Content/assets/css/style.css"]
        }), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map