import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CaminhoesService, Caminhao } from '../../services/caminhoes.service';
import { AddCaminhaoDialogComponent } from './add-caminhao-dialog/add-caminhao-dialog.component';
import { EditCaminhaoDialogComponent } from './edit-caminhao-dialog/edit-caminhao-dialog.component'; // Verifique o caminho correto para o seu componente de editar caminhão

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.css']
})
export class CaminhoesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'placa', 'capacidade', 'cliente', 'motorista', 'actions'];
  dataSource = new MatTableDataSource<Caminhao>();

  constructor(
    private caminhoesService: CaminhoesService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

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

  editCaminhao(id: number) {
    const caminhao = this.dataSource.data.find(c => c.id === id);
    if (caminhao) {
      const dialogRef = this.dialog.open(EditCaminhaoDialogComponent, {
        width: '400px',
        data: { caminhao }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.getCaminhoes();
        }
      });
    }
  }

  deleteCaminhao(id: number) {
    this.caminhoesService.deleteCaminhao(id).subscribe(
      () => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
        this.snackBar.open('Caminhão deletado com sucesso', 'Fechar', {
          duration: 3000
        });
      },
      error => {
        console.error('Erro ao deletar o caminhão', error);
        let errorMessage = 'Erro ao deletar o caminhão.';
        if (error.error && error.error.message) {
          if (error.error.message.includes('violates foreign key constraint')) {
            errorMessage = 'Não é possível deletar o caminhão porque está sendo referenciado em entregas.';
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
