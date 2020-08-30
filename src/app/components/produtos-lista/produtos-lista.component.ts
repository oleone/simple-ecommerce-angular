import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(_products: Product[]) {
    this.products = _products;
  }

}
