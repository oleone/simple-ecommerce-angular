import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() data: any[];
  @Output() changeFilter = new EventEmitter<any>();

  _data: any[];

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      this._data = [...this.data];
    }
  }

  change() {
    this.changeFilter.next(this.data);
  }

  doReset() {
    this.data = [...this._data];
    this.changeFilter.next(this.data);
  }

  doDisponiveis() {
    const filter = 'disponivel=false';
  }

  doIndisponiveis() {

  }

}
