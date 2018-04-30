import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeComponent } from './pokemon-home.component';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
