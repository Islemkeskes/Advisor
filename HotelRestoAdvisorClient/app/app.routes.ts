import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './Accueil/accueil.component';

import {LoginComponent} from './Login/Login.component'

import {CreerUtilisateurComponent} from "./Utilisateur/creer.utilisateur.component";
import {CreerHotelComponent} from "./Hotel/creer.hotel.component";
import {ConsulterHotelComponent} from "./Hotel/consulter.hotel.component";
import {DetailHotelComponent} from "./Hotel/detail.hotel.component";
import {CreerRestaurantComponent} from "./Restaurant/creer.restaurant.component";
import {ConsulterRestaurantComponent} from "./Restaurant/consulter.restaurant.component";
import {DetailRestaurantComponent} from "./Restaurant/detail.restaurant.component";
import {LoggedInGuard} from "./Login/logged.guard";
import {ReservationHotel} from "./Hotel/reservationHotel";
import {ReservationHotelComponent} from "./Hotel/reservation.hotel.component";

const appRoutes:Routes = [{path: '', component: AccueilComponent}, {
    path: 'Accueil',
    component: AccueilComponent
}, {
    path: 'CreerUtilisateur',
    component: CreerUtilisateurComponent
}, {
    path: 'CreerHotel',
    component: CreerHotelComponent
},
    {
        path: 'Hotels',
        component: ConsulterHotelComponent
    }, {
        path: 'DetailHotel/:Id', component: DetailHotelComponent
    },
    {
        path: 'CreerRestaurant',
        component: CreerRestaurantComponent
    }, {
        path: 'Restaurants',
        component: ConsulterRestaurantComponent
    },
    {path: 'DetailRestaurant/:Id', component: DetailRestaurantComponent},

    {path: 'DetailRestaurant/:Id', component: DetailRestaurantComponent}
    ,
    {path: 'DetailReservation', component: ReservationHotelComponent}


    , {path: 'Login', component: LoginComponent}];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);