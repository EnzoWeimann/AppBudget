import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

/**
 * Main configuration of the app.
 * Optimize change detection performance with eventCoalescing.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
