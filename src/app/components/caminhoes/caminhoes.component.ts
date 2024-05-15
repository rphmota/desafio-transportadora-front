import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CaminhoesService, Caminhao } from '../../services/caminhoes.service';
import { CaminhaoDetailsDialogComponent } from './caminhao-detalhes/caminhao-detalhes.component';
import { AddCaminhaoDialogComponent } from './add-caminhao-dialog/add-caminhao-dialog.component';

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.css']
})
export class CaminhoesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'placa', 'capacidade', 'cliente', 'motorista', 'actions'];
  dataSource = new MatTableDataSource<Caminhao>();

  constructor(private caminhoesService: CaminhoesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getCaminhoes();
  }

  getCaminhoes() {
    this.caminhoesService.getCaminhoes().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => {
        console.error('Erro ao buscar os dados dos caminhões', error);
      }
    );
  }

  addCaminhao() {
    const dialogRef = this.dialog.open(AddCaminhaoDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCaminhoes();
      }
    });
  }

  showCaminhao(id: number) {
    const caminhao = this.dataSource.data.find(c => c.id === id);
    if (caminhao) {
      const dialogRef = this.dialog.open(CaminhaoDetailsDialogComponent, {
        width: '900px',
        data: { caminhao }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('O diálogo foi fechado');
      });
    }
  }

  editCaminhao(id: number) {
    const caminhao = this.dataSource.data.find(c => c.id === id);
    console.log('Edit Caminhão:', caminhao);
  }

  deleteCaminhao(id: number) {
    this.caminhoesService.deleteCaminhao(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
        console.log('Caminhão deletado com sucesso');
      },
      error => {
        console.error('Erro ao deletar o caminhão', error);
      }
    );
  }
}
