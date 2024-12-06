import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './global-components/footer/footer.component';
import { HeaderComponent } from './global-components/header/header.component';
import { DirectusService } from '../../directus.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vgu_new_website';
  isScrolled = false;

  @HostListener('scroll', ['$event'])
  onContentScroll(event: Event) {
    const scrollPosition = (event.target as HTMLElement).scrollTop;
    console.log('Content scrolled:', scrollPosition);
    this.isScrolled = scrollPosition > 120;
  }

  //color
  constructor(private colorService: DirectusService) {}

  ngOnInit() {
    this.colorService.getThemeColors().subscribe((data) => {
      this.setCSSVariable('primary-color', data.data.primaryColor.color);
      console.log(data.data.primaryColor.color);
    });
  }

  setCSSVariable(variableName: string, color: string) {
    // Set the dynamic value for the CSS variable on the root element
    document.documentElement.style.setProperty(`--${variableName}`, color);
  }
}
