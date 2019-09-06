import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items = [
    {
      name: 'Inicio', isList: false, route: ''
    },
    {
      name: 'La revista', isList: true,
      subItems: [
        { route: '/Revista/QueEsKogoro', name: '¿Qué es Kogoró?', isInternal: true },
        { route: '/Revista/Historia', name: 'Historia', isInternal: true },
        { route: '/Revista/ComiteEditorial', name: 'Comité Editorial', isInternal: true }
      ]
    },
    {
      name: 'Números publicados', isList: true,
      subItems: [
        { route: '', name: '', isInternal: true }
      ]
    },
    {
      name: 'Proceso de publicación', isList: true, route: '',
      subItems: [
        { route: '', name: '', isInternal: true },
        { route: '', name: '', isInternal: true },
        { route: '', name: '', isInternal: true },
        { route: '', name: '', isInternal: true }
      ]
    },
    {
      name: 'Contacto', isList: false, route: ''
    }
  ];

  constructor() { }

  ngOnInit() { }
}
