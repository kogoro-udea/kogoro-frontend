import { Component, OnInit } from '@angular/core';
import { Numero } from 'src/app/models/numero.model';

@Component({
  selector: 'app-numeros-publicados',
  templateUrl: './numeros-publicados.component.html',
  styleUrls: ['./numeros-publicados.component.scss']
})
export class NumerosPublicadosComponent implements OnInit {
  numsPublicados: Numero[];
  constructor() { }
  ngOnInit() {}
}
