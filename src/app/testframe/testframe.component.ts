import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { TestComponent } from "../test/test.component";
import { CommonModule } from '@angular/common';
import { SubnavComponent } from "../component/globalComponent/subnav/subnav.component";
import { SubnavbarComponent } from "../component/globalComponent/subnavbar/subnavbar.component";
import { SlideComponent } from "../component/globalComponent/slide/slide.component";
import { ArrowComponent } from '../component/globalComponent/arrow/arrow.component';
import { LogoComponent } from '../component/globalComponent/logoComponent/logo/logo.component';
import { NavbarComponentComponent } from '../component/globalComponent/navbar-component/navbar-component.component';
import { NavButtonComponent } from '../component/globalComponent/nav-button/nav-button.component';
import { ClickOutsideDirective } from '../click-outside.directive';
import { DropMenu1Component } from '../component/globalComponent/navbarDropMenu/drop-menu1/drop-menu1.component';
import { DropMenu2Component } from '../component/globalComponent/navbarDropMenu/drop-menu2/drop-menu2.component';
import { DropMenu3Component } from '../component/globalComponent/navbarDropMenu/drop-menu3/drop-menu3.component';
import { FooterComponent } from '../component/globalComponent/footer/footer.component';
import { IconComponent } from '../component/globalComponent/icon/icon.component';
import { ButtonsComponent } from '../component/globalComponent/buttons/buttons.component';
import { SlideNewsComponent } from '../component/globalComponent/slide-news/slide-news.component';
import { PostsComponent } from '../component/posts/posts.component';
import { SlidePartnerComponent } from '../component/globalComponent/slide-partner/slide-partner.component';
import { NavNewsComponent } from '../component/globalComponent/nav-news/nav-news.component';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { EventComponent } from '../component/globalComponent/event/event.component';
import { HeaderComponent } from '../component/globalComponent/header/header.component';

@Component({
  selector: 'app-testframe',
  standalone: true,
  imports: [
    TestComponent,
    CommonModule,
    SubnavComponent,
    SubnavbarComponent,
    SlideComponent,
    ArrowComponent,
    LogoComponent,
    NavButtonComponent,
    NavbarComponentComponent,
    ClickOutsideDirective,
    DropMenu1Component,
    DropMenu2Component,
    DropMenu3Component,
    FooterComponent,
    IconComponent,
    ButtonsComponent,
    SlideNewsComponent,
    PostsComponent,
    SlidePartnerComponent,
    NavNewsComponent,
    EventComponent,
    HeaderComponent
   ],
  templateUrl: './testframe.component.html',
  styleUrl: './testframe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestframeComponent implements AfterViewInit {
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