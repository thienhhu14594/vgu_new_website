import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { HeaderCollapseComponent } from '../header-collapse/header-collapse.component';
import { DirectusService } from '../../../../directus.service';
import { ClickOutsideDirective } from '../../click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderCollapseComponent, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() isScrolled: boolean;
  collapsed: boolean = false;
  navButtons: any[] = [];
  navbarTree: any[] = [];
  lv1: any[] = [];
  openedId: any = null; // Null if ;

  constructor(public services: DirectusService) {}
  ngOnInit(): void {
    this.services.getNavButtons().subscribe((data) => {
      const flatData = data.data;
      this.navbarTree = this.buildTree(flatData);
    });
  }

  /**
   * Builds a tree structure from flat data.
   */
  private buildTree(flatData: any[]): any[] {
    const idMap = new Map(
      flatData.map((item) => [item.id, { ...item, children: [] }])
    );
    const tree: any[] = [];

    idMap.forEach((item) => {
      if (item.parent_id) {
        idMap.get(item.parent_id)?.children.push(item);
      } else {
        tree.push(item);
      }
    });

    return tree;
  }
}
