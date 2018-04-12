import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service'

@Component({
  selector: 'app-listhotels',
  templateUrl: './listhotels.component.html',
  styleUrls: ['./listhotels.component.css']
})
export class ListhotelsComponent implements OnInit {

  hotelesFiltrados: Hotel[];
  sizeHotels: number;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadFilteredHotels();
    this.loadSizeHotels();
  }

  loadFilteredHotels() {
    this.hotelService.hotelesFiltrados.subscribe(hoteles => {
      this.hotelesFiltrados = hoteles;
    });
  }

  loadSizeHotels() {
    this.hotelService.getSizeHotels().subscribe(size => {
      this.sizeHotels = size;
    });
  }


}
