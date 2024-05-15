import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EntregasService, Entrega } from '../../services/entregas.service';
import { EntregaDetailsDialogComponent } from './entrega-detalhes/entrega-detalhes.component'; // Verifique o caminho correto para o seu componente de detalhes
import { AddEntregaDialogComponent } from './add-entrega-dialog/add-entrega-dialog.component'; // Verifique o caminho correto para o seu componente de adicionar entrega

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'destino', 'valorBase', 'dataEntrega', 'caminhao', 'motorista', 'carga', 'actions'];
  dataSource = new MatTableDataSource<Entrega>();

  constructor(private entregasService: EntregasService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getEntregas();
  }

  getEntregas() {
    this.entregasService.getEntregas().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao buscar os dados das entregas', error);
      }
    );
  }

  addEntrega() {
    const dialogRef = this.dialog.open(AddEntregaDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getEntregas();
      }
    });
  }

  showEntrega(id: number) {
    const entrega = this.dataSource.data.find(e => e.id === id);
    if (entrega) {
      const dialogRef = this.dialog.open(EntregaDetailsDialogComponent, {
        width: '900px',
        data: { entrega }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
      });
    }
  }

  editEntrega(id: number) {
    const entrega = this.dataSource.data.find(e => e.id === id);
    console.log('Edit Entrega:', entrega);
  }

  deleteEntrega(id: number) {
    this.entregasService.deleteEntrega(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(e => e.id !== id);
        console.log('Entrega deletada com sucesso');
      },
      error => {
        console.error('Erro ao deletar a entrega', error);
      }
    );
  }
}
