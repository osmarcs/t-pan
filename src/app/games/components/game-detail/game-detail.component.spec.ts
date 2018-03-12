import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailComponent } from './game-detail.component';
import { GameComponent } from '../game/game.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { of } from 'rxjs/observable/of';
import { GameServices } from '../../services/game.services';
import { MockGameServices } from '../../services/mock.game.service';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameDetailComponent,
        GameComponent,
        HeaderComponent
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {id: 123}
            }
          }
        },
        {
          provide: GameServices,
          useClass: MockGameServices
        },
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
