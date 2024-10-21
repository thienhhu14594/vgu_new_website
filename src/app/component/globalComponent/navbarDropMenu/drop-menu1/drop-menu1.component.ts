import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { DropButtonComponent } from '../drop-button/drop-button.component';

@Component({
  selector: 'app-drop-menu1',
  standalone: true,
  imports: [CommonModule, DropButtonComponent],
  templateUrl: './drop-menu1.component.html',
  styleUrl: './drop-menu1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropMenu1Component {
  @Input() property: "about" | "SaA" | "research" | "industrial" = "about";

  @Output() onClickMenu1 = new EventEmitter<'organization' | 'level' | 'student'>();
  notifyClickedToNavbar(selected: 'organization' | 'level' | 'student') {
    this.onClickMenu1.emit(selected);
  }
}
