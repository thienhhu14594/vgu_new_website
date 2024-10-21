import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DropButtonComponent } from '../drop-button/drop-button.component';

@Component({
  selector: 'app-drop-menu2',
  standalone: true,
  imports: [CommonModule, DropButtonComponent],
  templateUrl: './drop-menu2.component.html',
  styleUrl: './drop-menu2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropMenu2Component {
  @Input() property: "organization" | "level" | "student" | "default" =
  "default";

  @Output() onClickMenu2 = new EventEmitter<'bachelor' | 'master' | 'services' | 'faculty'>();
  notifyClickedToNavbar(selected: 'bachelor' | 'master' | 'services' | 'faculty') {
    this.onClickMenu2.emit(selected);
  }
}
