import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Application entry point.
 * Initializes the app using the root component {@link AppComponent}
 * and the configuration defined in {@link appConfig}
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
