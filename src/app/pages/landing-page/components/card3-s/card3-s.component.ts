import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card3-s',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card3-s.component.html',
  styleUrl: './card3-s.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card3SComponent {
  @Input() title: string;
  @Input() content: string;
}
