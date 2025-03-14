import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4MComponent } from './card4-m.component';

describe('Card4MComponent', () => {
  let component: Card4MComponent;
  let fixture: ComponentFixture<Card4MComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card4MComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card4MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
