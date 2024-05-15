import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: number;
  nome: string;
}

export interface Caminhao {
  id: number;
  placa: string;
  capacidade: number;
  cliente: Cliente;
  motorista: Motorista | null;
}

export interface Motorista {
  id: number;
  nome: string;
}

export interface Carga {
  id: number;
  tipo: string;
  descricao: string;
}

export interface Entrega {
  id: number;
  destino: string;
  valorBase: number;
  valorTotal: number;
  dataEntrega: string;
  valiosa: boolean;
  segurada: boolean;
  perigosa: boolean;
  caminhao: Caminhao;
  motorista: Motorista;
  carga: Carga;
}

export interface CreateEntrega {
  destino: string;
  valorBase: number;
  dataEntrega: string;
  caminhao: {
    id: number;
  };
  motorista: {
    id: number;
  };
  carga: {
    id: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class EntregasService {
  private apiUrl = 'http://localhost:8080/entregas';

  constructor(private http: HttpClient) { }

  getEntregas(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(this.apiUrl);
  }

  getEntrega(id: number): Observable<Entrega> {
    return this.http.get<Entrega>(`${this.apiUrl}/${id}`);
  }

  addEntrega(entrega: CreateEntrega): Observable<Entrega> {
    return this.http.post<Entrega>(this.apiUrl, entrega);
  }

  updateEntrega(entrega: Entrega): Observable<Entrega> {
    return this.http.put<Entrega>(`${this.apiUrl}/${entrega.id}`, entrega);
  }

  deleteEntrega(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
