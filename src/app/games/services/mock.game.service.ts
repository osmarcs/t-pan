import { of } from 'rxjs/observable/of';
import { GameModel } from '../models/game.model';
export class MockGameServices {

  getGame(id) {
    return of(<GameModel>{
      name: 'Jogo',
      box: {
        large: null
      }
    });
  }

  getGameList() {
    return of([]);
  }

  getGames() {
    return of([]);
  }
}
