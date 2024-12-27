import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
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
  constructor(private colorService: DirectusService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit() {
    this.colorService.getThemeColors().subscribe((data) => {
      this.setCSSVariable('primary-color', data.data.primaryColor.color);
      this.setCSSVariable('primary-text', data.data.primaryText.color);
      this.setCSSVariable('primary-background', data.data.primaryBackground.color);
      this.setCSSVariable('primary-button', data.data.primaryButton.color);
      this.setCSSVariable('primary-button-hover', data.data.primaryButtonHover.color);
      this.setCSSVariable('secondary-color', data.data.secondaryColor.color);
      this.setCSSVariable('secondary-background', data.data.secondaryBackground.color);
      this.setCSSVariable('secondary-text', data.data.secondaryText.color);
      this.setCSSVariable('secondary-button', data.data.secondaryButton.color);
      this.setCSSVariable('secondary-button-hover', data.data.secondaryButtonHover.color);
    });
  }

  setCSSVariable(variableName: string, color: string) {
    // Set the dynamic value for the CSS variable on the root element
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.style.setProperty(`--${variableName}`, color);
    }
  }
}
