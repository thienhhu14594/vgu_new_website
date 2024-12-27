import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import routes from the separate file
import { provideZoneChangeDetection } from '@angular/core';
import { HttpHandler, HttpInterceptorFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { config } from './app/app.config.server';



// Bootstrap the app with the routes
bootstrapApplication(AppComponent, config);
