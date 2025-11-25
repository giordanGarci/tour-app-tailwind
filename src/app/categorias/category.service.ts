import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/categorias';

  save(categoria: Category) : Observable<Category> {
    return this.http.post<Category>(this.baseUrl, categoria);
  }

  getAll() : Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getById(id: number) : Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  update(categoria: Category) : Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/${categoria.id}`, categoria);
  }

  delete(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
