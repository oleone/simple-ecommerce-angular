import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../../services/produtos.service';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  products: Product[];

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.service.get().then((_products: Product[]) => {
      console.log(_products);
      this.products = _products;
    })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {

      });
  }

}
