import { Injectable } from '@angular/core';
import { CanActivate, Router,
    ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UtilisateurService } from '../Utilisateur/utilisateur.service';
@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private router: Router,
                private loginService: UtilisateurService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(this.loginService.isLoggedIn);
      if (!this.loginService.isLoggedIn) {
            this.router.navigate(['Login']);
            return true;
       }
        return true;
    }
}