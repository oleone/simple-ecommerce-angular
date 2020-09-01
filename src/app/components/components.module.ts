import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarRatingModule } from 'angular-star-rating';

import { ProdutoComponent } from './produto/produto.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { FilterComponent } from './filter/filter.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ProdutoComponent, ProdutosListaComponent, FilterComponent],
  imports: [
    CommonModule,
    PipesModule,
    StarRatingModule.forRoot()
  ],
  exports: [ProdutoComponent, ProdutosListaComponent, FilterComponent]
})
export class ComponentsModule { }
