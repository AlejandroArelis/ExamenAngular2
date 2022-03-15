import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ingrediente } from '../models/ingrediente.model';
import { Platillo } from '../models/platillo.mode';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(
    private _http: HttpClient
  ) { }

  getRandom(): Observable<Platillo> {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/random.php`).pipe(map((response: any) => response.meals[0]));
  }

  getById(idMeal:string): Observable<Platillo> {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).pipe(map((response: any) => response.meals[0]));
  }

  getIngredientes(): Observable<Ingrediente[]> {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`).pipe(map((response: any) => response.meals));
  }

  getByIngrediente(strIngredient:string) {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`).pipe(map((response: any) => response.meals));
  }

  getAreas() {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`).pipe(map((response: any) => response.meals));
  }

  getByArea(strArea:String) {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`).pipe(map((response: any) => response.meals));
  }

  getCategorias() {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`).pipe(map((response: any) => response.meals));
  }

  getByCategoria(strArea:String) {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strArea}`).pipe(map((response: any) => response.meals));
  }
}
