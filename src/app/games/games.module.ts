import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { GamesRoutingModule } from './game.routing';

import { GameServices } from './services/game.services';
import { GameStore } from './store/game.store';
import { BreakpointsHelper } from './helpers/breakpoints.helper';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameComponent } from './components/game/game.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    GamesRoutingModule
  ],
  providers: [
    GameServices,
    GameStore,
    BreakpointsHelper
  ],
  declarations: [
    GameListComponent,
    GameItemComponent,
    GameComponent,
    SearchComponent,
    SortComponent,
    LoaderComponent,
    HeaderComponent,
    GameDetailComponent
  ]
})
export class GamesModule { }
