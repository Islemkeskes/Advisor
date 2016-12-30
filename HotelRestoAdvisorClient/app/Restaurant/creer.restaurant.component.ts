import {Component} from '@angular/core';
import {RestaurantService} from "./restaurant.service";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {Router} from '@angular/router';
import {Restaurant} from "./restaurant";
@Component({selector: 'creer-restaurant', templateUrl: "../app/Restaurant/CreerRestaurant.html",providers: [Restaurant]})
export class CreerRestaurantComponent {
    formRestaurant:FormGroup;

    hotel:Restaurant = new Restaurant();

    stringifiedJson;
    constructor(fb:FormBuilder, private restaurantService:RestaurantService, private router:Router) {

        this.formRestaurant = fb.group({
            "Id":2,
            "Nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "CategorieRestaurant": ["", Validators.required],
            "Email": ["", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Tel": ["",Validators.compose([ Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Description": [""],
            "Site":[""],
            "Adresse":[""],
            "Ville":[""]

        });
    }

    save(model:Restaurant, isValid:boolean) {
        if (isValid) {

            this.restaurantService.CreerNouveauRestaurant(model);
            this.router.navigate(['/Accueil']);

        }
    }

    
}