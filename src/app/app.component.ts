import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

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
}
