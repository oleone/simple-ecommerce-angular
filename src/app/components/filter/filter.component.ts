import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Output() changeFilter = new EventEmitter<any>();

  // Todos os dados
  _data: any[];

  disponivel: boolean;
  precoMedio: number;
  categoria: string;
  iniciou = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue && !this.iniciou) {
      this._data = [...changes.data.currentValue];
      this.change(true);
      this.iniciou = true;
    }
  }

  ngOnInit(): void { }

  async change(disponivel: boolean = null, precoMedio: number = null, categoria: string = null) {
    this.disponivel = disponivel;
    this.precoMedio = precoMedio;
    this.categoria = categoria;

    await this.doDisponibilidade();
    await this.doPreco(this.precoMedio, this.data);
    await this.doCategoria(categoria, this.data);
    this.changeFilter.next(this.data);
  }

  doReset() {
    this.data = [...this._data];
    this.precoMedio = null;
    this.iniciou = false;
    this.disponivel = false;
    this.changeFilter.next(this.data);
  }

  doDisponibilidade(dataRollback: any[] = this.data) {
    return new Promise((resolve, reject) => {
      try {
        this.data = this._data.filter(d => d.disponivel === this.disponivel);
        // if (this.disponivel) {
          
        // } else {
        //   this.data = this._data.filter(d => d['disponivel'] === true);
        // }
        // this.disponivel = !this.disponivel;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  doPreco(_precoMedio: number = null, dataRollback: any[] = this.data) {
    return new Promise((resolve, reject) => {
      try {
        // Se já tiver filtrado por preço antes ou está filtrando agora
        if (this.precoMedio || _precoMedio) {
          if (_precoMedio) {
            this.precoMedio = _precoMedio;
          }
          if (this.disponivel) {
            this.data = dataRollback.filter(d => d['precoMedio'] === this.precoMedio);
          } else {
            this.data = dataRollback.filter(d => d['precoMedio'] === this.precoMedio);
          }
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    })
  }

  doCategoria(categoria: string = null, dataRollback: any[] = this.data) {
    return new Promise((resolve, reject) => {
      try {
        if (categoria) {
          this.data = dataRollback.filter(d => d.categoria === categoria);
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

}
