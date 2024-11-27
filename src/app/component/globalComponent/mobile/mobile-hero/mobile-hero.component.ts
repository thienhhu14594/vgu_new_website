import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ButtonsComponent } from '../../buttons/buttons.component';
import { DirectusService } from '../../../../../../directus.service';

@Component({
  selector: 'app-mobile-hero',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsComponent,
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './mobile-hero.component.html',
  styleUrl: './mobile-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      state('in', style({ translate: '200%' })),
      state('out', style({ translate: '-200%' })),
      transition('in => out', animate('1s ease-in-out'))
    ])
  ]
})
export class MobileHeroComponent {
  heroSection: any[] = [];
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    this.directusSrv.getCarousel().subscribe(data => {
      this.heroSection = data.data;
    });
  }
}
