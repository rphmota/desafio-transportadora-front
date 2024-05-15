import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CargasService, Carga } from '../../services/cargas.service';
import { AddCargaDialogComponent } from './add-carga-dialog/add-carga-dialog.component';
import {EditCargaDialogComponent} from "./edit-carga-dialog/edit-carga-dialog.component";

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipo', 'descricao', 'actions'];
  dataSource = new MatTableDataSource<Carga>();

  constructor(
    private cargasService: CargasService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getCargas();
  }

  getCargas() {
    this.cargasService.getCargas().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao buscar os dados das cargas', error);
      }
    );
  }

  addCarga() {
    const dialogRef = this.dialog.open(AddCargaDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCargas();
      }
    });
  }

  editCarga(id: number) {
    const carga = this.dataSource.data.find(c => c.id === id);
    if (carga) {
      const dialogRef = this.dialog.open(EditCargaDialogComponent, {
        width: '400px',
        data: { carga }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getCargas();
        }
      });
    }
  }

  deleteCarga(id: number) {
    this.cargasService.deleteCarga(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
        this.snackBar.open('Carga deletada com sucesso', 'Fechar', {
          duration: 3000
        });
      },
      error => {
        console.error('Erro ao deletar a carga', error);
        this.snackBar.open('Erro ao deletar a carga: ' + error.error.message, 'Fechar', {
          duration: 3000
        });
      }
    );
  }
}
