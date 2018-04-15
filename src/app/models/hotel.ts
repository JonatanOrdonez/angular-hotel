import { Comentario } from "./comentario";

export class Hotel {
    id: string;
    nombre: string;
    precio: number;
    calificacion: number;
    latitud: number;
    longitud: number;
    comentarios: Comentario[];
}
