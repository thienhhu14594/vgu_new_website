import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerComponentComponent } from './hamburger-component.component';

describe('HamburgerComponentComponent', () => {
  let component: HamburgerComponentComponent;
  let fixture: ComponentFixture<HamburgerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburgerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
