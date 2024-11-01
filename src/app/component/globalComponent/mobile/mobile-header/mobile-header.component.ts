import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HamburgerComponentComponent } from '../hamburger-component/hamburger-component.component';
import { LogoComponent } from "../../logoComponent/logo/logo.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { SubnavComponent } from "../../subnav/subnav.component";

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    CommonModule,
    HamburgerComponentComponent,
    LogoComponent,
    SearchBarComponent,
    SubnavComponent
],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileHeaderComponent {
  @Input() menu: 'close' | 'open' = 'close';
  changeState() {
    if (this.menu == 'close') {this.menu = 'close';}
    else {this.menu = 'open'}
  }
}
