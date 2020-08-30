import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CalculateRatingService {

  constructor(private http: HttpClient) { }

  calculateRate(notas: Nota[]) {
    let param = `{ expr=sum(`;
    notas.forEach(nota => {
      param += nota;
      param += `)/${notas.length} }`;
    });
  }
}
