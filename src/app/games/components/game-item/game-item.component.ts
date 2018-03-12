import { Component, OnInit, Input } from '@angular/core';
import { GameModel } from '../../models/game.model';

@Component({
  selector: 'pan-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() game: GameModel;
  constructor() { }

  ngOnInit() {
  }

}
