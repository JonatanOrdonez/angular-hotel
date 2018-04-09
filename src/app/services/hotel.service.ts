import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {
  hotelsCollection: AngularFirestoreCollection<Hotel>;
  hotels: Observable<Hotel[]>;
  hotelDoc: AngularFirestoreDocument<Hotel>;

  filteredHotels: Hotel[];

  constructor(public afs: AngularFirestore) {
    this.hotelsCollection = this.afs.collection('hotels');
    this.hotels = this.hotelsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hotel;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getHotels() {
    return this.hotels; 
  }

  addHotel(hotel: Hotel) {
    this.hotelsCollection.add(hotel);
  }

  deleteHotel(hotel: Hotel) {
    this.hotelDoc = this.afs.doc(`tasks/${hotel.id}`);
    this.hotelDoc.delete();
  }

  updateHotel(hotel: Hotel) {
    this.hotelDoc = this.afs.doc(`tasks/${hotel.id}`);
    this.hotelDoc.update(hotel);
  }
}
