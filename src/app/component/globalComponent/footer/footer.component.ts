import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() property: "mobile" | "desktop" = "desktop";

  propertymap: 'Default' | 'Hover' = 'Default';
  propertylinkedin: 'Default' | 'Hover' = 'Default';
  propertyyoutube: 'Default' | 'Hover' = 'Default';
  propertyfacebook: 'Default' | 'Hover' = 'Default';

  setPropertyfacebook(status: 'Default' | 'Hover') {
    this.propertyfacebook = status;
  }
  setPropertyyoutube(status: 'Default' | 'Hover') {
    this.propertyyoutube = status;
  }
  setPropertymap(status: 'Default' | 'Hover') {
    this.propertymap = status;
  }
  setPropertylinkedin(status: 'Default' | 'Hover') {
    this.propertylinkedin = status;
  }
}
