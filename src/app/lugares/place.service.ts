import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from './place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/lugares';

  save(place: Place) : Observable<Place> {
    return this.http.post<Place>(this.baseUrl, place);
  }

  getAll() : Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl);
  }

  // getByCategory(category: string) : Observable<Place[]> {
  //   const url = `${this.baseUrl}?categoria=${category}`;
  //   return this.http.get<Place[]>(url);
  // }

}
