import {Component} from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {Router, ActivatedRoute} from '@angular/router';

import {Restaurant} from "./restaurant";
import {RestaurantService} from "./restaurant.service";
@Component({selector: 'consulter-restaurant', templateUrl: "../app/Restaurant/ConsulterRestaurant.html"})
export class ConsulterRestaurantComponent {

    restaurants:Restaurant[] = [];
    constructor(private restaurantService:RestaurantService, private route:ActivatedRoute) {

    }


    ngOnInit() {
        this.route.params.subscribe(params => {
            let category = params['Category'];
            console.log('ngOnInit', category);
            if (category != null) {
                /* this.livresService.ChercherParCategorie(category).subscribe(p => {
                 this.livres = p;
                 }, err => {
                 console.log(err);
                 });*/
            } else {
                this.restaurantService.RecupererRestaurants().subscribe(p => {
                    this.restaurants = p;
                }, err => {
                    console.log(err);
                });
            }
        });
    }
}