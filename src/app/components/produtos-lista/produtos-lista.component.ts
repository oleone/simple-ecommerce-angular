import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from 'src/app/models';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  @Input() products: Product[];
  product: Product;

  // pagination: {
  //   _page: 1,
  //   _limit: 10
  // };

  constructor(private location: Location, private service: ProdutosService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  changeFilter(_products: Product[]) {
    this.products = _products;
  }

  doDetail(_product: Product) {
    this.product = _product;
  }

  back() {
    // this.location.back();
    this.product = null;
  }

  getProducts() {
    this.service.get().then((_products: Product[]) => {
      this.products = _products;
    })
      .catch(error => {
        console.log(error);
        this.products = [];
      })
      .finally(() => {

      });
  }

}
