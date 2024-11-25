import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subnav.component.html',
  styleUrl: './subnav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavComponent {
  @Input() property: "Default" | "hover" = "Default";
  @Input() function: "quickAccess" | "language" | "search" | "login" | "home" =
    "quickAccess";
}
