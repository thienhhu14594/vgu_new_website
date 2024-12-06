import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import routes from the separate file
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Bootstrap the app with the routes
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    RouterModule,
    provideClientHydration(),
    provideHttpClient(withFetch()), // Provides routing configuration to the app
  ],
});