import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DirectusService } from '../../../../../directus.service';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-partner',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
  ],
  templateUrl: './slide-partner.component.html',
  styleUrl: './slide-partner.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlidePartnerComponent {
  partners: any[] = [];
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    this.directusSrv.getUniversityPartner().subscribe(data => {
      this.partners = data.data;
    });
    this.partners = [...this.partners,...this.partners.slice(0, 3)];
  }
  
}
