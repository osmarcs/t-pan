import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pan-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() search = new EventEmitter();

  constructor() { }

  onKeyUp($event) {
    this.search.emit($event.target.value);
  }
}
