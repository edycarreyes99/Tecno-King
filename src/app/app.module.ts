
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBChartsModule,MDBBootstrapModule} from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PhonesComponent } from './componentes/phones/phones.component';
import { AndroidComponent } from './componentes/android/android.component';
import { IcloudComponent } from './componentes/icloud/icloud.component';
import { DesarrolloWebComponent } from './componentes/desarrollo-web/desarrollo-web.component';
import { DesarrolloSistemasComponent } from './componentes/desarrollo-sistemas/desarrollo-sistemas.component';
import { DiseñoGraficoComponent } from './componentes/diseño-grafico/diseño-grafico.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { ProgramasPcComponent } from './componentes/programas-pc/programas-pc.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { CaruouselComponent } from './componentes/caruousel/caruousel.component';
import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PhonesComponent,
    AndroidComponent,
    IcloudComponent,
    DesarrolloWebComponent,
    DesarrolloSistemasComponent,
    DiseñoGraficoComponent,
    DescargasComponent,
    ProgramasPcComponent,
    NotFoundPageComponent,
    ContactenosComponent,
    CaruouselComponent,
    MaterializeModule
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    MDBChartsModule,
    AppRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
