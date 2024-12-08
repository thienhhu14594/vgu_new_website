import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1SComponent } from './card1-s.component';

describe('Card1SComponent', () => {
  let component: Card1SComponent;
  let fixture: ComponentFixture<Card1SComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1SComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1SComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
