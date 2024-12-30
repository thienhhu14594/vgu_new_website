import { Component } from '@angular/core';
import { DirectusService } from '../../../../../../directus.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners: any[] = [];
  block_id: any;
  constructor (public directus: DirectusService){}
  ngOnInit(): void {
    // this.directusSrv.getPartnerBlock().subscribe(data => {
    //   this.partners = data.data;
    // });
    this.directus.getPartnerBlock().pipe(
      switchMap((nameResponse: any) => {
        const id = nameResponse.data[0].id; // Adjust based on your API structure
        return this.directus.getBlockImage_byID(id); // Pass the name to the second request
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