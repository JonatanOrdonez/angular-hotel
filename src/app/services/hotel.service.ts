import { Injectable, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../models/hotel';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { isNumber } from 'util';

@Injectable()
export class HotelService {
  private hotelsCollection: AngularFirestoreCollection<Hotel>;
  private hotels: Observable<Hotel[]>;
  private hotelDoc: AngularFirestoreDocument<Hotel>;

  @Output() hotelesFiltrados: EventEmitter<Hotel[]> = new EventEmitter();
  @Output() sizeHotels: EventEmitter<number> = new EventEmitter();

  constructor(public afs: AngularFirestore) {
    this.loadFireBase();
  }

  setHotelesFiltrados(hotels: Hotel[]) {
    this.hotelesFiltrados.emit(hotels);
  }

  setSizeHotels(valor: number) {
    this.sizeHotels.emit(valor);
  }

  loadFireBase() {
    this.hotelsCollection = this.afs.collection('hotels');
    this.hotels = this.hotelsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hotel;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getHotels(): Observable<Hotel[]> {
    return this.hotels;
  }

  getSizeHotels() {
    return this.sizeHotels;
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

  filterHotels(hoteles: Hotel[], valor: string) {
    this.loadFireBase();
    let mensaje: string = '';
    let hotelesFiltrados: Hotel[] = [];
    if (valor.length == 0) {
      mensaje = 'Ingrese un nombre de hotel válido.';
    } else {
      hoteles.forEach(hotel => {
        let miNombre = hotel.nombre.toLowerCase();
        if (miNombre.includes(valor.toLowerCase())) {
          hotelesFiltrados.push(hotel);
        }
      });
      if (hotelesFiltrados.length == 0) {
        mensaje = 'No se encontraron resultados, pruebe nuevamente.'
      }
    }
    return { hoteles: hotelesFiltrados, mensaje: mensaje, sizeH: hoteles.length };
  }

  addNewHotel(nombre: string, precio: number, latitud: number, longitud: number) {
      let hotel: Hotel = {
        id: '',
        nombre: nombre,
        precio: precio,
        calificacion: 0,
        latitud: latitud,
        longitud: longitud
      };
      this.addHotel(hotel);
  }
}