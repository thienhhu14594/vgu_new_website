import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card1-s',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card1-s.component.html',
  styleUrl: './card1-s.component.css'
})
export class Card1SComponent {
  @Input() subcontent1: string;
  @Input() subcontent2: string;
  @Input() title: string;
  @Input() content: string;
}
