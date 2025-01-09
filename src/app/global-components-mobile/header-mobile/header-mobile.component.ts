import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HamburgerContentComponent } from '../hamburger-content/hamburger-content.component';
import { SearchBarComponent } from '../../global-components/search-bar/search-bar.component';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, HamburgerContentComponent, SearchBarComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css'
})
export class HeaderMobileComponent {
  menu: 'close' | 'open' = 'close';
  @Input() navTree: any[] = [];
  changeState() {
    if (this.menu == 'close') {this.menu = 'close';}
    else {this.menu = 'open'}
  }
}
