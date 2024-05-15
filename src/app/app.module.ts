import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MotoristasService } from './services/motoristas.service';
import { CargasService } from './services/cargas.service';
import { CaminhoesService } from './services/caminhoes.service';
import { EntregasService } from './services/entregas.service';
import { AuthInterceptor } from './auth.interceptor';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';

import { CargasComponent } from './components/cargas/cargas.component';

import { CaminhoesComponent } from './components/caminhoes/caminhoes.component';

import { EntregasComponent } from './components/entregas/entregas.component';

import { AddMotoristaDialogComponent } from './components/motoristas/add-motorista-dialog/add-motorista-dialog.component';
import { AddCaminhaoDialogComponent } from './components/caminhoes/add-caminhao-dialog/add-caminhao-dialog.component';
import {MotoristaDetailsDialogComponent} from "./components/motoristas/motorista-detalhes/motorista-detalhes.component";
import {CaminhaoDetailsDialogComponent} from "./components/caminhoes/caminhao-detalhes/caminhao-detalhes.component";
import {EntregaDetailsDialogComponent} from "./components/entregas/entrega-detalhes/entrega-detalhes.component";
import { AddCargaDialogComponent } from './components/cargas/add-carga-dialog/add-carga-dialog.component';
import { AddEntregaDialogComponent } from './components/entregas/add-entrega-dialog/add-entrega-dialog.component';
import { EditCargaDialogComponent } from './components/cargas/edit-carga-dialog/edit-carga-dialog.component';
import { EditCaminhaoDialogComponent } from './components/caminhoes/edit-caminhao-dialog/edit-caminhao-dialog.component';
import { EditMotoristaDialogComponent } from './components/edit-motorista-dialog/edit-motorista-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MotoristasComponent,
    MotoristaDetailsDialogComponent,
    CargasComponent,
    CaminhoesComponent,
    CaminhaoDetailsDialogComponent,
    EntregasComponent,
    EntregaDetailsDialogComponent,
    AddMotoristaDialogComponent,
    AddCaminhaoDialogComponent,
    AddCargaDialogComponent,
    AddEntregaDialogComponent,
    EditCargaDialogComponent,
    EditCaminhaoDialogComponent,
    EditMotoristaDialogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Angular Material Modules
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [
    MotoristasService,
    CargasService,
    CaminhoesService,
    EntregasService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
