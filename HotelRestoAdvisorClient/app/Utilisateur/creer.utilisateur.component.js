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
var utilisateur_service_1 = require("./utilisateur.service");
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var CreerUtilisateurComponent = (function () {
    function CreerUtilisateurComponent(fb, utilisateurService, router) {
        this.utilisateurService = utilisateurService;
        this.router = router;
        this.form = fb.group({
            "Nom": ["", forms_1.Validators.compose([forms_1.Validators.minLength(2), forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "Prenom": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(50)])],
            "Email": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Password": ["", forms_1.Validators.required],
            "Tel": ["", forms_1.Validators.compose([forms_1.Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Role": ["user"]
        });
    }
    CreerUtilisateurComponent.prototype.save = function (model, isValid) {
        if (isValid) {
            this.utilisateurService.CreerNouveauUtilisateur(model);
            this.router.navigate(['/Login']);
        }
    };
    CreerUtilisateurComponent = __decorate([
        core_1.Component({ selector: 'creer-utilisateur', templateUrl: "../app/Utilisateur/CreerUtilisateur.html" }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, utilisateur_service_1.UtilisateurService, router_1.Router])
    ], CreerUtilisateurComponent);
    return CreerUtilisateurComponent;
}());
exports.CreerUtilisateurComponent = CreerUtilisateurComponent;
//# sourceMappingURL=creer.utilisateur.component.js.map