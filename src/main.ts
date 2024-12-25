import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import routes from the separate file
import { provideZoneChangeDetection } from '@angular/core';
import { HttpHandler, HttpRequest, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

function corsInterceptor(req: HttpRequest<unknown>, next: HttpHandler) {
  const modifiedReq = req.clone({
    headers: req.headers.set('Content-Type', 'application/json')
  });
  return next.handle(modifiedReq);
}

// Bootstrap the app with the routes
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    RouterModule,
    provideClientHydration(),
    provideHttpClient(withFetch(),
  ), // Provides routing configuration to the app
  ],
});