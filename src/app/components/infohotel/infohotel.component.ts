import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infohotel',
  templateUrl: './infohotel.component.html',
  styleUrls: ['./infohotel.component.css']
})
export class InfohotelComponent implements OnInit {

  @Input() hotel: Hotel;
  nombreUsuarioText: string;
  correoUsuarioText: string;

  constructor() { }

  ngOnInit() {

  }

  starHandler(num) {
    console.log(num);
  }

  addComentario() {
    console.log("error");
  }
}
