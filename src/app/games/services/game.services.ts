import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';
import { GameModel } from '../models/game.model';
import { GameStore } from '../store/game.store';
import { BreakpointsHelper } from '../helpers/breakpoints.helper';

@Injectable()
export class GameServices {
  public limit = 100;
  public offset = 0;
  private params;

  public breakpoints = {
    'mobile':  25,
    'tablet': 50,
    'desktop': 100
  };

  constructor(
    private http: HttpClient,
    private gameStore: GameStore,
    private bh: BreakpointsHelper
  ) {
    this.limit = this.breakpoints[bh.device];
   }

  public getGame(id): Observable<GameModel> {
    const foundGame = this.gameStore.games.find(game => game.id === parseInt(id, 10));
    return of(foundGame);
  }

  public getGames(): Observable<GameModel[]> {
    const params = {
      limit: this.limit,
      offset: this.offset
    };
    return this.callApi(params)
      .map(games => this.gameStore.mapGames(games));
  }

  public loadMore(): Observable<GameModel[]> {
    this.offset += this.limit;
    return this.getGames();
  }

  public isCompleteList(): boolean {
    return this.gameStore.totalGames === this.gameStore.games.length;
  }

  public getGameList() {
    return this.gameStore.games;
  }

  private callApi(params: any): Observable<any> {
    return this.http.get(environment.apiEndPoint, {
      headers: new HttpHeaders().set('Client-ID', environment.apiClientId),
      params
    });
  }

}
