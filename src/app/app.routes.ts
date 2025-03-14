import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrganizationComponent } from './pages/organization/organization.component';

import { provideRouter, RouterModule, Routes } from '@angular/router';
import { StudyProgramsComponent } from './pages/study-programs/study-programs.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { DepartmentUnitComponent } from './pages/department-unit/department-unit.component';

import { Page404Component } from './pages/page-404/page-404.component';
import { StaffInfoComponent } from './pages/staff-info/staff-info.component';

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
    path: 'organization/:departmentId',
    component: DepartmentUnitComponent,
  },
  {
    path: 'organization/:departmentId/:staffId',
    component: StaffInfoComponent,
  },
  { path: 'pagenotfound', component: Page404Component },
  { path: '**', redirectTo: '/pagenotfound' },
];
