import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProcesoDePublicacionComponent } from './components/proceso-de-publicacion/proceso-de-publicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RevistaComponent } from './components/revista/revista.component';
import { NumerosPublicadosComponent } from './components/numeros-publicados/numeros-publicados.component';
import { QueEsKogoroComponent } from './components/que-es-kogoro/que-es-kogoro.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ComiteEditorialComponent } from './components/comite-editorial/comite-editorial.component';
import { TiposTextoComponent } from './components/tipos-texto/tipos-texto.component';
import { FormatoTextosComponent } from './components/formato-textos/formato-textos.component';
import { EstructuraArticulosComponent } from './components/estructura-articulos/estructura-articulos.component';
import { FormatoIdentificacionTextosComponent } from './components/formato-identificacion-textos/formato-identificacion-textos.component';
import { NumeroPublicadoComponent } from './components/numero-publicado/numero-publicado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProcesoDePublicacionComponent,
    ContactoComponent,
    InicioComponent,
    RevistaComponent,
    NumerosPublicadosComponent,
    QueEsKogoroComponent,
    HistoriaComponent,
    ComiteEditorialComponent,
    TiposTextoComponent,
    FormatoTextosComponent,
    EstructuraArticulosComponent,
    FormatoIdentificacionTextosComponent,
    NumeroPublicadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
