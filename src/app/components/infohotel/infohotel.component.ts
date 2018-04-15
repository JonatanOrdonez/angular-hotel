import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-infohotel',
  templateUrl: './infohotel.component.html',
  styleUrls: ['./infohotel.component.css']
})
export class InfohotelComponent implements OnInit {

  @Input() 
  selectedHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

  starHandler(num){
    console.log(num);
  }

}
