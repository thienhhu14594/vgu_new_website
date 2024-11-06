import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DirectusService } from '../../../../directus.service';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from '../globalComponent/mobile/mobile-header/mobile-header.component';
import { MobileEventComponent } from '../globalComponent/mobile/mobile-event/mobile-event.component';
import { MobileHeroComponent } from '../globalComponent/mobile/mobile-hero/mobile-hero.component';
import { ButtonsComponent } from '../globalComponent/buttons/buttons.component';
import { EventComponent } from '../globalComponent/event/event.component';
import { SlideComponent } from '../globalComponent/slide/slide.component';
import { SlidePartnerComponent } from '../globalComponent/slide-partner/slide-partner.component';
import { FooterComponent } from '../globalComponent/footer/footer.component';

@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [
    CommonModule,
    MobileHeaderComponent,
    MobileEventComponent,
    MobileHeroComponent,
    ButtonsComponent,
    EventComponent,
    SlideComponent,
    SlidePartnerComponent,
    FooterComponent

  ],
  templateUrl: './landing-page-mobile.component.html',
  styleUrl: './landing-page-mobile.component.css'
})
export class LandingPageMobileComponent {
  constructor(
    public directusSrv: DirectusService
  ) { }
  ///////////////////////////////////////////////////////////////////////////
  admissionNews: any[] = [];
  generalNews: any[] = [];
  ngOnInit(): void {
    this.directusSrv.getGeneralNews().subscribe(data => {
      this.generalNews = data.data;
    });
    this.directusSrv.getAdmission().subscribe(data => {
      this.admissionNews = data.data;
    });
  }
}
