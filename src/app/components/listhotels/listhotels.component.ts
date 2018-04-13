import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listhotels',
  templateUrl: './listhotels.component.html',
  styleUrls: ['./listhotels.component.css']
})
export class ListhotelsComponent implements OnInit {

  hotelesFiltrados: Hotel[];
  sizeHotels: number;
  closeResult: string;
  selectedHotel: Hotel;

  constructor(private hotelService: HotelService, private modalService: NgbModal) { }

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

  callHotel(hotel: Hotel) {
    alert(hotel.nombre);
  }

  open(content, hotel: Hotel) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.selectedHotel = hotel;
  }
}
