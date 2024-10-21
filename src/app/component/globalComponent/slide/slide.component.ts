import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ArrowComponent } from "../arrow/arrow.component";
//import { GlobalComponent } from '../../global/global.component';
import { directus, Global } from '../../../../../directus';
import { readSingleton } from '@directus/sdk';
import { DirectusService } from '../../../../../directus.service';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SlideComponent {
  slides: any[] = [];
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    this.directusSrv.getSlide().subscribe(data => {
      this.slides = data.data;
    });
  }
}

