import { GameModel } from '../models/game.model';

export class GameStore {
  games: GameModel[] = [];
  totalGames = 0;

  mapGames(games: any): GameModel[] {
    const collGames = games.top.map((game) => {
      game.game = game.game || {};
      return <GameModel>{
        id: game.game._id,
        name: game.game.name,
        box: { ...game.game.box },
        channels: game.channels,
        popularity: game.game.popularity,
        viewers: game.viewers
      };
    });

    this.games = this.games.concat(collGames);
    this.totalGames = games._total;

    return this.games;
  }
}
