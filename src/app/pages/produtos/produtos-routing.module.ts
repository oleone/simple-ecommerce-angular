import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [
      {
        path: ':id',
        component: ProdutoDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
