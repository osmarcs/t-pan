import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameListComponent } from './game-list.component';
import { HeaderComponent } from '../header/header.component';
import { GameItemComponent } from '../game-item/game-item.component';
import { SearchComponent } from '../search/search.component';
import { GameServices } from '../../services/game.services';
import { MockGameServices } from '../../services/mock.game.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoaderComponent } from '../loader/loader.component';
import { SortComponent } from '../sort/sort.component';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameListComponent,
        HeaderComponent,
        GameItemComponent,
        SearchComponent,
        SortComponent,
        LoaderComponent
      ],
      providers: [
        {
          provide: GameServices,
          useClass: MockGameServices
        }
      ],
      imports: [
        InfiniteScrollModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
