import {Component} from '@angular/core';
import {HotelService} from "./hotel.service";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";


import {Router, ActivatedRoute} from '@angular/router';
import {ReservationHotel} from "./reservationHotel";
import {UtilisateurService} from "../Utilisateur/utilisateur.service";
@Component({selector: 'consulter-reservation', templateUrl: "../app/Hotel/ReservationHotel.html"})
export class ReservationHotelComponent {

    public email:String = "";
    reservationHotels:ReservationHotel[] = [];
    constructor(private hotelService:HotelService, private route:ActivatedRoute, private loginService: UtilisateurService) {
        
    }


    ngOnInit() {

        this.email =this.loginService._utilisateur.Email;
        this.hotelService.ChercherReservationParEmail(this.email) .subscribe(p => {
            this.reservationHotels = p;
        }, err => {
            console.log(err);
        });
    }
}