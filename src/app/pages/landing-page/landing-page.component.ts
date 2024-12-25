import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectusService } from '../../../../directus.service';
import { CommonModule } from '@angular/common';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    DisplayCardsComponent,
    HeroSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  sections: any[] = [];
  private dataSet = new Map<string, any[]>();
  constructor(public directus: DirectusService) {}

  ngOnInit(): void {
    this.directus.getLandingPage().subscribe((data) => {
      this.sections = data.data;
      console.log(this.sections[0].source);
    });
  }

  getSource(name: string): any[] {
    if (this.dataSet.has(name)) {
      return this.dataSet.get(name);
    } else {
      this.directus.getData(name).subscribe((data) => {
        this.dataSet.set(name, data.data);
      });

      return this.dataSet.get(name);
    }
  }
}
