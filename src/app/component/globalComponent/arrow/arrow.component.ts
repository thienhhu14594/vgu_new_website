import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowComponent {
  @Input() property: "Default" | "Hover" = "Default";
  @Input() direction: "right" | "left" | "rightBlack" | "leftBlack" = "right";
}
