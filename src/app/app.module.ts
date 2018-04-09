import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { NavbarComponent } from './components/navbar/navbar.component'
import { HotelService } from './services/hotel.service';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsComponent } from './components/hotels/hotels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-hotel'),
  ],
  providers: [ 
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
