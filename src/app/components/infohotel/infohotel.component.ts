import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Comentario } from '../../models/comentario';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-infohotel',
  templateUrl: './infohotel.component.html',
  styleUrls: ['./infohotel.component.css']
})
export class InfohotelComponent implements OnInit {

  @Input() hotel: Hotel;
  nombreUsuarioText: string;
  correoUsuarioText: string;
  descripcionUsuarioText: string = '';
  numEstrellas: number = -1;
  botonActivo = false;
  estrellasActivas = false;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {

  }

  starHandler(num) {
    this.estrellasActivas = true;
    this.numEstrellas = num;
  }

  addComentario() {
    if(this.descripcionUsuarioText.length && this.estrellasActivas){
      let comentario: Comentario = {
        id: this.hotel.id+this.nombreUsuarioText+this.correoUsuarioText,
        idhotel: this.hotel.id,
        nombre: this.nombreUsuarioText,
        correo: this.correoUsuarioText,
        descripcion: this.descripcionUsuarioText,
        calificacion: this.numEstrellas
      }
      if(this.hotel.comentarios.length == 0){
        this.hotel.calificacion = this.numEstrellas;
      }
      else{
        this.hotel.comentarios.push(comentario);
        let calf = (this.hotel.calificacion + this.numEstrellas)/2;
        this.hotel.calificacion = calf;
      }
      this.hotelService.updateHotel(this.hotel);
      
      this.nombreUsuarioText= '';
      this.correoUsuarioText= '';
      this.descripcionUsuarioText= '';
      this.numEstrellas = -1;
      this.botonActivo = false;
      this.estrellasActivas = false;
    }
  }

  activarBoton(){
    this.botonActivo = true;
  }
}
