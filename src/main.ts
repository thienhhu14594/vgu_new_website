import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import routes from the separate file

// Bootstrap the app with the routes
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provides routing configuration to the app
  ],
});
