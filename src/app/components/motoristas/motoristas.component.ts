import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MotoristasService, Motorista } from '../../services/motoristas.service';
import { MotoristaDetailsDialogComponent } from './motorista-detalhes/motorista-detalhes.component'; // Verifique o caminho correto para o seu componente de detalhes
import { AddMotoristaDialogComponent } from './add-motorista-dialog/add-motorista-dialog.component'; // Verifique o caminho correto para o seu componente de adicionar motorista

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'actions'];
  dataSource = new MatTableDataSource<Motorista>();

  constructor(private motoristasService: MotoristasService, public dialog: MatDialog) {}

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

  editMotorista(id: number) {
    const motorista = this.dataSource.data.find(m => m.id === id);
    console.log('Edit Motorista:', motorista);
  }

  deleteMotorista(id: number) {
    this.motoristasService.deleteMotorista(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(m => m.id !== id);
        console.log('Motorista deletado com sucesso');
      },
      error => {
        console.error('Erro ao deletar o motorista', error);
      }
    );
  }
}

