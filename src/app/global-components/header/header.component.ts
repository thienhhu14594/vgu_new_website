import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router, NavigationEnd } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { HeaderCollapseComponent } from '../header-collapse/header-collapse.component';
import { DirectusService } from '../../../../directus.service';
import { ClickOutsideDirective } from '../../click-outside.directive';
import { HeaderMobileComponent } from '../../global-components-mobile/header-mobile/header-mobile.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HeaderCollapseComponent,
    ClickOutsideDirective,
    HeaderMobileComponent,
    RouterModule,
    RouterLink,
  ],
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
  openedId: any = null;

  constructor(
    public services: DirectusService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.services.getNavButtons().subscribe((data) => {
      this.navButtons = data.data;
      this.navbarTree = this.buildTree(this.navButtons);
    });

    // Subscribe to router events to detect navigation changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Reset collapsed state when navigation occurs
      this.collapsed = false;
      this.openedId = null;
      
      // Since you're using OnPush change detection, you need to
      // manually trigger change detection after updating properties
      this.cdr.markForCheck();
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