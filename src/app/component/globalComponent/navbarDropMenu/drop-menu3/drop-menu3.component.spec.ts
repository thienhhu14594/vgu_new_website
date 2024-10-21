import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenu3Component } from './drop-menu3.component';

describe('DropMenu3Component', () => {
  let component: DropMenu3Component;
  let fixture: ComponentFixture<DropMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropMenu3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
