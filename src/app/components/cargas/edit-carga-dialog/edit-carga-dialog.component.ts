import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargasService, Carga } from '../../../services/cargas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-carga-dialog',
  templateUrl: './edit-carga-dialog.component.html',
  styleUrls: ['./edit-carga-dialog.component.css']
})
export class EditCargaDialogComponent implements OnInit {
  cargaForm: FormGroup;
  tiposCarga: string[] = ['Combustível', 'Eletrônicos', 'Alimentos', 'Móveis', 'Outros'];

  constructor(
    private fb: FormBuilder,
    private cargasService: CargasService,
    private dialogRef: MatDialogRef<EditCargaDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { carga: Carga }
  ) {
    this.cargaForm = this.fb.group({
      tipo: [data.carga.tipo, Validators.required],
      descricao: [data.carga.descricao, Validators.required]
    });
  }

  ngOnInit() {}

  submit() {
    if (this.cargaForm.valid) {
      const cargaData: Partial<Carga> = {
        tipo: this.cargaForm.value.tipo,
        descricao: this.cargaForm.value.descricao
      };
      this.cargasService.updateCarga(this.data.carga.id, cargaData).subscribe(
        () => {
          this.snackBar.open('Carga atualizada com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar a carga', error);
          this.snackBar.open('Erro ao atualizar a carga', 'Fechar', {
            duration: 3000
          });
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
