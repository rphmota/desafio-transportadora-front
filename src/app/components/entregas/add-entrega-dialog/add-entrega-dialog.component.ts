import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntregasService, CreateEntrega } from '../../../services/entregas.service';
import { MotoristasService, Motorista } from '../../../services/motoristas.service';
import { CaminhoesService, Caminhao } from '../../../services/caminhoes.service';
import { CargasService, Carga } from '../../../services/cargas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-entrega-dialog',
  templateUrl: './add-entrega-dialog.component.html',
  styleUrls: ['./add-entrega-dialog.component.css']
})
export class AddEntregaDialogComponent implements OnInit {
  entregaForm: FormGroup;
  motoristas: Motorista[] = [];
  caminhoes: Caminhao[] = [];
  cargas: Carga[] = [];

  constructor(
    private fb: FormBuilder,
    private entregasService: EntregasService,
    private motoristasService: MotoristasService,
    private caminhoesService: CaminhoesService,
    private cargasService: CargasService,
    private dialogRef: MatDialogRef<AddEntregaDialogComponent>,
    private snackBar: MatSnackBar
  ) {
    this.entregaForm = this.fb.group({
      destino: ['', Validators.required],
      valorBase: ['', [Validators.required, Validators.min(0)]],
      dataEntrega: ['', Validators.required],
      caminhaoId: ['', Validators.required],
      motoristaId: ['', Validators.required],
      cargaId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadMotoristas();
    this.loadCaminhoes();
    this.loadCargas();
  }

  loadMotoristas() {
    this.motoristasService.getMotoristas().subscribe(
      data => this.motoristas = data,
      error => console.error('Erro ao carregar motoristas', error)
    );
  }

  loadCaminhoes() {
    this.caminhoesService.getCaminhoes().subscribe(
      data => this.caminhoes = data,
      error => console.error('Erro ao carregar caminhões', error)
    );
  }

  loadCargas() {
    this.cargasService.getCargas().subscribe(
      data => this.cargas = data,
      error => console.error('Erro ao carregar cargas', error)
    );
  }

  submit() {
    if (this.entregaForm.valid) {
      const entregaData: CreateEntrega = {
        destino: this.entregaForm.value.destino,
        valorBase: this.entregaForm.value.valorBase,
        dataEntrega: this.entregaForm.value.dataEntrega,
        caminhao: { id: this.entregaForm.value.caminhaoId },
        motorista: { id: this.entregaForm.value.motoristaId },
        carga: { id: this.entregaForm.value.cargaId }
      };
      this.entregasService.addEntrega(entregaData).subscribe(
        () => {
          this.snackBar.open('Registro adicionado com sucesso', 'Fechar', {
            duration: 3000
          });
          this.dialogRef.close(true);
        },
        error => {
          this.snackBar.open(error.error.message, 'Fechar', {
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
