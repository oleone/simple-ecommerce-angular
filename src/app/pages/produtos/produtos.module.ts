import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { CalculateRatingService } from 'src/app/services/calculate-rating.service';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';

@NgModule({
  declarations: [ProdutosComponent, ProdutoDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProdutosRoutingModule,
    ComponentsModule
  ],
  providers: [
    ProdutosService,
    CalculateRatingService
  ]
})
export class ProdutosModule { }
