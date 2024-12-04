import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DropMenu1Component } from "../navbarDropMenu/drop-menu1/drop-menu1.component";
import { DropMenu2Component } from "../navbarDropMenu/drop-menu2/drop-menu2.component";
import { DropMenu3Component } from "../navbarDropMenu/drop-menu3/drop-menu3.component";
import { NavButtonComponent } from '../nav-button/nav-button.component';
import { ClickOutsideDirective } from '../../../click-outside.directive';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule,
    DropMenu1Component,
    DropMenu2Component,
    DropMenu3Component,
    NavButtonComponent,
    ClickOutsideDirective
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponentComponent {
  @Input() collapse: "close" | "open" = "close";

  clickOutsideButton = false;
  clickOutsidePanel = false;
  c = 0;

  currentSelected: 'About' | 'Study' | 'Research' | 'Industrial' | 'none' = 'none';
  propertyAbout: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyStudy: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyResearch: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyIndustrial: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyDropmenu1: 'about' | 'SaA' | 'research' | 'industrial' = 'about';
  propertyDropmenu2: 'default' | 'organization' | 'level' | 'student' = 'default';
  propertyDropmenu3: 'default' | 'faculty' | 'bachelor' | 'master' | 'services' = 'default';

  setAllDefault() {
    this.propertyAbout = 'Default';
    this.propertyIndustrial = 'Default';
    this.propertyResearch = 'Default';
    this.propertyStudy = 'Default';
    if (this.currentSelected == 'About') {
      this.propertyAbout = 'Selected';
    }
    if (this.currentSelected == 'Study') {
      this.propertyStudy = 'Selected';
    }
    if (this.currentSelected == 'Research') {
      this.propertyResearch = 'Selected';
    }
    if (this.currentSelected == 'Industrial') {
      this.propertyIndustrial = 'Selected';
    }
  }

  openDropmenu(menu: 'about' | 'SaA' | 'research' | 'industrial') {
    this.collapse = 'open';
    this.propertyDropmenu1 = menu;
    this.propertyDropmenu2 = 'default';
    this.propertyDropmenu3 = 'default';
  }

  setPropertyAbout(status: 'Default' | 'Hover' | 'Selected') {
    if (status == 'Selected') {
      this.setAllDefault();
      this.openDropmenu('about');
    }
    if (this.propertyAbout == 'Selected') {
      return;
    }
    this.propertyAbout = status;
  }
  setPropertyStudy(status: 'Default' | 'Hover' | 'Selected') {
    if (status == 'Selected') {
      this.setAllDefault();
      this.openDropmenu('SaA');
    }
    if (this.propertyStudy == 'Selected') {
      return;
    }
    this.propertyStudy = status;
  }
  setPropertyResearch(status: 'Default' | 'Hover' | 'Selected') {
    if (status == 'Selected') {
      this.setAllDefault();
      this.openDropmenu('research');
    }
    if (this.propertyResearch == 'Selected') {
      return;
    }
    this.propertyResearch = status;
  }
  setPropertyIndustrial(status: 'Default' | 'Hover' | 'Selected') {
    if (status == 'Selected') {
      this.setAllDefault();
      this.openDropmenu('industrial');
    }
    if (this.propertyIndustrial == 'Selected') {
      return;
    }
    this.propertyIndustrial = status;
  }

  clickedOutsideDropdownMenu(button = this.clickOutsideButton, panel = this.clickOutsidePanel) {
    this.clickOutsidePanel = panel;
    this.clickOutsideButton = button;
    if (this.clickOutsideButton == true
        && this.clickOutsidePanel == true) {
          this.collapse = 'close';
          this.setAllDefault();
        }
  }

  getClickedFromMenu1(selected: 'organization' | 'level' | 'student') {
    if(selected) {
      this.propertyDropmenu2 = selected;
      this.propertyDropmenu3 = 'default';
    }
  }
  getClickedFromMenu2(selected: 'faculty' | 'bachelor' | 'master' | 'services') {
    if(selected) {
      this.propertyDropmenu3 = selected;
    }
  }

  
  
}
