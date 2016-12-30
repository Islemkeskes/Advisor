import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from './hotel.service';
import {Hotel} from "./hotel";
import {UtilisateurService} from "../Utilisateur/utilisateur.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ReservationHotel} from "./reservationHotel";
@Component({selector: 'detail-hotel', templateUrl: "../app/Hotel/DetailHotel.html"})
export class DetailHotelComponent implements OnInit {
    public Id:string = "";
    public hotel:Hotel = new Hotel();
    formReservation:FormGroup;
    str:Number;
    constructor(fb:FormBuilder,private router: Router,private route:ActivatedRoute, private hotelsService:HotelService, private loginService: UtilisateurService) {
        this.formReservation = fb.group({
"IdUtilisateur":loginService._utilisateur.Email,
            "IdHotel":this.route.snapshot.params['Id'],
            "NbrePersonne":[""],
            "NbreChambre":[""],
            "DateArrive":[""],
            "DateDepart":[""],
            "TotalTarif":[""],
            "DateCreation":[new Date().toISOString()]
        });

    }

    ngOnInit() {

        this.Id = this.route.snapshot.params['Id'];
        this.hotelsService.ChercherParId(this.Id) .subscribe(p => {
            this.hotel = p;
        }, err => {
            console.log(err);
        });
    }


    onSubmit() {
        if (!this.loginService.isLoggedIn) {
           // this.router.navigate(['Login']);
        }
        else {
        }
        }


    save(Rmodel:ReservationHotel, isValid:boolean) {
        if (isValid) {
            
            this.hotelsService.CreerNouveauReservationHotel(Rmodel);
//this.router.navigate(['/DetailReservation']);


        }
    }

    CalculerPrixTotal(prix:number):number {
        let numbre:number = 0;

            numbre = numbre + (+ this.str * +prix);

        return numbre;
    }
}