import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Utilisateur} from "./Utilisateur";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {observableToBeFn} from "rxjs/testing/TestScheduler";
@Injectable()
export class UtilisateurService {
    private UrlWebApi = 'http://localhost:8080';
    private http:Http;
    isLoggedIn:boolean = false;
    _utilisateur:Utilisateur = new Utilisateur();
    public loggedIn:Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    public Utilisateur:Subject<Utilisateur> = new BehaviorSubject<Utilisateur>(this._utilisateur);

    constructor(http:Http) {
        this.http = http;
    }

    CreerNouveauUtilisateur(utilisateur:Utilisateur) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        this.http.post(this.UrlWebApi + '/Utilisateur/Creer', utilisateur, options) .map((res:Response) => {
            res.json();
            console.log('res', res);
        }) .subscribe(p => {
            console.log('Compte a été enregistré');
        }, err => {
            console.log('Erreur de sauvegarde', err);
        });
    }

    Login(user:string, password:string) {
       // this.isLoggedIn = false;
        if (user && password) {
            this.isLoggedIn=true;
            var creds = "Email=" + user + "&Password=" + password;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post(this.UrlWebApi + '/Login', creds, {headers: headers}) .map(res => res.json());

        }
    }
}