import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestButtonComponent {
  @Input() property: "Default" | "hover" = "Default";
  @Input() function: "test" | "test2" = "test";
}
