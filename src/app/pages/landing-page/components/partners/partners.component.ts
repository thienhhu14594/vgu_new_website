import { Component, OnInit } from '@angular/core';
import { DirectusService } from '../../../../../../directus.service';
import { switchMap, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent implements OnInit {
  partners: any[] = [];
  originalPartners: any[] = [];
  block_id: any;
  
  constructor(public directus: DirectusService) {}
  
  ngOnInit(): void {
    console.log('Partners component ngOnInit running');
    this.loadPartners();
  }
  
  private loadPartners(): void {
    this.directus.getPartnerBlock().pipe(
      switchMap((nameResponse: any) => {
        const id = nameResponse.data[0].id;
        return this.directus.getBlockImage_byID(id);
      }),
      tap((itemResponse: any) => {
        // Store the original data
        this.originalPartners = itemResponse.data || [];
        // Create the duplicated array
        this.partners = [...this.originalPartners, ...this.originalPartners];
        console.log('Partners loaded and duplicated:', this.partners.length);
      })
    ).subscribe({
      error: (err) => {
        console.error('Error loading partners:', err);
      }
    });
  }
  
  // Add this method to refresh the component data when needed
  public refreshPartners(): void {
    if (this.originalPartners.length > 0) {
      // If we already have the original data, just re-duplicate it
      this.partners = [...this.originalPartners, ...this.originalPartners];
      console.log('Partners refreshed from cached data');
    } else {
      // Otherwise reload from the API
      this.loadPartners();
    }
  }
}