import { Component, OnInit, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../global-components/buttons/primary-button/primary-button.component';
import { Card3MComponent } from '../landing-page/components/card3-m/card3-m.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DirectusService } from '../../../../directus.service';

@Component({
  selector: 'app-study-programs',
  standalone: true,
  imports: [
    PrimaryButtonComponent,
    Card3MComponent,
    CommonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './study-programs.component.html',
  styleUrl: './study-programs.component.css',
})
export class StudyProgramsComponent implements OnInit {
  constructor(public directus: DirectusService) {}
  bachelor: boolean = true;
  programId: any[] = [];
  private router = inject(Router);
  ngOnInit(): void {
    this.directus.getPrograms().subscribe((data) => {
      this.programId = data.data;
    });
  }
}
