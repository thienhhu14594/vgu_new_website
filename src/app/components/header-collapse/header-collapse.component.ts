import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-collapse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-collapse.component.html',
  styleUrl: './header-collapse.component.css',
})
export class HeaderCollapseComponent {
  @Input() lv1: any[] = [];
  lv2: any[] | null = null; // Null if no second level selected
  lv3: any[] | null = null; // Null if no third level selected
  openedId2: any = null;
  openedId3: any = null;
}
