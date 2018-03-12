import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'pan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() visibleBackButton = false;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
