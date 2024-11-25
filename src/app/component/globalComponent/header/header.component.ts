import { Component } from '@angular/core';
import { SubnavbarComponent } from '../subnavbar/subnavbar.component';
import { NavbarComponentComponent } from "../navbar-component/navbar-component.component";
import { LogoComponent } from "../logoComponent/logo/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SubnavbarComponent, NavbarComponentComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
