import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUnitComponent } from './department-unit.component';

describe('PresidentialBoardComponent', () => {
  let component: DepartmentUnitComponent;
  let fixture: ComponentFixture<DepartmentUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentUnitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
