import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaminhoesService, CreateCaminhao } from '../../../services/caminhoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-caminhao-dialog',
  templateUrl: './add-caminhao-dialog.component.html',
  styleUrls: ['./add-caminhao-dialog.component.css']
})
export class AddCaminhaoDialogComponent {
  caminhaoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private caminhoesService: CaminhoesService,
    private dialogRef: MatDialogRef<AddCaminhaoDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.caminhaoForm = this.fb.group({
      placa: ['', Validators.required],
      capacidade: ['', Validators.required],
      clienteId: ['', Validators.required]
    });
  }

  submit() {
    if (this.caminhaoForm.valid) {
      const caminhaoData: CreateCaminhao = {
        placa: this.caminhaoForm.value.placa,
        capacidade: this.caminhaoForm.value.capacidade,
        cliente: { id: this.caminhaoForm.value.clienteId }
      };
      this.caminhoesService.addCaminhao(caminhaoData).subscribe(
        () => {
          this.snackBar.open('Registro adicionado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao adicionar o caminhão', error);
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
