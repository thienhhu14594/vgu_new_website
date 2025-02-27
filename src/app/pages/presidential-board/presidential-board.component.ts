import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card1LComponent } from '../landing-page/components/card1-l/card1-l.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-presidential-board',
  standalone: true,
  imports: [CommonModule, Card1LComponent, RouterLink],
  templateUrl: './presidential-board.component.html',
  styleUrl: './presidential-board.component.css',
})
export class PresidentialBoardComponent {
  members = [
    {
      name: 'Prof. Dr. Rene Thiele',
      position: 'President\n',
      email: 'rene.thiele@vgu.edu.vn\n',
      phone: '+84 274 222 0990, Ext. 70111',
      image: 'rene-thiele.png',
    },
    {
      name: 'Dr. Ha Thuc Vien',
      reverse: true,
      position: 'Vice President for Academic and Student Affairs\n',
      email: 'vien.ht@vgu.edu.vn\n',
      phone: '+84 274 222 0990, Ext. 70113',
      image: 'ha-thuc-vien.png',
      link: 'ha-thuc-vien',
    },
    {
      name: 'Dr. Thomas Aulig',
      position: 'Vice President\n',
      email: 'rene.thiele@vgu.edu.vn\n',
      phone: '+84 274 222 0990, Ext. 70112',
      image: 'thomas-aulig.png',
    },
  ];
}
