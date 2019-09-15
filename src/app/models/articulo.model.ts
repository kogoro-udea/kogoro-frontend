export class Articulo {
    id: string;
    nombre: string;
    autores: string[];
    resumen: string;
    url: string;
    year: number;

    constructor(nombre: string, autores: string[], resumen: string) {
        this.nombre = nombre;
        this.autores = autores;
        this.resumen = resumen;
        //this.url;
        //this.year = year;
    }
}