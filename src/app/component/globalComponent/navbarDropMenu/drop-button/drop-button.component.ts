import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-button.component.html',
  styleUrl: './drop-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropButtonComponent {
  @Input() property: "Default" | "Hover" = "Default";
  @Input() function: string;
}
