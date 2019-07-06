import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public year: number;

  public info = {
    journal : {
      name: 'Kogoró',
      description: 'Revista de Estudiantes de Antropología de la Universidad de Antioquia Kogoró. Creada por estudiantes para estudiantes desde el año 2006.'
    },
    contact: {
      address: 'Universidad de Antioquia',
      email: 'revistakogoro@udea.edu.co',
      telephone: '',
      fax: ''
    }
  }

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
