import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArrowButtonComponent } from '../../../../global-components/buttons/arrow-button/arrow-button.component';

@Component({
  selector: 'app-card1-l',
  standalone: true,
  imports: [CommonModule, ArrowButtonComponent],
  templateUrl: './card1-l.component.html',
  styleUrl: './card1-l.component.css',
})
export class Card1LComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;
  @Input() reverse: boolean = false;
  htv = 'Dr. Ha Thuc Vien';
}
