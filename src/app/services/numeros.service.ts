import { Injectable } from '@angular/core';
import { Numero } from '../models/numero.model';
import { Articulo } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {
  numerosPublicados: Numero[] = [
    new Numero('No.2', 'assets/documents/Kogoro_no.2.pdf'),
    new Numero('No.3', 'assets/documents/Kogoro_no.3.pdf'),
    new Numero('No.4', 'assets/documents/Kogoro_no.4.pdf'),
    new Numero('No.5', 'assets/documents/Kogoro_no.5.pdf'),
    new Numero('No.6', 'assets/documents/Kogoro_no.6.pdf'),
    new Numero('No.7', 'assets/documents/Kogoro_no.7.pdf'),
    new Numero('No.8', 'assets/documents/Kogoro_no.8.pdf'),
    new Numero('No.9', 'assets/documents/Kogoro_no.9.pdf')
  ];
  articulos3: Articulo[] = [new Articulo('¿CUÁL ES LA IDENTIDAD QUE CREA EL PATRIMONIO “NACIONAL” COLOMBIANO?', ['Juan Esteban Jurado Jiménez'], 'El patrimonio cultural construye un camino en la mentalidad de las personas, en el que se puede visualizar que hubo un pasado íntegro y que aún sobrevive en ciertas dimensiones de nuestro presente; este pasado poseía una identidad y esa identidad se transmitió a generaciones futuras. La hegemonía y dominación de unos grupos sobre otros – en especial la que ejercieron los invasores del viejo mundo en América – trajo consigo una “desviación” para muchos de los elementos constitutivos de la identidad de cada uno de los grupos que existían, en lo que hoy conocemos como Colombia. Más tarde, está desviación se quiso replantear en una sola identidad institucional complementada con un territorio y un estado-nación, lo que trajo consigo problemas en su interpretación.')];

  constructor() {
    console.log(this.numerosPublicados);

  }

}
