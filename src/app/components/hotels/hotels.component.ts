import { Component, OnInit } from '@angular/core';

import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) {

  }

  ngOnInit() {
    this.hotelService.getFilteredHotels().subscribe( x =>{
      this.hotels = x;
    });
  }
}
