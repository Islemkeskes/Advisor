import {Component} from '@angular/core';
import {UtilisateurService} from "./utilisateur.service";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {Router} from '@angular/router';
import {Utilisateur} from "./Utilisateur";
@Component({selector: 'creer-utilisateur', templateUrl: "../app/Utilisateur/CreerUtilisateur.html"})
export class CreerUtilisateurComponent {
    form:FormGroup;

    constructor(fb:FormBuilder, private utilisateurService:UtilisateurService, private router:Router) {
        this.form = fb.group({
            "Nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "Prenom": ["", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
            "Email": ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Password": ["", Validators.required],
            "Tel": ["",Validators.compose([ Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Role":["user"]
        });
    }

    save(model:Utilisateur, isValid:boolean) {
        if (isValid) {
            this.utilisateurService.CreerNouveauUtilisateur(model);
            this.router.navigate(['/Login']);
        }
    }
}