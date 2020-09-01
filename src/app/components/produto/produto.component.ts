import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product, Imagem, Nota } from 'src/app/models';
import { Router } from '@angular/router';

import { CalculateRatingService } from '../../services/calculate-rating.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Product;
  @Input() inDetail: boolean;
  @Output() doDetail = new EventEmitter();

  constructor(private router: Router, private serviceRating: CalculateRatingService) { }

  ngOnInit(): void {
  }

  filterPhotoInSpotlight(imagens: Imagem[]): Imagem {
    const img: Imagem = null;
    return imagens ? imagens.filter(i => i.destacada === true)[0] : img;
  }

  goToDetail(_product: Product) {
    // this.router.navigate([`produtos/${id}`]);
    this.doDetail.next(_product);
  }

  calculateRate(notes: Nota[]) {
    return this.serviceRating.calculateRate(notes);
  }

}
