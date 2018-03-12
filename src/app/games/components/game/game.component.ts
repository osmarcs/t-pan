import { Component, OnInit, Input } from '@angular/core';
import { GameModel } from '../../models/game.model';

@Component({
  selector: 'pan-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: GameModel;

  constructor() {}

  ngOnInit() {
  }
}
