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
  hotelesFiltrados: Hotel[] = [];
  nombreHotelBuscado: string = '';
  mensaje: string = '';
  sizeHotels: number = 0;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe(x => {
      this.hoteles = x;
    });
  }

  call() {
    this.loadHotels();
    this.hotelesFiltrados = [];
    if (this.nombreHotelBuscado.length == 0) {
      this.mensaje = 'Ingrese u n nombre de hotel válido.';
    } else {
      console.log(this.hoteles.length);
      this.hoteles.forEach(hotel => {
        let miNombre = hotel.nombre.toLowerCase();
        if (miNombre.includes(this.nombreHotelBuscado.toLowerCase())) {
          this.hotelesFiltrados.push(hotel);
        }
      });
      if (this.hotelesFiltrados.length == 0) {
        this.mensaje = 'No se encontraron resultados, pruebe nuevamente.'
      }
      else {
        this.mensaje = '';
      }
    }
    this.sizeHotels = this.hoteles.length;
  }

}
