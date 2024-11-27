import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DirectusService } from '../../../../../directus.service';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs/operators';

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
  block_id: any;
  constructor (public directusSrv: DirectusService){}
  ngOnInit(): void {
    // this.directusSrv.getPartnerBlock().subscribe(data => {
    //   this.partners = data.data;
    // });
    this.directusSrv.getPartnerBlock().pipe(
      switchMap((nameResponse: any) => {
        const id = nameResponse.data[0].id; // Adjust based on your API structure
        return this.directusSrv.getBlockImage_byID(id); // Pass the name to the second request
      })
    ).subscribe({
      next: (itemResponse: any) => {
        this.partners = itemResponse.data; // Handle the response
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
    this.partners = [...this.partners,...this.partners.slice(0, this.partners.length)];
  }
  
}
