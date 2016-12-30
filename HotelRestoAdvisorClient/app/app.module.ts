import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './app.routes';

import { HttpModule } from '@angular/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AccueilComponent} from './Accueil/accueil.component';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import {CreerUtilisateurComponent} from './Utilisateur/creer.utilisateur.component';
import {UtilisateurService} from "./Utilisateur/utilisateur.service";
import { HotelService } from './Hotel/hotel.service';
import {CreerHotelComponent} from './Hotel/creer.hotel.component';
import {LoginComponent} from './Login/Login.component';
import {ConsulterHotelComponent} from "./Hotel/consulter.hotel.component";
import {DetailHotelComponent} from "./Hotel/detail.hotel.component";
import {CreerRestaurantComponent} from "./Restaurant/creer.restaurant.component";
import {RestaurantService} from "./Restaurant/restaurant.service";
import {ConsulterRestaurantComponent} from "./Restaurant/consulter.restaurant.component";
import {DetailRestaurantComponent} from "./Restaurant/detail.restaurant.component";
import { LoggedInGuard } from './Login/logged.guard';


import {FileSelectDirective} from "ng2-file-upload/index";
import {ReservationHotelComponent} from "./Hotel/reservation.hotel.component";

@NgModule({
    imports: [BrowserModule,routing,HttpModule,ReactiveFormsModule,FormsModule, Ng2DatetimePickerModule],
    declarations: [CreerUtilisateurComponent,CreerHotelComponent,ConsulterHotelComponent ,ConsulterRestaurantComponent,DetailRestaurantComponent,DetailHotelComponent,CreerRestaurantComponent, FileSelectDirective,
        AppComponent, AccueilComponent, LoginComponent,ReservationHotelComponent],
    bootstrap: [AppComponent],
    providers: [UtilisateurService,HotelService,RestaurantService,
        LoggedInGuard]
})
export class AppModule {
}