import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestframeComponent } from './testframe.component';

describe('TestframeComponent', () => {
  let component: TestframeComponent;
  let fixture: ComponentFixture<TestframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
