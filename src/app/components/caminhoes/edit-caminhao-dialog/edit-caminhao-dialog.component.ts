import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaminhoesService, Caminhao, UpdateCaminhao } from '../../../services/caminhoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-caminhao-dialog',
  templateUrl: './edit-caminhao-dialog.component.html',
  styleUrls: ['./edit-caminhao-dialog.component.css']
})
export class EditCaminhaoDialogComponent implements OnInit {
  caminhaoForm: FormGroup;
  clientes: { id: number, nome: string }[] = []; // Preencha isso com os dados reais dos clientes

  constructor(
    private fb: FormBuilder,
    private caminhoesService: CaminhoesService,
    private dialogRef: MatDialogRef<EditCaminhaoDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { caminhao: Caminhao }
  ) {
    this.caminhaoForm = this.fb.group({
      placa: [data.caminhao.placa, Validators.required],
      capacidade: [data.caminhao.capacidade, Validators.required],
      clienteId: [data.caminhao.cliente.id, Validators.required]
    });
  }

  ngOnInit() {
    // Aqui você pode carregar a lista de clientes do seu serviço, se necessário
    // this.clientes = this.loadClientes();
  }

  submit() {
    if (this.caminhaoForm.valid) {
      const caminhaoData: UpdateCaminhao = {
        placa: this.caminhaoForm.value.placa,
        capacidade: this.caminhaoForm.value.capacidade,
        cliente: { id: this.caminhaoForm.value.clienteId }
      };
      this.caminhoesService.updateCaminhao(this.data.caminhao.id, caminhaoData).subscribe(
        () => {
          this.snackBar.open('Caminhão atualizado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar o caminhão', error);
          this.snackBar.open('Erro ao atualizar o caminhão', 'Fechar', {
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
