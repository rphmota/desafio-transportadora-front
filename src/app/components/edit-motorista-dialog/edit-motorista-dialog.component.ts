import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotoristasService, Motorista, UpdateMotorista } from '../../services/motoristas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-motorista-dialog',
  templateUrl: './edit-motorista-dialog.component.html',
  styleUrls: ['./edit-motorista-dialog.component.css']
})
export class EditMotoristaDialogComponent implements OnInit {
  motoristaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private motoristasService: MotoristasService,
    private dialogRef: MatDialogRef<EditMotoristaDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { motorista: Motorista }
  ) {
    this.motoristaForm = this.fb.group({
      nome: [data.motorista.nome, Validators.required]
    });
  }

  ngOnInit() {}

  submit() {
    if (this.motoristaForm.valid) {
      const motoristaData: UpdateMotorista = {
        nome: this.motoristaForm.value.nome
      };
      this.motoristasService.updateMotorista(this.data.motorista.id, motoristaData).subscribe(
        () => {
          this.snackBar.open('Motorista atualizado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar o motorista', error);
          this.snackBar.open('Erro ao atualizar o motorista', 'Fechar', {
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
