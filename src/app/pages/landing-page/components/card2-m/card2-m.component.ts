import { Component, Input } from '@angular/core';
import { ArrowButtonComponent } from "../../../../global-components/buttons/arrow-button/arrow-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card2-m',
  standalone: true,
  imports: [ArrowButtonComponent, CommonModule],
  templateUrl: './card2-m.component.html',
  styleUrl: './card2-m.component.css'
})
export class Card2MComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;
}
