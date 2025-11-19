import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  save(categoria: Categoria) : Observable<Categoria> {
    return this.http.post<Categoria>('http://localhost:3000/categorias', categoria);
  }

  getAll() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }

  getById(id: number) : Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:3000/categorias/${id}`);
  }

  update(categoria: Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>(`http://localhost:3000/categorias/${categoria.id}`, categoria);
  }

  delete(id: number) : Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/categorias/${id}`);
  }
}
