import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageDesktopComponent } from './landing-page-desktop.component';

describe('LandingPageDesktopComponent', () => {
  let component: LandingPageDesktopComponent;
  let fixture: ComponentFixture<LandingPageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
