import {Component} from '@angular/core';

import {Utilisateur} from "./Utilisateur/Utilisateur";
import {UtilisateurService} from "./Utilisateur/utilisateur.service";
@Component({
    selector: 'advisor',
    templateUrl: "../app/index.html",
    styleUrls: ["../Content/assets/css/style.css"]
})
export class AppComponent {
    
    loggedIn:boolean = false;
    utilisateur:Utilisateur;
    Role:String="";

    constructor( private utilisateurService:UtilisateurService) {


        this.utilisateurService.loggedIn.subscribe(p=> this.loggedIn = p);
        this.utilisateurService.Utilisateur.subscribe(p=>this.utilisateur=p);
this.Role=this.utilisateur.Role;

        //console.log( this.loggedIn );
    }

}