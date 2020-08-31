import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private router: Router, private serviceRating: CalculateRatingService) { }

  ngOnInit(): void {
  }

  filterPhotoInSpotlight(imagens: Imagem[]): Imagem {
    return imagens.filter(i => i.destacada === true)[0];
  }

  goToDetail(id: string) {
    this.router.navigate([`produtos/${id}`]);
  }

  calculateRate(notes: Nota[]) {
    return this.serviceRating.calculateRate(notes);
  }

}
