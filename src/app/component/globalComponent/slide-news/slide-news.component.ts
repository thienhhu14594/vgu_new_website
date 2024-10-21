import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectusService } from '../../../../../directus.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slide-news',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsComponent,
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './slide-news.component.html',
  styleUrl: './slide-news.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('in', style({ translate: '200%' })),
      state('out', style({ translate: '-200%' })),
      transition('in => out', animate('1s ease-in-out'))
    ])
  ]
})
export class SlideNewsComponent{
  heroSection: any[] = [];
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    this.directusSrv.getHeroSection().subscribe(data => {
      this.heroSection = data.data;
    });
  }
}
