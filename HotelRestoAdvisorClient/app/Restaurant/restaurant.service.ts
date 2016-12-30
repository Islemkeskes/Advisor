import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Restaurant} from './restaurant';
import {Observable} from 'rxjs/Rx';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class RestaurantService {
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    restaurants:Restaurant[] = [];

    constructor(http:Http) {
        this.http = http;
    }


    ChercherParId(id:string):Observable<Restaurant> {
        return this.http .get((this.UrlWebApi + '/Restaurant/' + id), {headers: this.getHeaders()}) .map(response => response.json());
    }




    CreerNouveauRestaurant(restaurant:Restaurant) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/Restaurant/Creer', restaurant, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('hotel a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });

    }



    RecupererRestaurants():Observable<Restaurant[]> {

        let hotels = this.http .get((this.UrlWebApi + '/Restaurants'), {headers: this.getHeaders()}) .map(response => response.json());
        return hotels;
    }



    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}