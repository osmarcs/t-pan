import { Component, OnInit } from '@angular/core';
import { GameModel } from '../../models/game.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GameServices } from '../../services/game.services';

@Component({
  selector: 'pan-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  private id: number;
  public game: GameModel;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameServices,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
   }

  ngOnInit() {
    this.loadGame();
  }


  loadGame() {
    this.gameService.getGame(this.id)
      .subscribe(
        game => {
          if (!game) {
            this.router.navigate(['']);
            return;
          }
          this.game = game;
        }
      );
  }

}
