import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileEventComponent } from './mobile-event.component';

describe('MobileEventComponent', () => {
  let component: MobileEventComponent;
  let fixture: ComponentFixture<MobileEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
