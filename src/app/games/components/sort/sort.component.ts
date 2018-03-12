import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortByModel } from '../../models/sortBy.model';

@Component({
  selector: 'pan-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() options;
  @Output() sort = new EventEmitter();

  public sortBy: SortByModel;
  private nextDirection = {
    none: 'DESC',
    DESC: 'ASC',
    ASC: 'none'
  };
  constructor() { }

  ngOnInit() {
  }

  setSortBy(value) {
    if (!this.sortBy || this.sortBy.field !== value) {
      this.sortBy = {field: value,  direction: 'none'};
    }

    this.sortBy.direction = this.discoveryDirection(this.sortBy.direction);
    this.sort.emit(this.sortBy);
  }

  discoveryDirection(current?: string): string {
    const directionCurrent = current || 'none';
    return this.nextDirection[directionCurrent];
  }
}
