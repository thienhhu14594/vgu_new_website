import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent } from '../../event/event.component';
import { DirectusService } from '../../../../../../directus.service';

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
}
