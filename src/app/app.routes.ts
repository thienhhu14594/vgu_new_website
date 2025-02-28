import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrganizationComponent } from './pages/organization/organization.component';

import { provideRouter, RouterModule, Routes } from '@angular/router';
import { StudyProgramsComponent } from './pages/study-programs/study-programs.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { PresidentialBoardComponent } from './pages/presidential-board/presidential-board.component';
import { HaThucVienComponent } from './pages/ha-thuc-vien/ha-thuc-vien.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'organization', component: OrganizationComponent },
  {
    path: 'programs',
    component: StudyProgramsComponent,
    // children: [{ path: 'program-detail', component: ProgramDetailComponent }],
  },
  { path: 'programs/:program', component: ProgramDetailComponent },
  {
    path: 'organization/presidential-board',
    component: PresidentialBoardComponent,
  },
  {
    path: 'organization/presidential-board/ha-thuc-vien',
    component: HaThucVienComponent,
  },
];
