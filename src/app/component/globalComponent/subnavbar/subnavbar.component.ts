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
  propertyquickAccess: 'Default' | 'hover' = 'Default';
  setPropertyquickAccess(status: 'Default' | 'hover'){
    this.propertyquickAccess = status;
  }
  propertylanguage: 'Default' | 'hover' = 'Default';
  setPropertylanguage(status: 'Default' | 'hover' = 'Default'){
    this.propertylanguage = status;
  }
  propertylogin: 'Default' | 'hover' = 'Default';
  setPropertylogin(status: 'Default' | 'hover' = 'Default'){
    this.propertylogin = status;
  }
  propertysearch: 'Default' | 'hover' = 'Default';
  setPropertysearch(status: 'Default' | 'hover' = 'Default'){
    this.propertysearch = status;
  }
}
