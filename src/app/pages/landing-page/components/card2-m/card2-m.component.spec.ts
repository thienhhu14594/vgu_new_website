import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2MComponent } from './card2-m.component';

describe('Card2MComponent', () => {
  let component: Card2MComponent;
  let fixture: ComponentFixture<Card2MComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card2MComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card2MComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
