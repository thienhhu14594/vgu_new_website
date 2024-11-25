import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNewsComponent } from './slide-news.component';

describe('SlideNewsComponent', () => {
  let component: SlideNewsComponent;
  let fixture: ComponentFixture<SlideNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
