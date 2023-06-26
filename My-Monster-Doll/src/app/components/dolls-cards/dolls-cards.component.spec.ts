import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollsCardsComponent } from './dolls-cards.component';

describe('DollsCardsComponent', () => {
  let component: DollsCardsComponent;
  let fixture: ComponentFixture<DollsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
