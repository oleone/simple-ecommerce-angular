import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from 'src/app/models';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  @Input() products: Product[];
  product: Product;

  constructor(private location: Location) { }

  ngOnInit(): void {
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

}
