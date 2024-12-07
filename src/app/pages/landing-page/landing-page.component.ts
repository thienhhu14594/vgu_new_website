import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card3MComponent } from "./components/card3-m/card3-m.component";
import { DirectusService } from '../../../../directus.service';
import { CommonModule } from '@angular/common';
import { Card3SComponent } from "./components/card3-s/card3-s.component";
import { PrimaryButtonComponent } from "../../global-components/buttons/primary-button/primary-button.component";
import { ArrowButtonComponent } from "../../global-components/buttons/arrow-button/arrow-button.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterModule,
    Card3MComponent,
    CommonModule,
    Card3SComponent,
    PrimaryButtonComponent,
    ArrowButtonComponent
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
