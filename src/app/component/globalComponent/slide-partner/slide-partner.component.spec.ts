import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePartnerComponent } from './slide-partner.component';

describe('SlidePartnerComponent', () => {
  let component: SlidePartnerComponent;
  let fixture: ComponentFixture<SlidePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
