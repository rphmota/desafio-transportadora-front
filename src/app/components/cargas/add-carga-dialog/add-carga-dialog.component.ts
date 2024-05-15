import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargasService, CreateCarga } from '../../../services/cargas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-carga-dialog',
  templateUrl: './add-carga-dialog.component.html',
  styleUrls: ['./add-carga-dialog.component.css']
})
export class AddCargaDialogComponent {
  cargaForm: FormGroup;
  tiposCarga: string[] = ['Combustível', 'Eletrônicos', 'Alimentos', 'Móveis', 'Outros'];

  constructor(
    private fb: FormBuilder,
    private cargasService: CargasService,
    private dialogRef: MatDialogRef<AddCargaDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.cargaForm = this.fb.group({
      tipo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  submit() {
    if (this.cargaForm.valid) {
      const cargaData: CreateCarga = {
        tipo: this.cargaForm.value.tipo,
        descricao: this.cargaForm.value.descricao
      };
      this.cargasService.addCarga(cargaData).subscribe(
        () => {
          this.snackBar.open('Registro adicionado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao adicionar a carga', error);
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
