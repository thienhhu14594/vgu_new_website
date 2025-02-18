import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../global-components/buttons/primary-button/primary-button.component';
import { Card3MComponent } from '../landing-page/components/card3-m/card3-m.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-study-programs',
  standalone: true,
  imports: [PrimaryButtonComponent, Card3MComponent, CommonModule],
  templateUrl: './study-programs.component.html',
  styleUrl: './study-programs.component.css',
})
export class StudyProgramsComponent {
  tests: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
