import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifroes'
})
export class CifroesPipe implements PipeTransform {

  transform(quantidade: number, ...args: unknown[]): unknown {
    let retorno = '';
    for (let i = 0; i < quantidade; i++) {
      retorno += '$';
    }
    return retorno;
  }

}
