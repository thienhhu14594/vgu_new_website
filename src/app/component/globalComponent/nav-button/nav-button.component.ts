import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavButtonComponent {
  @Input() function: "About" | "Study" | "Research" | "Industrial" = "About";
  @Input() property: "Default" | "Hover" | "Selected" = "Default";
}