import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotoristasService } from '../../../services/motoristas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-motorista-dialog',
  templateUrl: './add-motorista-dialog.component.html',
  styleUrls: ['./add-motorista-dialog.component.css']
})
export class AddMotoristaDialogComponent {
  motoristaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private motoristasService: MotoristasService,
    private dialogRef: MatDialogRef<AddMotoristaDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.motoristaForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  submit() {
    if (this.motoristaForm.valid) {
      this.motoristasService.addMotorista(this.motoristaForm.value).subscribe(
        () => {
          this.snackBar.open('Registro adicionado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao adicionar o motorista', error);
        }
      );
    }
  }

  close() {
    this.dialogRef.close();
  }
}
