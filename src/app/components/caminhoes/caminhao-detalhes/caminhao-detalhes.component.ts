import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Caminhao } from '../../../services/caminhoes.service';

@Component({
  selector: 'app-caminhao-detalhes',
  templateUrl: './caminhao-detalhes.component.html',
  styleUrls: ['./caminhao-detalhes.component.css']
})
export class CaminhaoDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CaminhaoDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { caminhao: Caminhao }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
