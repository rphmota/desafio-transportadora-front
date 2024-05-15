import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Entrega {
  id: number;
  destino: string;
  valorBase: number;
  valorTotal: number;
  dataEntrega: string;
  valiosa: boolean;
  segurada: boolean;
  perigosa: boolean;
  carga: {
    descricao: string;
    tipo: string;
  };
  caminhaoId: number;
}

interface Motorista {
  id: number;
  nome: string;
  entregas: Entrega[];
}

@Component({
  selector: 'app-motorista-details-dialog',
  templateUrl: './motorista-detalhes.component.html',
  styleUrls: ['./motorista-detalhes.component.css']
})
export class MotoristaDetailsDialogComponent {
  displayedColumns: string[] = ['id', 'destino', 'valorBase', 'valorTotal', 'dataEntrega', 'valiosa', 'segurada', 'perigosa', 'descricao', 'tipo'];

  constructor(
    public dialogRef: MatDialogRef<MotoristaDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { motorista: Motorista }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
