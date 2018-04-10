import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { NavbarComponent } from './components/navbar/navbar.component'
import { HotelService } from './services/hotel.service';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    AddhotelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-hotel'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvoofFLok4BGeX_CusWBtn7DsR5oS_mhU'
    }),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: SearchbarComponent
      },
      {
        path: 'addhotel',
        component: AddhotelComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ])
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private titulo: Title) {
    titulo.setTitle('Hotel');
  }
}
