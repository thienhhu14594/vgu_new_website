import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenu1Component } from './drop-menu1.component';

describe('DropMenu1Component', () => {
  let component: DropMenu1Component;
  let fixture: ComponentFixture<DropMenu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropMenu1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
