import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  save(categoria: Category) : Observable<Category> {
    return this.http.post<Category>('http://localhost:3000/categorias', categoria);
  }

  getAll() : Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categorias');
  }

  getById(id: number) : Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categorias/${id}`);
  }

  update(categoria: Category) : Observable<Category> {
    return this.http.put<Category>(`http://localhost:3000/categorias/${categoria.id}`, categoria);
  }

  delete(id: number) : Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/categorias/${id}`);
  }
}
