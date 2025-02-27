import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaThucVienComponent } from './ha-thuc-vien.component';

describe('HaThucVienComponent', () => {
  let component: HaThucVienComponent;
  let fixture: ComponentFixture<HaThucVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaThucVienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaThucVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
