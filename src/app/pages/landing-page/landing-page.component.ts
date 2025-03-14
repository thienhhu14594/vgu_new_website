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
import { Subscription } from 'rxjs';

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
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  sections: any[] = [];
  selectedSection: string;
  private dataSet = new Map<string, any[]>();
  private observer: IntersectionObserver | null = null;
  private dataSubscription: Subscription | null = null;
  private scrollHandler: (() => void) | null = null;

  constructor(
    public directus: DirectusService,
    @Inject(PLATFORM_ID) private platformId: any,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('LandingPage ngOnInit running');
    this.loadData();
  }

  private loadData(): void {
    // Clear any existing subscription
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    // Get fresh data
    this.dataSubscription = this.directus.getLandingPage().subscribe((data) => {
      console.log('Data loaded in ngOnInit');
      this.sections = data.data;

      // Setup the observer only after data is loaded
      if (isPlatformBrowser(this.platformId)) {
        // Run after the view has been initialized
        setTimeout(() => {
          this.setupIntersectionObserver();
        });
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('LandingPage ngAfterViewInit running');
    // Don't do anything here that depends on the sections data
    // The setupIntersectionObserver will be called after data loads
  }

  private setupIntersectionObserver(): void {
    console.log('Setting up IntersectionObserver');

    // Clean up existing observer if any
    this.cleanupObserver();

    if (
      !isPlatformBrowser(this.platformId) ||
      !('IntersectionObserver' in window)
    ) {
      console.log('IntersectionObserver not supported or not in browser');
      return;
    }

    if (!this.sections || this.sections.length === 0) {
      console.log('Sections data not yet available');
      return;
    }

    const sectionNames = this.sections.map((section) => section.section_name);
    sectionNames.push('Partners');
    console.log('Setting up observer for sections:', sectionNames);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is intersecting`);
            this.selectedSection = entry.target.id;
            this.cdr.detectChanges();
          }
        });
      },
      {
        root: null,
        rootMargin: '100px 0px 0px 0px',
        threshold: [0.15],
      }
    );

    // Start observing all elements
    sectionNames.forEach((el) => {
      const element = document.getElementById(`${el}`);
      if (element) {
        this.observer!.observe(element);
        console.log(`Now observing element with ID: ${el}`);
      } else {
        console.warn(`Element with ID "${el}" not found.`);
      }
    });

    // Set up scroll handler
    let lastScrollY = window.scrollY;

    this.scrollHandler = () => {
      const currentScrollY = window.scrollY;

      // Check if the scroll direction has changed
      if (currentScrollY > lastScrollY) {
        console.log('Scrolling down');
      } else if (currentScrollY < lastScrollY) {
        console.log('Scrolling up');
      }

      // If the direction changes, reset the observer
      if (currentScrollY !== lastScrollY) {
        this.resetObserverOnDirectionChange(sectionNames);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', this.scrollHandler);
  }

  private resetObserverOnDirectionChange(sectionNames: string[]): void {
    if (!this.observer) return;

    sectionNames.forEach((el) => {
      const element = document.getElementById(`${el}`);
      if (element) {
        this.observer!.unobserve(element);
        this.observer!.observe(element);
      }
    });
  }

  private cleanupObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.scrollHandler = null;
    }
  }

  getSource(name: string): any[] {
    if (this.dataSet.has(name)) {
      return this.dataSet.get(name)!;
    } else {
      this.directus.getData(name).subscribe((data) => {
        this.dataSet.set(name, data.data);
      });

      return this.dataSet.get(name) || [];
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

  ngOnDestroy(): void {
    console.log('LandingPage ngOnDestroy running');

    // Clean up all subscriptions and observers
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    this.cleanupObserver();
  }
}
