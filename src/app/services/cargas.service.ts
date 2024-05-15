import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Carga {
  id: number;
  tipo: string;
  descricao: string;
}

export interface CreateCarga {
  tipo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class CargasService {
  private apiUrl = 'http://localhost:8080/cargas';

  constructor(private http: HttpClient) { }

  getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>(this.apiUrl);
  }

  getCarga(id: number): Observable<Carga> {
    return this.http.get<Carga>(`${this.apiUrl}/${id}`);
  }

  updateCarga(carga: Carga): Observable<Carga> {
    return this.http.put<Carga>(`${this.apiUrl}/${carga.id}`, carga);
  }

  addCarga(carga: CreateCarga): Observable<Carga> {
    return this.http.post<Carga>(this.apiUrl, carga);
  }

  deleteCarga(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
