import { Articulo } from './articulo.model';

export class Numero {
    titulo: string;
    url: string;
    //portada: string
    //articulos: Articulo[];
    //fecha: Date;
    // ISSN: string;
    constructor(titulo: string, url: string) {
        this.titulo = titulo;
        this.url = url;
        // this.portada = portada;
        //this.articulos = articulos;
    }
}