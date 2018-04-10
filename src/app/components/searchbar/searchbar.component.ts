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
    this.hotelService.getFilteredHotels().subscribe(x => {
      this.hoteles = x;
    });
  }

  call() {
    this.hotelesFiltrados = [];
    if (this.nombreHotelBuscado.toString().length == 0) {
      this.mensaje = 'Ingrese un nombre de hotel válido.';
    } else {
      this.hoteles.forEach(hotel => {
        let miNombre = hotel.nombre.toLowerCase();
        if (miNombre.includes(this.nombreHotelBuscado.toLocaleLowerCase())) {
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
