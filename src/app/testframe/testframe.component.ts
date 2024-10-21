import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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
    EventComponent
   ],
  templateUrl: './testframe.component.html',
  styleUrl: './testframe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestframeComponent implements AfterViewInit {
  ////////////////////////
//   constructor(private router: Router) { }
//   ngOnInit() {
//     this.router.events.subscribe((event) => {
//         if (!(event instanceof NavigationEnd)) {
//             return;
//         }
//         window.scrollTo(0, 0)
//     });
// }
  checkCollapse() {
    
  }
  currentPage: 'landing' | 'about' | 'study' | 'research' | 'industrial' = 'landing';

  propertyleft: 'default' | 'onClick' = 'onClick';
  propertyright: 'default' | 'onClick' = 'default';

  propertyAbout: 'Default' | 'Hover' | 'Selected' = 'Default';
  currentSelected: 'About' | 'Research' | 'Study' | 'Industrial' | 'none' = 'none';

  propertyorangeBlue: 'Default' | 'Hover' = 'Default';
  propertyorange: 'Default' | 'Hover' = 'Default';
  propertywhite: 'Default' | 'Hover' = 'Default';
  Methodleft() {
    this.propertyleft = 'onClick';
  }
  Methodright(){
    this.propertyright = 'onClick';
  }
  changeright(){
    if (this.propertyright=='onClick')
      this.propertyright = 'default'
  }
  changeleft(){
    if (this.propertyleft=='onClick')
      this.propertyleft = 'default'
  }
  setPropertyAbout(status: 'Default' | 'Hover' | 'Selected') {
    if (status == 'Selected') {
      this.currentSelected = 'About';
    }
    this.propertyAbout = status;
    if (this.currentSelected == 'About') {
      this.propertyAbout = 'Selected';
    }
  }
  setDefault() {
    //change selected menu base on actually current page
    this.propertyAbout = 'Default';
    switch(this.currentPage) {
      case 'landing':
        this.currentSelected = 'none'
        break
      case 'about':
        this.currentSelected = 'About'
        break
      case 'study':
        this.currentSelected = 'Study'
        break
      case 'research':
        this.currentSelected = 'Research'
        break
      case 'industrial':
        this.currentSelected = 'Industrial'
        break
    }
  }

  setPropertyorangeBlue(status: 'Default' | 'Hover') {
    this.propertyorangeBlue = status;
  }
  setPropertyorange(status: 'Default' | 'Hover') {
    this.propertyorange = status;
  }
  setPropertywhite(status: 'Default' | 'Hover') {
    this.propertywhite = status;
  }
/////////////////////////////////////////////////////////////////
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
    this.setNavNewsDefault();
    this.propertyN = status;
  }
  setPropertyA() {

  }
  setPropertyR() {

  }
  setPropertyU() {

  }
  setPropertyP() {

  }

  constructor(private cdr: ChangeDetectorRef) { }
  @ViewChildren('st2, st3, st4, st5, stl') elements!: QueryList<ElementRef>; // Reference to all elements

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.className == 'st2') {
            console.log(`Scrolled to st2`);
            this.propertyN = 'Selected';
            console.log(`propertyN = ${this.propertyN}`);
            this.cdr.detectChanges();
          }
        }
      });
    });

    // Start observing all elements
    this.elements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }

  scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth" });
  }
}