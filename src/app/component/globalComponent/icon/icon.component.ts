import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() property: "Default" | "Hover" = "Default";
  @Input() icon: "facebook" | "linkedin" | "map" | "youtube" = "facebook";
}
