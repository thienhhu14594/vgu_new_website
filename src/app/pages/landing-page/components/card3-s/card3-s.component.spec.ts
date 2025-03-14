import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3SComponent } from './card3-s.component';

describe('Card3SComponent', () => {
  let component: Card3SComponent;
  let fixture: ComponentFixture<Card3SComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card3SComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card3SComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
