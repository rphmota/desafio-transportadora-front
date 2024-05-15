import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Caminhao {
  id: number;
  placa: string;
  capacidade: number;
  cliente: {
    id: number;
    nome: string;
  };
  motorista: {
    id: number;
    nome: string;
  } | null;
  entregas: Entrega[];
}

export interface CreateCaminhao {
  placa: string;
  capacidade: number;
  cliente: {
    id: number;
  };
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
  carga: {
    id: number;
    tipo: string;
    descricao: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CaminhoesService {
  private apiUrl = 'http://localhost:8080/caminhoes';

  constructor(private http: HttpClient) { }

  getCaminhoes(): Observable<Caminhao[]> {
    return this.http.get<Caminhao[]>(this.apiUrl);
  }

  getCaminhao(id: number): Observable<Caminhao> {
    return this.http.get<Caminhao>(`${this.apiUrl}/${id}`);
  }

  updateCaminhao(caminhao: Caminhao): Observable<Caminhao> {
    return this.http.put<Caminhao>(`${this.apiUrl}/${caminhao.id}`, caminhao);
  }

  addCaminhao(caminhao: CreateCaminhao): Observable<Caminhao> {
    return this.http.post<Caminhao>(this.apiUrl, caminhao);
  }

  deleteCaminhao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
