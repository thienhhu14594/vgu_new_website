import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3MComponent } from './card3-m.component';

describe('Card3MComponent', () => {
  let component: Card3MComponent;
  let fixture: ComponentFixture<Card3MComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card3MComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card3MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
