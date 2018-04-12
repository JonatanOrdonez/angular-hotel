import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service'
import { Hotel } from '../../models/hotel';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  hoteles: Hotel[] = [];
  nombreHotelBuscado: string = '';
  mensaje: string = '';

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(x => {
      this.hoteles = x;
    });
  }

  filter() {
    let resultado = this.hotelService.filterHotels(this.hoteles, this.nombreHotelBuscado);
    this.mensaje = resultado.mensaje;
    this.hotelService.setHotelesFiltrados(resultado.hoteles);
    this.hotelService.setSizeHotels(resultado.sizeH);
  }

}
