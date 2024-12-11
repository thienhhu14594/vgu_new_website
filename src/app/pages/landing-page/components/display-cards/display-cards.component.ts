import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DirectusService } from '../../../../../../directus.service';
import { Card1LComponent } from '../card1-l/card1-l.component';
import { Card1SComponent } from '../card1-s/card1-s.component';
import { Card2MComponent } from '../card2-m/card2-m.component';
import { Card3MComponent } from '../card3-m/card3-m.component';
import { Card3SComponent } from '../card3-s/card3-s.component';
import { Card4MComponent } from '../card4-m/card4-m.component';
import { PrimaryButtonComponent } from '../../../../global-components/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [
    CommonModule,
    Card1LComponent,
    Card1SComponent,
    Card2MComponent,
    Card3MComponent,
    Card3SComponent,
    Card4MComponent,
    PrimaryButtonComponent,
  ],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.css'
})
export class DisplayCardsComponent {
  constructor(public directus: DirectusService) {}
  @Input() datas: any[];
  @Input() header: string;
  @Input() type: 'card1-l' | 'card1-s'| 'card2-m' | 'card3-m' | 'card3-s' | 'card4-m' = 'card3-m';
  stripHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
}
