import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-news.component.html',
  styleUrl: './nav-news.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavNewsComponent {
  @Input() function: string;
  @Input() property: "Default" | "Hover" | "Selected" = "Default";
}
