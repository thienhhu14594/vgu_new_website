import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SubnavComponent } from "../subnav/subnav.component";

@Component({
  selector: 'app-subnavbar',
  standalone: true,
  imports: [CommonModule, SubnavComponent],
  templateUrl: './subnavbar.component.html',
  styleUrl: './subnavbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubnavbarComponent {
  @Input() property: "Default" | "disappear" = "Default";
}
