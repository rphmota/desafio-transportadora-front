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
  entregas: any[];
}

export interface CreateCaminhao {
  placa: string;
  capacidade: number;
  cliente: { id: number };
}

export interface UpdateCaminhao {
  placa?: string;
  capacidade?: number;
  cliente?: { id: number };
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

  addCaminhao(caminhao: CreateCaminhao): Observable<Caminhao> {
    return this.http.post<Caminhao>(this.apiUrl, caminhao);
  }

  updateCaminhao(id: number, caminhao: UpdateCaminhao): Observable<Caminhao> {
    return this.http.put<Caminhao>(`${this.apiUrl}/${id}`, caminhao);
  }

  deleteCaminhao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
