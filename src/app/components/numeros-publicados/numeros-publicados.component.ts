import { Component, OnInit } from '@angular/core';
import { Numero } from 'src/app/models/numero.model';
import { NumerosService } from 'src/app/services/numeros.service';

@Component({
  selector: 'app-numeros-publicados',
  templateUrl: './numeros-publicados.component.html',
  styleUrls: ['./numeros-publicados.component.scss']
})
export class NumerosPublicadosComponent implements OnInit {
  numsPublicados: Numero[];
  constructor(private numerosService: NumerosService) {
    this.numsPublicados = this.numerosService.numerosPublicados;
    console.log(this.numsPublicados);

  }
  ngOnInit() { }
}
