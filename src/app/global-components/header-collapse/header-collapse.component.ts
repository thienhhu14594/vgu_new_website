import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-collapse',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-collapse.component.html',
  styleUrl: './header-collapse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderCollapseComponent implements OnChanges {
  @Input() lv1: any[] = [];
  lv2: any[] | null = null; // Null if no second level selected
  lv3: any[] | null = null; // Null if no third level selected
  parentName: any;
  openedId2: any = null;
  openedId3: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lv1']) {
      this.lv2 = null;
      this.lv3 = null;
      this.openedId2 = null;
      this.openedId3 = null;
    }
  }
}
