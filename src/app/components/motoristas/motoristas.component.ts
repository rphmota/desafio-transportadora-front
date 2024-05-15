import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MotoristasService, Motorista } from '../../services/motoristas.service';
import { AddMotoristaDialogComponent } from './add-motorista-dialog/add-motorista-dialog.component';
import { EditMotoristaDialogComponent } from '../edit-motorista-dialog/edit-motorista-dialog.component';
import {MotoristaDetailsDialogComponent} from "./motorista-detalhes/motorista-detalhes.component"; // Verifique o caminho correto para o seu componente de editar motorista

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'actions'];
  dataSource = new MatTableDataSource<Motorista>();

  constructor(
    private motoristasService: MotoristasService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getMotoristas();
  }

  getMotoristas() {
    this.motoristasService.getMotoristas().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao buscar os dados dos motoristas', error);
      }
    );
  }

  showMotorista(id: number) {
    const motorista = this.dataSource.data.find(m => m.id === id);
    if (motorista) {
      const dialogRef = this.dialog.open(MotoristaDetailsDialogComponent, {
        width: '900px',
        data: { motorista }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
      });
    }
  }

  addMotorista() {
    const dialogRef = this.dialog.open(AddMotoristaDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getMotoristas();
      }
    });
  }

  editMotorista(id: number) {
    const motorista = this.dataSource.data.find(m => m.id === id);
    if (motorista) {
      const dialogRef = this.dialog.open(EditMotoristaDialogComponent, {
        width: '400px',
        data: { motorista }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getMotoristas();
        }
      });
    }
  }

  deleteMotorista(id: number) {
    this.motoristasService.deleteMotorista(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(m => m.id !== id);
        this.snackBar.open('Motorista deletado com sucesso', 'Fechar', {
          duration: 3000
        });
      },
      error => {
        console.error('Erro ao deletar o motorista', error);
        let errorMessage = 'Erro ao deletar o motorista.';
        if (error.error && error.error.message) {
          if (error.error.message.includes('violates foreign key constraint')) {
            errorMessage = 'Não é possível deletar o motorista porque está sendo referenciado em entregas.';
          } else {
            errorMessage = error.error.message;
          }
        }
        this.snackBar.open(errorMessage, 'Fechar', {
          duration: 5000
        });
      }
    );
  }
}
