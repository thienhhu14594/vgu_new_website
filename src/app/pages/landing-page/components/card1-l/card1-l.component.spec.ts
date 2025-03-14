import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1LComponent } from './card1-l.component';

describe('Card1LComponent', () => {
  let component: Card1LComponent;
  let fixture: ComponentFixture<Card1LComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1LComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1LComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
