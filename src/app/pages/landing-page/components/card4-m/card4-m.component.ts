import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card4-m',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card4-m.component.html',
  styleUrl: './card4-m.component.css'
})
export class Card4MComponent {
  @Input() image: string;
  @Input() title: string;
}
