import {Component} from '@angular/core';
import {HotelService} from "./hotel.service";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";


import {Router, ActivatedRoute} from '@angular/router';
import {Hotel} from "./Hotel";
@Component({selector: 'consulter-hotel', templateUrl: "../app/Hotel/ConsulterHotel.html",  styleUrls: ["../../Content/assets/css/style.css"]})
export class ConsulterHotelComponent {

    hotels:Hotel[] = [];
    constructor(private hotelService:HotelService, private route:ActivatedRoute) {

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
                this.hotelService.RecupererHotels().subscribe(p => {
                    this.hotels = p;
                }, err => {
                    console.log(err);
                });
            }
        });



    }
}