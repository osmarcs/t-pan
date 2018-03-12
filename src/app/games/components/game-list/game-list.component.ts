import { Component, OnInit } from '@angular/core';

import { GameServices } from '../../services/game.services';

import { GameModel } from '../../models/game.model';
import { SortByModel } from '../../models/sortBy.model';
import { FilterByModel } from '../../models/filterBy.model';

import { doFilter } from '../../helpers/filter.helper';
import { doSort } from '../../helpers/sort.helper';

@Component({
  selector: 'pan-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public games: GameModel[] = [];
  public filterBy: FilterByModel;
  public sortBy: SortByModel;
  public titlePage = 'Home - Game List';

  public sortOptions = [
    { label: 'Popularidade', value: 'popularity' },
    { label: 'Visualizações', value: 'viewers' }
  ];

  public loadingGames = false;

  constructor(private gameService: GameServices) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    const gamesList = this.gameService.getGameList();
    if (gamesList.length) {
      this.games = gamesList;
      return;
    }
    this.loadingGames = true;
    this.gameService.getGames()
      .subscribe(
        games =>  this.games = games,
        error => { console.error('api:', error); },
        () => this.loadingGames = false
      );
  }

  loadMore() {
    if (this.gameService.isCompleteList() || this.loadingGames) {
      return;
    }
    this.loadingGames = true;
    this.gameService.loadMore()
      .subscribe(
        games => this.games = games,
        error => { console.error('api:', error); },
        () => this.loadingGames = false
      );
  }

  onSearch($event) {
    this.filterBy = { field: 'name', value: $event};
  }

  onSort(sortBy: SortByModel) {
    this.sortBy = sortBy;
  }

  showFilteredSorted(): GameModel[] {
    const games = [...this.games];
    const filterGames = doFilter(games, this.filterBy);
    doSort(filterGames, this.sortBy);
    return filterGames;
  }

}
