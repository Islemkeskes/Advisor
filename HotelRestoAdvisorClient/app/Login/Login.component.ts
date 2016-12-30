import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UtilisateurService} from "../Utilisateur/utilisateur.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'login',
    templateUrl: "../app/Login/Login.html"

})
export class LoginComponent {

    IsLogged:boolean = true;
   
    constructor(private utilisateurService:UtilisateurService, private router:Router) {
    }


    onSubmit(form:NgForm) {
        console.log('should register:', form.value);
        this.utilisateurService.Login(form.value.user, form.value.password).subscribe(data => {
            console.log('data', data);
            if (data != null) {
                this.utilisateurService.isLoggedIn = true;
                this.utilisateurService.loggedIn.next(this.utilisateurService.isLoggedIn);
                this.utilisateurService._utilisateur = data;
                this.utilisateurService.Utilisateur.next(this.utilisateurService._utilisateur);
                this.router.navigate(['/Accueil']);
            } else {
                this.IsLogged = false;
            }
        }, err => console.log(err), () => console.log('Authentication Complete'));
    }


}