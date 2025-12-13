import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.apiUrl + '/categorias';

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
