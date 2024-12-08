import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card3MComponent } from "./components/card3-m/card3-m.component";
import { DirectusService } from '../../../../directus.service';
import { CommonModule } from '@angular/common';
import { Card3SComponent } from "./components/card3-s/card3-s.component";
import { PrimaryButtonComponent } from "../../global-components/buttons/primary-button/primary-button.component";
import { ArrowButtonComponent } from "../../global-components/buttons/arrow-button/arrow-button.component";
import { Card2MComponent } from "./components/card2-m/card2-m.component";
import { Card4MComponent } from "./components/card4-m/card4-m.component";
import { Card1SComponent } from './components/card1-s/card1-s.component';
import { Card1LComponent } from './components/card1-l/card1-l.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    DisplayCardsComponent,
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  generalNews: any[] = [];
  constructor(public directus:DirectusService) {};

  ngOnInit(): void {
    this.directus.getPosts().subscribe(data => {
      this.generalNews = data.data;
    });
  }
}
