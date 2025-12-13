import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from './place';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.apiUrl + '/lugares';

  save(place: Place) : Observable<Place> {
    return this.http.post<Place>(this.baseUrl, place);
  }

  getAll() : Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl);
  }

  filter(name: string, category: string) : Observable<Place[]> {
    let params = new HttpParams();

    if (name) {
      params = params.set('name_like', name);
    }
    if (category) {
      params = params.set('category', category);
    }
    console.log(params.toString());

    return this.http.get<Place[]>(this.baseUrl, {
       params: params
    });
  }

}
