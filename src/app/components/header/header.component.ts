import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { HeaderCollapseComponent } from '../header-collapse/header-collapse.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCollapseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() isScrolled: boolean;
  collapsed: boolean = false;
}
