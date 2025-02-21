import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrganizationComponent } from './pages/organization/organization.component';

import { provideRouter, RouterModule, Routes } from '@angular/router';
import { StudyProgramsComponent } from './pages/study-programs/study-programs.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';

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
];
