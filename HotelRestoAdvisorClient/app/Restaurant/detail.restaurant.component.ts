import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant} from "./restaurant";
import {RestaurantService} from "./restaurant.service";
@Component({selector: 'detail-restaurant', templateUrl: "../app/Restaurant/DetailRestaurant.html"})
export class DetailRestaurantComponent implements OnInit {
    public Id:string = "";
    public restaurant:Restaurant = new Restaurant();

    constructor(private route:ActivatedRoute, private restaurantService:RestaurantService) {
    }

    ngOnInit() {

        this.Id = this.route.snapshot.params['Id'];
        this.restaurantService.ChercherParId(this.Id) .subscribe(p => {
            this.restaurant = p;
        }, err => {
            console.log(err);
        });
    }


}