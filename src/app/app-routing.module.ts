import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcesoDePublicacionComponent } from './components/proceso-de-publicacion/proceso-de-publicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RevistaComponent } from './components/revista/revista.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NumerosPublicadosComponent } from './components/numeros-publicados/numeros-publicados.component';
import { QueEsKogoroComponent } from './components/que-es-kogoro/que-es-kogoro.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ComiteEditorialComponent } from './components/comite-editorial/comite-editorial.component';
import { TiposTextoComponent } from './components/tipos-texto/tipos-texto.component';
import { FormatoTextosComponent } from './components/formato-textos/formato-textos.component';
import { EstructuraArticulosComponent } from './components/estructura-articulos/estructura-articulos.component';
import { FormatoIdentificacionTextosComponent } from './components/formato-identificacion-textos/formato-identificacion-textos.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  {
    path: 'Revista', component: RevistaComponent, children:
      [
        { path: 'QueEsKogoro', component: QueEsKogoroComponent },
        { path: 'Historia', component: HistoriaComponent },
        { path: 'ComiteEditorial', component: ComiteEditorialComponent }
      ]
  },
  { path: 'NumerosPublicados', component: NumerosPublicadosComponent },
  {
    path: 'ProcesoDePublicacion', component: ProcesoDePublicacionComponent, children: [
      { path: 'TiposDeTexto', component: TiposTextoComponent },
      { path: 'FormatosTextos', component: FormatoTextosComponent },
      { path: 'EstructuraArticulos', component: EstructuraArticulosComponent },
      { path: 'FormatoIdentificacionTextos', component: FormatoIdentificacionTextosComponent }
    ]
  },
  { path: 'Contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
