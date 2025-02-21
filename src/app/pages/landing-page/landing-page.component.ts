import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectusService } from '../../../../directus.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PartnersComponent } from './components/partners/partners.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    DisplayCardsComponent,
    HeroSectionComponent,
    PartnersComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  sections: any[] = [];
  selectedSection: string;
  private dataSet = new Map<string, any[]>();
  constructor(
    public directus: DirectusService,
    @Inject(PLATFORM_ID) private platformId: any,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.directus.getLandingPage().subscribe((data) => {
      this.sections = data.data;
      console.log(this.sections[0].source);
    });
  }

  ngAfterViewInit(): void {
    let observer: any;
    const sectionNames = this.sections.map((section) => section.section_name);
    sectionNames.push('Partners');
    console.log(sectionNames);
    if (
      isPlatformBrowser(this.platformId) &&
      'IntersectionObserver' in window
    ) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(`${entry.target.id}`);
              this.selectedSection = entry.target.id;
              this.cdr.detectChanges();
            } else {
              // this.setNavNewsDefault();
            }
          });
        },
        {
          root: null,
          rootMargin: '100px 0px 0px 0px',
          threshold: [0.4],
        }
      );

      // Start observing all elements
      sectionNames.forEach((el) => {
        const element = document.getElementById(`${el}`);
        if (element) {
          observer.observe(element);
        }
      });

      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const currentScrollY = window.scrollY; // Get the current scroll position

        // Check if the scroll direction has changed
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          console.log('Scrolling down');
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          console.log('Scrolling up');
        }

        // If the direction changes, reset the observer
        if (currentScrollY !== lastScrollY) {
          resetObserverOnDirectionChange();
          lastScrollY = currentScrollY; // Update last scroll position
        }
      };

      const resetObserverOnDirectionChange = () => {
        sectionNames.forEach((el) => {
          observer.unobserve(el.nativeElement);
          observer.observe(el.nativeElement); // Re-observe elements on direction change
        });
      };

      window.addEventListener('scroll', handleScroll);
    }
    // else {
    //   console.error('IntersectionObserver not supported or not in browser');
    // }
  }

  getSource(name: string): any[] {
    if (this.dataSet.has(name)) {
      return this.dataSet.get(name);
    } else {
      this.directus.getData(name).subscribe((data) => {
        this.dataSet.set(name, data.data);
      });

      return this.dataSet.get(name);
    }
  }

  scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Element with ID "${el}" not found.`);
    }
  }
}
