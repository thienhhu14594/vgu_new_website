import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardsComponent } from './display-cards.component';

describe('DisplayCardsComponent', () => {
  let component: DisplayCardsComponent;
  let fixture: ComponentFixture<DisplayCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
