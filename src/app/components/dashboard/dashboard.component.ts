import { Component, OnInit } from '@angular/core';

interface Caminhao {
  id: number;
  placa: string;
  capacidade: number;
  cliente: { id: number, nome: string };
  motorista: { id: number, nome: string } | null;
}

interface Entrega {
  id: number;
  destino: string;
  valorBase: number;
  valorTotal: number;
  dataEntrega: string;
  valiosa: boolean;
  segurada: boolean;
  perigosa: boolean;
  carga: { id: number, tipo: string, descricao: string };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  caminhões: Caminhao[] = [
    { id: 1, placa: 'XYZ1234', capacidade: 3500, cliente: { id: 1, nome: 'Cliente A' }, motorista: { id: 1, nome: 'Motorista A' } },
    { id: 2, placa: 'XYZ5678', capacidade: 4000, cliente: { id: 2, nome: 'Cliente B' }, motorista: { id: 2, nome: 'Motorista B' } }
  ];

  entregas: Entrega[] = [
    { id: 1, destino: 'Nordeste', valorBase: 35000.0, valorTotal: 35000.0, dataEntrega: '2024-09-19', valiosa: true, segurada: true, perigosa: false, carga: { id: 1, tipo: 'Combustível', descricao: 'Combustíveis para abastecer o foguete para ir pra Marte' } },
    { id: 2, destino: 'Sul', valorBase: 25000.0, valorTotal: 25000.0, dataEntrega: '2024-09-20', valiosa: false, segurada: true, perigosa: true, carga: { id: 2, tipo: 'Eletrônicos', descricao: 'Smartphones de última geração' }},
    { id: 3, destino: 'Sul', valorBase: 25000.0, valorTotal: 25000.0, dataEntrega: '2024-16-20', valiosa: false, segurada: true, perigosa: true, carga: { id: 2, tipo: 'Eletrônicos', descricao: 'Smartphones de última geração' }},
    { id: 4, destino: 'Sul', valorBase: 25000.0, valorTotal: 25000.0, dataEntrega: '2024-05-15', valiosa: false, segurada: true, perigosa: true, carga: { id: 2, tipo: 'Eletrônicos', descricao: 'Smartphones de última geração' }},

  ];

  totalCaminhoes: number = 0;
  entregasHoje: Entrega[] = [];
  tiposCargas: { [key: string]: number } = {};
  valorTotalHoje: number = 0;

  ngOnInit(): void {
    this.totalCaminhoes = this.caminhões.length;

    const today = new Date().toISOString().split('T')[0];
    this.entregasHoje = this.entregas.filter(entrega => entrega.dataEntrega === today);

    this.tiposCargas = this.entregas.reduce((acc, entrega) => {
      acc[entrega.carga.tipo] = (acc[entrega.carga.tipo] || 0) + 1;
      return acc;
    }, {});

    this.valorTotalHoje = this.entregasHoje.reduce((acc, entrega) => acc + entrega.valorTotal, 0);
  }
}
