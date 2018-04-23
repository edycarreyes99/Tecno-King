import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {AndroidComponent} from './componentes/android/android.component';
import {ContactenosComponent} from './componentes/contactenos/contactenos.component';
import {DesarrolloSistemasComponent} from './componentes/desarrollo-sistemas/desarrollo-sistemas.component';
import {DesarrolloWebComponent} from './componentes/desarrollo-web/desarrollo-web.component';
import {DescargasComponent} from './componentes/descargas/descargas.component';
import {DiseñoGraficoComponent} from './componentes/diseño-grafico/diseño-grafico.component';
import {IcloudComponent} from './componentes/icloud/icloud.component';
import {NavbarComponent} from './componentes/navbar/navbar.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';
import {PhonesComponent} from './componentes/phones/phones.component';
import {ProgramasPcComponent} from './componentes/programas-pc/programas-pc.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'desarrolloSistemas', component: DesarrolloSistemasComponent},
  {path: 'desarrolloWeb', component: DesarrolloWebComponent},
  {path: 'descargas', component: DescargasComponent},
  {path: 'diseñoGrafico', component: DiseñoGraficoComponent},
  {path: 'iCloud', component: IcloudComponent},
  {path: '**', component: NotFoundPageComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'descargasPc', component: ProgramasPcComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
