import { Articulo } from './articulo.model';

export class Numero {
    titulo: string;
    portada: string
    articulos: Articulo[];
    fecha: Date;
    ISSN: string;
    constructor(titulo: string, portada: string, articulos: Articulo[]) {
        this.titulo = titulo;
        this.portada = portada;
        this.articulos = articulos;
    }
}