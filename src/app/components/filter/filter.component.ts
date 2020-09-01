import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {

  @Input() data: any[];
  @Output() changeFilter = new EventEmitter<any>();

  _data: any[];

  disponivel = true;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this._data = [...changes.data.currentValue];
    }
  }

  ngOnInit(): void { }

  change() {
    this.changeFilter.next(this.data);
  }

  doReset() {
    this.data = [...this._data];
    this.changeFilter.next(this.data);
  }

  doDisponibilidade() {
    // const filter = 'disponivel=false';
    console.log('disponiveis');
    console.log(this.data);
    console.log(this._data);
    if (this.disponivel) {
      this.data = this._data.filter(d => d['disponivel'] === false);
    } else {
      this.data = this._data.filter(d => d['disponivel'] === true);
    }

    this.change();
    this.disponivel = !this.disponivel;
  }

}
