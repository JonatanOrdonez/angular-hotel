import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  nombre: string = '';
  precio: number;
  latitud: number = 0;
  longitud: number = 0;
  locationChosen = false;
  botonActivo = false;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {

  }

  onChoseLocation(event) {
    this.latitud = event.coords.lat;
    this.longitud = event.coords.lng;
    this.locationChosen = true;
  }

  addHotel() {
    if (this.latitud != 0) {
      this.hotelService.addNewHotel(this.nombre, this.precio, this.latitud, this.longitud);
      this.nombre = '';
      let pr: number;
      this.precio = pr;
      this.locationChosen = false;
      alert('El hotel se creo exiosamente');
      this.botonActivo = false;
    }
  }

  activarBoton(){
    this.botonActivo = true;
  }
}