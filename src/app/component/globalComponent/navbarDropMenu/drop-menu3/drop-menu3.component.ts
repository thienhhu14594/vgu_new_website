import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DropButtonComponent } from '../drop-button/drop-button.component';

@Component({
  selector: 'app-drop-menu3',
  standalone: true,
  imports: [CommonModule, DropButtonComponent],
  templateUrl: './drop-menu3.component.html',
  styleUrl: './drop-menu3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropMenu3Component {
  @Input() property:
  | "faculty"
  | "default"
  | "bachelor"
  | "master"
  | "services" = "default";
}
