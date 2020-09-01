import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../../services/produtos.service';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    
  }

}
