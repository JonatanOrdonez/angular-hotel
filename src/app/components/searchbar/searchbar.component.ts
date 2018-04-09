import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private hs: HotelService) { }

  ngOnInit() {
  }

}
