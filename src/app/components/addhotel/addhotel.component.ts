import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  private nombre: string = '';
  private precio: number;
  private latitud: number;
  private longitud: number;
  private locationChosen = false;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {

   }

  onChoseLocation(event){
    this.latitud = event.coords.lat;
    this.longitud = event.coords.lng;
    this.locationChosen = true;
  }

  addHotel(){
    this.hotelService.addNewHotel(this.nombre, this.precio, this.latitud, this.longitud);
  }

}
