import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entrega } from '../../../services/entregas.service';

@Component({
  selector: 'app-entrega-detalhes',
  templateUrl: './entrega-detalhes.component.html',
  styleUrls: ['./entrega-detalhes.component.css']
})
export class EntregaDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EntregaDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { entrega: Entrega }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
