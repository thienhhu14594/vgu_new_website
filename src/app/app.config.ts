import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouteReuseStrategy, RouterLink, RouterModule, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpHandler, HttpInterceptorFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

const corsInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.set('Content-Type', 'application/json')
  });
  return next(modifiedReq);
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes, withHashLocation()),
    RouterModule,
    provideClientHydration(),
    provideHttpClient(withFetch(),
    withInterceptors([corsInterceptor])),
    { provide: RouteReuseStrategy, useClass: class implements RouteReuseStrategy {
      shouldDetach() { return false; }
      store() {}
      shouldAttach() { return false; }
      retrieve() { return null; }
      shouldReuseRoute() { return false; }
    }},
  ],
};