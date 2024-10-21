import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenu2Component } from './drop-menu2.component';

describe('DropMenu2Component', () => {
  let component: DropMenu2Component;
  let fixture: ComponentFixture<DropMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropMenu2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
