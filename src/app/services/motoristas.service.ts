import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Entrega {
  id: number;
  destino: string;
  valorBase: number;
  valorTotal: number;
  dataEntrega: string;
  valiosa: boolean;
  segurada: boolean;
  perigosa: boolean;
  carga: {
    descricao: string;
    tipo: string;
  };
  caminhaoId: number;
}

export interface Motorista {
  id: number;
  nome: string;
  entregas?: Entrega[];
}

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {
  private apiUrl = 'http://localhost:8080/motoristas';


  constructor(private http: HttpClient) { }

  getMotoristas(): Observable<Motorista[]> {
    return this.http.get<Motorista[]>(this.apiUrl);
  }

  getMotorista(id: number): Observable<Motorista> {
    return this.http.get<Motorista>(`${this.apiUrl}/${id}`);
  }

  updateMotorista(motorista: Motorista): Observable<Motorista> {
    return this.http.put<Motorista>(`${this.apiUrl}/${motorista.id}`, motorista);
  }

  addMotorista(motorista: Partial<Motorista>): Observable<Motorista> {
    return this.http.post<Motorista>(this.apiUrl, motorista);
  }

  deleteMotorista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
