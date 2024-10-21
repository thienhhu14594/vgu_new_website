import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent {
  @Input() content: string = "More VGU News";
  @Input() property: "Default" | "Hover" = "Default";
  @Input() button: "white" | "orangeBlue" | "orange" = "orangeBlue";
}
