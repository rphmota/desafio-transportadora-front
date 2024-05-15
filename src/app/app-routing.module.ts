import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import {MotoristasComponent} from "./components/motoristas/motoristas.component";
import {CargasComponent} from "./components/cargas/cargas.component";
import {CaminhoesComponent} from "./components/caminhoes/caminhoes.component";
import {EntregasComponent} from "./components/entregas/entregas.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: NavComponent,children: [{ path: 'home', component: DashboardComponent },{ path: 'motoristas', component: MotoristasComponent },{ path: 'cargas', component: CargasComponent },{ path: 'caminhoes', component: CaminhoesComponent },{ path: 'entregas', component: EntregasComponent }] },
  { path: '**', redirectTo: '/' } // Rota coringa para redirecionar a um caminho padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
