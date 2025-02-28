import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialBoardComponent } from './presidential-board.component';

describe('PresidentialBoardComponent', () => {
  let component: PresidentialBoardComponent;
  let fixture: ComponentFixture<PresidentialBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentialBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentialBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
