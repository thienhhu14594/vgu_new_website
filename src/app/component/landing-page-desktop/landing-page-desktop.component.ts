import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { SlideComponent } from '../globalComponent/slide/slide.component';
import { ClickOutsideDirective } from '../../click-outside.directive';
import { FooterComponent } from '../globalComponent/footer/footer.component';
import { ButtonsComponent } from '../globalComponent/buttons/buttons.component';
import { SlideNewsComponent } from '../globalComponent/slide-news/slide-news.component';
import { SlidePartnerComponent } from '../globalComponent/slide-partner/slide-partner.component';
import { NavNewsComponent } from '../globalComponent/nav-news/nav-news.component';
import { EventComponent } from '../globalComponent/event/event.component';
import { HeaderComponent } from '../globalComponent/header/header.component';

@Component({
  selector: 'app-landing-desktop',
  standalone: true,
  imports: [
    CommonModule,
    SlideComponent,
    ClickOutsideDirective,
    FooterComponent,
    ButtonsComponent,
    SlideNewsComponent,
    SlidePartnerComponent,
    NavNewsComponent,
    EventComponent,
    HeaderComponent
   ],
  templateUrl: './landing-page-desktop.component.html',
  styleUrl: './landing-page-desktop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LandingPageDesktopComponent implements AfterViewInit {
/////////////////////////////////////////////////////////////////
//Lazy variables name N:news/A:admission/R:research/
//U:upcoming event/P:university partner
  propertyN: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyA: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyR: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyU: 'Default' | 'Hover' | 'Selected' = 'Default';
  propertyP: 'Default' | 'Hover' | 'Selected' = 'Default';

  setNavNewsDefault() {
    this.propertyN = 'Default';
    this.propertyA = 'Default';
    this.propertyR = 'Default';
    this.propertyU = 'Default';
    this.propertyP = 'Default';
  }

  setPropertyN(status: 'Default' | 'Hover' | 'Selected') {
    if (this.propertyN == 'Selected') {return;}
    this.propertyN = status;
  }
  setPropertyA(status: 'Default' | 'Hover' | 'Selected') {
    if (this.propertyA == 'Selected') {return;}
    this.propertyA = status;
  }
  setPropertyR(status: 'Default' | 'Hover' | 'Selected') {
    if (this.propertyR == 'Selected') {return;}
    this.propertyR = status;
  }
  setPropertyU(status: 'Default' | 'Hover' | 'Selected') {
    if (this.propertyU == 'Selected') {return;}
    this.propertyU = status;
  }
  setPropertyP(status: 'Default' | 'Hover' | 'Selected') {
    if (this.propertyP == 'Selected') {return;}
    this.propertyP = status;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private cdr: ChangeDetectorRef
  ) { }
  @ViewChildren('intro, news, admission, research, upevent, partner') elements!: QueryList<ElementRef>; // Reference to all elements

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.className}`);
            this.setNavNewsDefault();
            switch (entry.target.className) {
              case 'news':
                this.propertyN = 'Selected';
                break;
              case 'admission':
                this.propertyA = 'Selected';
                break;
              case 'research':
                this.propertyR = 'Selected';
                break;
              case 'upevent':
                this.propertyU = 'Selected';
                break;
              case 'partner':
                this.propertyP = 'Selected';
                break;
              default: this.setNavNewsDefault(); break;
            }
            this.cdr.detectChanges();
          }
          else {
            // this.setNavNewsDefault();
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.23
      }
    );

      // Start observing all elements
      this.elements.forEach((el) => {
        observer.observe(el.nativeElement);
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
        this.elements.forEach(el => {
          observer.unobserve(el.nativeElement);
          observer.observe(el.nativeElement); // Re-observe elements on direction change
        });
      };
      
      window.addEventListener('scroll', handleScroll);

    } else {
      console.error('IntersectionObserver not supported or not in browser');
    }
  }

  

  scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth" });
  }
}