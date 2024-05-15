import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Motorista {
  id: number;
  nome: string;
  entregas?: any[];
}

export interface CreateMotorista {
  nome: string;
}

export interface UpdateMotorista {
  nome?: string;
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

  addMotorista(motorista: CreateMotorista): Observable<Motorista> {
    return this.http.post<Motorista>(this.apiUrl, motorista);
  }

  updateMotorista(id: number, motorista: UpdateMotorista): Observable<Motorista> {
    return this.http.put<Motorista>(`${this.apiUrl}/${id}`, motorista);
  }

  deleteMotorista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
