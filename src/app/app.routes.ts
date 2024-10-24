import { provideRouter, Routes } from '@angular/router';
import {GlobalComponent} from "./component/global/global.component";
import { PageComponent } from './component/page/page.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { TestComponent } from './test/test.component';
import { TestframeComponent } from './testframe/testframe.component';
import { LandingPageDesktopComponent } from './component/landing-page-desktop/landing-page-desktop.component';

export const routes: Routes = [
  {path: 'landing-desktop', component: LandingPageDesktopComponent},
  // {path: '', component: GlobalComponent},
  {path: 'blog', component: PostsComponent},
  // {path: ':slug', component: PageComponent},
  {path: 'blog/:slug', component: PostComponent},
  {path: 'test', component: TestframeComponent},
];
