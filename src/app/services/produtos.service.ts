import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";

import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  get(): Promise<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
      .pipe(take(1)).toPromise();
  }
}
