import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../models';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculateRatingService {

  constructor(private http: HttpClient) { }

  async calculateRateAPI(notas: Nota[]) {
    let param = `expr=sum(`;
    let index = 0;
    for (const nota of notas) {
      param += nota.nota;
      if (index !== notas.length - 1) { param += `,`; }
      if (index === notas.length - 1) { param += `)/${notas.length}`; }
      index++;
    }

    // this.http.get(`http://api.mathjs.org/v4?${param}`)
    //   .pipe(take(1))
    //   .subscribe(result => {
    //     return result;
    //   }
    // );
    return 5;
  }

  calculateRate(notas: Nota[]) {
    let rate = 0;
    let sum = 0;
    let index = 0;
    if (notas.length > 0) {
      for (const nota of notas) {
        sum += Number(nota.nota);
        index++;
      }
      rate = Math.round(sum / notas.length);
    }
    // console.log(rate);
    return rate;
  }

}
