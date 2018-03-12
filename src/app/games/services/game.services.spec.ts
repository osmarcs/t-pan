import { TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GameServices } from './game.services';
import { GameStore } from '../store/game.store';
import { BreakpointsHelper } from '../helpers/breakpoints.helper';
import { environment } from '../../../environments/environment.prod';
import { HttpParams, } from '@angular/common/http';

describe('GameServices', () => {

  const mockData = require('../../../mocks/games.json');

  let injector: TestBed;
  let service: GameServices;
  let gameStore: GameStore;
  let bh: BreakpointsHelper;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameServices,
        GameStore,
        BreakpointsHelper,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service  = injector.get(GameServices);
    gameStore = injector.get(GameStore);
    bh = injector.get(BreakpointsHelper);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Testin getGames method:', () => {
    it('should get games from api', () => {
      const dummyParams = `limit=${service.limit}&offset=0`;
      const mock = {top: []};
      const spymapGames = spyOn(gameStore, 'mapGames').and.callThrough();

      service.getGames().subscribe(games =>  {
        expect(games.length).toEqual(mockData.top.length);
        expect(spymapGames).toHaveBeenCalled();
      });

      const reqMock = httpMock.expectOne(
        req => req.url === environment.apiEndPoint
      );
      expect(reqMock.request.method).toBe('GET');
      expect(reqMock.request.params.toString()).toEqual(dummyParams);

      reqMock.flush(mockData);
    });
  });

  describe('Testing loadMore method:', () => {
    it('should get increase offset', () => {
      const limit = service.breakpoints[bh.device];
      const offset = limit * 3;
      const spyGetGames = spyOn(service, 'getGames');
      service.loadMore();
      service.loadMore();
      service.loadMore();
      expect(service.offset).toBe(offset);
      expect(spyGetGames).toHaveBeenCalled();
    });
  });

  describe('Testing isCompleteList method:', () => {
    it('should return false to totalGames is different games.length', () => {
      gameStore.games = <any>[{}, {}];
      gameStore.totalGames = 10;
      expect(service.isCompleteList()).toBeFalsy();
    });

    it('should return true when set totalGames is equal games.length', () => {
      gameStore.games = <any>[{}, {}];
      gameStore.totalGames = 2;
      expect(service.isCompleteList()).toBeTruthy();
    });
  });

  describe('Testing getGameList method:', () => {
   it('should return the same value of gameStore.games', () => {
    gameStore.games = <any>[{name: 'XPTO'}, {name: 'HORIZON'}];
    expect(service.getGameList()).toBe(gameStore.games);
   });
  });


  describe('Testing getGame method:', () => {
    it('should return undefined to id that does not exist', () => {
     gameStore.games = [];
     service.getGame(123).subscribe(
       game => {
         expect(game).toBeUndefined();
       }
     );
    });

    it('should return game for id that exists', () => {
      gameStore.games = <any>[{id: 123, name: 'XPTO'}];
      service.getGame(123).subscribe(
        game => {
          expect(game).toBe(gameStore.games[0]);
        }
      );
    });

   });
});
