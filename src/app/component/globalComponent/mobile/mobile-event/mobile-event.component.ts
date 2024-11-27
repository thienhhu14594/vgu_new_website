import { CommonModule } from '@angular/common';
import { Input, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent } from '../../event/event.component';
import { DirectusService } from '../../../../../../directus.service';
import { htmlToText } from 'html-to-text';

@Component({
  selector: 'app-mobile-event',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule,
    EventComponent
  ],
  templateUrl: './mobile-event.component.html',
  styleUrl: './mobile-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MobileEventComponent {
  constructor (public directusSrv: DirectusService){}
  @Input() sections: any[] = [];
  stripHtml(html: string): string {
    return htmlToText(html);
  }
}
