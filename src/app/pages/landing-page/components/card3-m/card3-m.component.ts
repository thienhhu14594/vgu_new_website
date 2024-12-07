import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card3-m',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card3-m.component.html',
  styleUrl: './card3-m.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card3MComponent {
  @Input() subcontent: string;
  @Input() title: string;
  @Input() content: string;
  @Input() image: string;
}
