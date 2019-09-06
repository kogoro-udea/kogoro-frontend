import { Component, OnInit, Input } from '@angular/core';
import { Numero } from 'src/app/models/numero.model';

@Component({
  selector: 'app-numero-publicado',
  templateUrl: './numero-publicado.component.html',
  styleUrls: ['./numero-publicado.component.scss']
})
export class NumeroPublicadoComponent implements OnInit {
  @Input() numero: Numero;
  constructor() { }
  ngOnInit() {}
}
