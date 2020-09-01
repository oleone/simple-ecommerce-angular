import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CifroesPipe } from './cifroes.pipe';

@NgModule({
  declarations: [CifroesPipe],
  imports: [
    CommonModule
  ],
  exports: [CifroesPipe]
})
export class PipesModule { }
