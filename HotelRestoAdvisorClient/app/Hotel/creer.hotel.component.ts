import {Component} from '@angular/core';
import {HotelService} from "./hotel.service";
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {Router} from '@angular/router';
import {Hotel} from "./Hotel";


import { FileUploader } from 'ng2-file-upload';
@Component({selector: 'creer-hotel', templateUrl: "../app/Hotel/CreerHotel.html",providers: [Hotel],
    styleUrls: ["../../Content/assets/css/style.css"]})
export class CreerHotelComponent {
    formHotel:FormGroup;


    hotel:Hotel = new Hotel();

    stringifiedJson;
    constructor(fb:FormBuilder, private hotelService:HotelService, private router:Router) {

        this.formHotel = fb.group({
            "Id":4,
            "Nom": ["", Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])],
            "CategorieHotel": ["", Validators.required],
            "Email": ["", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],
            "Tel": ["",Validators.compose([ Validators.pattern("^(0|[1-9][0-9]*)$")])],
            "Description": [""],
            "Site":[""],
            "Adresse":[""],
            "Tarif":[""],
            "Ville":[""],
            "DateCreation":[new Date().toISOString()]

        });
    }

    public uploader:FileUploader = new FileUploader({url:'http://localhost:8080/upload'});

    save(model:Hotel, isValid:boolean) {
        if (isValid) {

            this.hotelService.CreerNouveauHotel(model);



        }
    }

    ngOnInit() {

     /*   this.hotelService.ChercherParId("1") .subscribe(p => {
            this.hotel = p,
                this.test=this.hotel.Id;

            console.log(this.test);
        }, err => {
            console.log(err);
        });*/
        // check if the property exists for a given ID




    }

}