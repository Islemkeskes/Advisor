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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var utilisateur_service_1 = require("../Utilisateur/utilisateur.service");
var LoginComponent = (function () {
    function LoginComponent(utilisateurService, router) {
        this.utilisateurService = utilisateurService;
        this.router = router;
        this.IsLogged = true;
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('should register:', form.value);
        this.utilisateurService.Login(form.value.user, form.value.password).subscribe(function (data) {
            console.log('data', data);
            if (data != null) {
                _this.utilisateurService.isLoggedIn = true;
                _this.utilisateurService.loggedIn.next(_this.utilisateurService.isLoggedIn);
                _this.utilisateurService._utilisateur = data;
                _this.utilisateurService.Utilisateur.next(_this.utilisateurService._utilisateur);
                _this.router.navigate(['/Accueil']);
            }
            else {
                _this.IsLogged = false;
            }
        }, function (err) { return console.log(err); }, function () { return console.log('Authentication Complete'); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: "../app/Login/Login.html"
        }), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=Login.component.js.map