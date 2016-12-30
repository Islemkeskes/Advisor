import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Hotel} from './hotel';
import {Observable} from 'rxjs/Rx';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {ReservationHotel} from "./reservationHotel";

@Injectable()
export class HotelService {
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    hotels:Hotel[] = [];

    constructor(http:Http) {
        this.http = http;
    }

    CreerNouveauHotel(hotel:Hotel) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/Hotel/Creer', hotel, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('hotel a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });
    }


    CreerNouveauReservationHotel(reservationHotel:ReservationHotel) {

        console.log("aa");
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/ReservationHotel/Creer', reservationHotel, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('reservation a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });

    }


    RecupererHotels():Observable<Hotel[]> {

        let hotels = this.http .get((this.UrlWebApi + '/Hotels'), {headers: this.getHeaders()}) .map(response => response.json());
        return hotels;
    }



    ChercherParId(id:string):Observable<Hotel> {
        return this.http .get((this.UrlWebApi + '/Hotel/' + id), {headers: this.getHeaders()}) .map(response => response.json());
    }

    ChercherReservationParEmail(email:String):Observable<ReservationHotel[]> {
        return this.http .get((this.UrlWebApi + '/ReservationHotel/Consulter/' + email), {headers: this.getHeaders()}) .map(response => response.json());
    }
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}