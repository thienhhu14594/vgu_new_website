import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DirectusService } from '../../../../../../directus.service';
import { CommonModule } from '@angular/common';
import { ArrowButtonComponent } from '../../../../global-components/buttons/arrow-button/arrow-button.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    ArrowButtonComponent,
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      state('in', style({ translate: '200%' })),
      state('out', style({ translate: '-200%' })),
      transition('in => out', animate('1s ease-in-out'))
    ])
  ]
})
export class HeroSectionComponent{
  heroSection: any[] = [];
  constructor (public directus: DirectusService){}
  ngOnInit(): void {
    this.directus.getCarousel().subscribe(data => {
      this.heroSection = data.data;
    });
  }
}